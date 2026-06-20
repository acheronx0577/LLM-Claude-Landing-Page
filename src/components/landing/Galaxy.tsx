"use client";

import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import "./Galaxy.css";
import { HERO_GALAXY_MOUSE_BLOCK_SELECTOR } from "@/components/landing/layout";

/** Target max framebuffer area — keeps look on laptop, saves work on ultrawide/4K. */
const DEFAULT_MAX_RENDER_PIXELS = 1_920_000;
const MIN_RENDER_SCALE = 0.68;

function getRenderScale(
  cssWidth: number,
  cssHeight: number,
  maxRenderPixels: number,
) {
  if (cssWidth <= 0 || cssHeight <= 0) return 1;
  const area = cssWidth * cssHeight;
  if (area <= maxRenderPixels) return 1;
  return Math.max(MIN_RENDER_SCALE, Math.sqrt(maxRenderPixels / area));
}

function debounce<T extends (...args: never[]) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uHuePull;
uniform float uHueSpread;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);

      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      float center = uHueShift / 360.0;
      float spread = uHueSpread / 360.0;

      float hRust = center - spread * 0.78;
      float hEmber = center - spread * 0.39;
      float hBrand = center;
      float hCoral = center + spread * 0.39;
      float hGold = center + spread * 0.78;

      float bucket = floor(Hash21(si + 13.0) * 5.0);
      float paletteHue = hBrand;
      if (bucket < 1.0) paletteHue = hRust;
      else if (bucket < 2.0) paletteHue = hEmber;
      else if (bucket < 3.0) paletteHue = hBrand;
      else if (bucket < 4.0) paletteHue = hCoral;
      else paletteHue = hGold;

      paletteHue += (Hash21(si + 17.0) - 0.5) * spread * 0.14;
      paletteHue = fract(paletteHue);

      float tone = Hash21(si + 19.0);
      float starSat = uSaturation;
      float val = max(max(base.r, base.g), base.b);

      if (tone < 0.42) {
        starSat = uSaturation * mix(0.32, 0.55, tone / 0.42);
      } else {
        starSat = uSaturation * mix(0.55, 1.0, (tone - 0.42) / 0.58);
      }

      hue = mix(fract(hue + center * 0.08), paletteHue, uHuePull);
      vec3 color = hsv2rgb(vec3(hue, starSat, val));
      color = mix(color, color * vec3(1.0, 0.9, 0.72), uHuePull * 0.1);

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;

      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);

  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  vec3 warmLift = vec3(1.0, 0.94, 0.84);
  col = mix(col, col * warmLift, uHuePull * 0.1);
  col.g = min(col.g, col.r * 0.9);
  col.b = min(col.b, col.r * 0.68);

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;

export type GalaxyProps = {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  /** 0 = raw star hues, 1 = snap to warm orange palette. */
  huePull?: number;
  /** Spread of palette hues around hueShift (degrees). */
  hueSpread?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
  /** Cap internal pixel count; canvas still fills the layout via CSS upscaling. */
  maxRenderPixels?: number;
  /** Pause the WebGL loop when off-screen or tab is hidden. */
  pauseOffscreen?: boolean;
} & ComponentPropsWithoutRef<"div">;

export default function Galaxy({
  focal = [0.5, 0.5],
  rotation = [1.0, 0.0],
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  huePull = 0,
  hueSpread = 28,
  disableAnimation = false,
  speed = 1.0,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0.0,
  mouseRepulsion = true,
  repulsionStrength = 2,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  autoCenterRepulsion = 0,
  transparent = true,
  maxRenderPixels = DEFAULT_MAX_RENDER_PIXELS,
  pauseOffscreen = true,
  ...rest
}: GalaxyProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const smoothMousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMouseActive = useRef(0.0);
  const smoothMouseActive = useRef(0.0);
  const pendingMouse = useRef<{ x: number; y: number; active: number } | null>(
    null,
  );

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const container = ctn;
    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false,
      dpr: 1,
      powerPreference: "high-performance",
      antialias: false,
    });
    const gl = renderer.gl;

    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0, 0, 0, 1);
    }

    let program: Program | undefined;
    let inView = true;
    let tabVisible = !document.hidden;
    let shouldRender = true;

    function syncVisibility() {
      shouldRender = !pauseOffscreen || (inView && tabVisible);
    }

    function resize() {
      const cssWidth = container.offsetWidth;
      const cssHeight = container.offsetHeight;
      renderer.dpr = getRenderScale(cssWidth, cssHeight, maxRenderPixels);
      renderer.setSize(cssWidth, cssHeight);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height,
        );
      }
    }

    const debouncedResize = debounce(resize, 120);
    resize();

    const resizeObserver = new ResizeObserver(debouncedResize);
    resizeObserver.observe(container);

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ),
        },
        uFocal: { value: new Float32Array(focal) },
        uRotation: { value: new Float32Array(rotation) },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uHuePull: { value: huePull },
        uHueSpread: { value: hueSpread },
        uSpeed: { value: speed },
        uMouse: {
          value: new Float32Array([
            smoothMousePos.current.x,
            smoothMousePos.current.y,
          ]),
        },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uMouseActiveFactor: { value: 0.0 },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId = 0;

    function update(t: number) {
      animateId = requestAnimationFrame(update);

      if (pendingMouse.current) {
        targetMousePos.current.x = pendingMouse.current.x;
        targetMousePos.current.y = pendingMouse.current.y;
        targetMouseActive.current = pendingMouse.current.active;
        pendingMouse.current = null;
      }

      if (!shouldRender) return;

      if (!disableAnimation) {
        program!.uniforms.uTime.value = t * 0.001;
        program!.uniforms.uStarSpeed.value = (t * 0.001 * starSpeed) / 10.0;
      }

      const lerpFactor = 0.05;
      smoothMousePos.current.x +=
        (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
      smoothMousePos.current.y +=
        (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;

      smoothMouseActive.current +=
        (targetMouseActive.current - smoothMouseActive.current) * lerpFactor;

      program!.uniforms.uMouse.value[0] = smoothMousePos.current.x;
      program!.uniforms.uMouse.value[1] = smoothMousePos.current.y;
      program!.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;

      renderer.render({ scene: mesh });
    }

    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry?.isIntersecting ?? true;
        syncVisibility();
      },
      { threshold: 0.01 },
    );
    intersectionObserver.observe(container);

    function handleVisibilityChange() {
      tabVisible = !document.hidden;
      syncVisibility();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    syncVisibility();

    function pointerBlocksGalaxyMouse(e: MouseEvent) {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      return target?.closest(HERO_GALAXY_MOUSE_BLOCK_SELECTOR) != null;
    }

    function handleMouseMove(e: MouseEvent) {
      if (pointerBlocksGalaxyMouse(e)) {
        pendingMouse.current = {
          x: targetMousePos.current.x,
          y: targetMousePos.current.y,
          active: 0,
        };
        return;
      }

      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const inBand =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      if (!inBand) {
        pendingMouse.current = {
          x: targetMousePos.current.x,
          y: targetMousePos.current.y,
          active: 0,
        };
        return;
      }

      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      pendingMouse.current = {
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
        active: 1,
      };
    }

    function handleMouseLeave() {
      pendingMouse.current = {
        x: targetMousePos.current.x,
        y: targetMousePos.current.y,
        active: 0,
      };
    }

    if (mouseInteraction) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseout", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animateId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (mouseInteraction) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseout", handleMouseLeave);
      }
      if (gl.canvas.parentElement === container) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    focal,
    rotation,
    starSpeed,
    density,
    hueShift,
    huePull,
    hueSpread,
    disableAnimation,
    speed,
    mouseInteraction,
    glowIntensity,
    saturation,
    mouseRepulsion,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    transparent,
    maxRenderPixels,
    pauseOffscreen,
  ]);

  return <div ref={ctnDom} className="galaxy-container" {...rest} />;
}
