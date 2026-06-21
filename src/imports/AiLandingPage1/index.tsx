import svgPaths from "./svg-3a59wk3hgj";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/landing/CtaSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroDotsField from "@/components/landing/HeroDotsField";
import HeroSection from "@/components/landing/HeroSection";
import HeroStatsBar from "@/components/landing/HeroStatsBar";
import PricingSection from "@/components/landing/PricingSection";
import {
  DESIGN_CANVAS_HEIGHT,
  HERO_STATS_FADE_TOP,
  SECTION_ABOUT_TOP,
} from "@/components/landing/layout";
import imgImage from "./eaa2237d00f3be218191babfee64f05f1c90a9b7.png";
import imgImage2 from "./89f75248c238a9d4d3ca30db47675f6c6b8fa624.png";
import imgImage3 from "./d7a2e300be1afb827238911bc33b493df0930bbf.png";
import imgImage5 from "./37d0b373372f110ed7f25e883a940a035e6aedd6.png";
import imgRectangle21 from "./f8df795770b6f6628acccaaa4b97eeee7707efc1.png";
import imgImage7 from "./6776c7f9fd82b7dae68f6d9137757b5b783eed5d.png";
import imgImage8 from "./486ba6b79f961bd6e318f0b960a5d60bf41c121c.png";
import imgImage9 from "./33c3e5efefa5f721a3c88a9cb8bc105a269b6c49.png";
import imgImage10 from "./94e05f70504df43d8755ec1c37839df3c1191c44.png";
import imgImage11 from "./6c8c499aef16fc32046f914c1b80e40b362fbc70.png";
import imgImage12 from "./13c98ad98709973f59036136a552fab30851a3ed.png";
import imgImage13 from "./6001ea6de6d6e9e72223a0f25b25afea8a9e8b66.png";
import imgImage14 from "./fdadfa2bc74c3f288c8a26aaea0f3114d2a9a244.png";
import imgImage15 from "./a15eb9f941bf44e5bddbc9cadfca7164de5a2827.png";
import imgImage16 from "./1721001053dd2ecdce8f233343db74b427891fb0.png";
import imgImage17 from "./b64b60dc1dcd869bec44719f964b113827467a3b.png";
import { imgImage1, imgImage4, imgImage6 } from "./svg-e5rgk";

export default function AiLandingPage({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative w-[1440px] overflow-clip bg-transparent"}
      style={{ height: DESIGN_CANVAS_HEIGHT }}
      data-name="AI Landing Page 1"
    >
      <div className="absolute contents left-[-289px] top-[-239px]" data-name="Hero-Section">
        <div className="absolute contents left-[41px] top-[-16px]">
            <div className="absolute h-[481px] left-[240px] opacity-35 top-[119px] w-[319px]" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
              </div>
            </div>
            <div className="absolute h-[481px] left-[41px] opacity-22 top-[-16px] w-[319px]" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
              </div>
            </div>
            <div className="absolute h-[481px] left-[654px] opacity-22 top-[-12px] w-[319px]" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
              </div>
            </div>
            <div className="absolute h-[481px] left-[981px] opacity-22 -top-px w-[319px]" data-name="image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
              </div>
            </div>
            <div className="absolute flex h-[319px] items-center justify-center left-[698px] top-[477px] w-[481px]">
              <div className="flex-none rotate-90">
                <div className="h-[481px] opacity-22 relative w-[319px]" data-name="image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[319px] items-center justify-center left-[194px] top-[477px] w-[481px]">
              <div className="flex-none rotate-90">
                <div className="h-[481px] opacity-22 relative w-[319px]" data-name="image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <HeroSection />
      </div>
      <HeroDotsField />
      <div
        className="-translate-x-1/2 pointer-events-none absolute left-1/2 z-[1] h-[372px] w-[1440px] bg-linear-to-b from-[5.582%] from-[rgba(0,0,0,0)] to-1/2 to-black"
        style={{ top: HERO_STATS_FADE_TOP }}
        aria-hidden
      />
      <HeroStatsBar />
      <PricingSection />
      <FaqSection />
      <FeaturesSection />
      <div
        id="about"
        className="absolute content-stretch flex flex-col gap-[49px] items-center left-[110px] w-[1244.998px]"
        style={{ top: SECTION_ABOUT_TOP }}
        data-name="Numbers & Stats-Section"
      >
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-[900px]" data-name="Numbers & Stats-Content">
          <p className="font-sans leading-[39.7px] opacity-60 text-[16px] tracking-[-0.48px]">About LLM Claude</p>
          <p className="font-display font-semibold leading-[39.169px] text-[27.978px] tracking-[-0.8393px]">
            {`Whether you're completing the CodeCrafters challenge, hacking locally, or wiring an editor over ACP—this CLI keeps the agent loop small, inspectable, and tool-driven.`}
            <br aria-hidden />
            Here is what you get out of the box:
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-0 place-items-start relative shrink-0">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="01years">
            <p className="[word-break:break-word] col-1 font-sans leading-[29.843px] ml-[1.86px] mt-[84.86px] not-italic relative row-1 text-[22.382px] text-white tracking-[-0.6715px] whitespace-nowrap">Built-in tools</p>
            <p className="[word-break:break-word] col-1 font-sans leading-[20.517px] ml-[2.8px] mt-[118.44px] not-italic relative row-1 text-[#8f8e8e] text-[14.921px] tracking-[-0.4476px] whitespace-nowrap">Read, Write, Bash, LSP, search, and more</p>
            <p className="[word-break:break-word] col-1 font-display font-semibold leading-[74.607px] ml-0 mt-0 not-italic relative row-1 text-[67.146px] text-white tracking-[-3.3573px] whitespace-nowrap">8+</p>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.8px] mt-[128.7px] place-items-start relative row-1" data-name="images">
              <div className="col-1 flex h-[91.393px] items-center justify-center ml-[96.06px] mt-0 relative row-1 w-[193.978px]">
                <div className="-scale-y-100 flex-none">
                  <div className="h-[91.393px] relative w-[193.978px]" data-name="decor1">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.978 91.3933">
                      <g id="decor1">
                        <line id="Line 3" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 26.1123)" x2="193.978" y1="-0.466292" y2="-0.466292" />
                        <g id="vert">
                          <line id="Line 4" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 170.66 91.3933)" x2="91.3933" y1="-0.466292" y2="-0.466292" />
                          <path clipRule="evenodd" d={svgPaths.p21dab800} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract" />
                          <path clipRule="evenodd" d={svgPaths.pbbcd500} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract_2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[43.83px] place-items-start relative row-1" data-name="3">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[37.303px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[69.011px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[57.82px_14.921px] mask-size-[40.101px_40.101px] ml-[-57.82px] mt-[-14.92px] relative row-1 w-[93.258px]" style={{ maskImage: `url("${imgImage1}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.98px] mt-[43.83px] place-items-start relative row-1" data-name="2">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[37.303px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[56.888px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[11.188px_0.933px] mask-size-[40.101px_40.101px] ml-[-11.19px] mt-[-0.93px] relative row-1 w-[76.472px]" style={{ maskImage: `url("${imgImage1}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.96px] mt-[43.83px] place-items-start relative row-1" data-name="1">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[37.303px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[47.562px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0.934px_3.73px] mask-size-[40.101px_40.101px] ml-[-0.93px] mt-[-3.73px] relative rounded-[18.652px] row-1 w-[64.348px]" style={{ maskImage: `url("${imgImage4}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18.652px] size-full" src={imgImage5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[318.01px] mt-[83.93px] place-items-start relative row-1" data-name="02projects">
            <p className="[word-break:break-word] col-1 font-sans leading-[29.843px] ml-[1.86px] mt-[83px] not-italic relative row-1 text-[22.382px] text-white tracking-[-0.6715px] whitespace-nowrap">Run modes</p>
            <p className="[word-break:break-word] col-1 font-sans leading-[20.517px] ml-[2.8px] mt-[118.44px] not-italic relative row-1 text-[#8f8e8e] text-[14.921px] tracking-[-0.4476px] whitespace-nowrap">Chat, CodeCrafters submit, and ACP</p>
            <p className="[word-break:break-word] col-1 font-display font-semibold leading-[74.607px] ml-0 mt-0 not-italic relative row-1 text-[67.146px] text-white tracking-[-3.3573px] whitespace-nowrap">3</p>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.8px] mt-[162.27px] place-items-start relative row-1" data-name="images">
              <div className="col-1 h-[93.258px] ml-[49.43px] mt-0 relative row-1 w-[239.674px]" data-name="decor1">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239.674 93.2585">
                  <g id="decor1">
                    <line id="Line 3" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x2="239.674" y1="28.4439" y2="28.4439" />
                    <g id="vert">
                      <line id="Line 4" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x1="216.827" x2="216.827" y1="93.2585" y2="0.000114421" />
                      <path clipRule="evenodd" d={svgPaths.p2b7b7b00} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract" />
                      <path clipRule="evenodd" d={svgPaths.pd1de200} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[8.39px] place-items-start relative row-1" data-name="3">
                <div className="col-1 ml-0 mt-0 pointer-events-none relative rounded-[5.596px] row-1 size-[40.101px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[5.596px] size-full" src={imgRectangle21} />
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[12.125px_10.259px] mask-size-[40.101px_40.101px] ml-[-12.13px] mt-[-10.26px] relative row-1 size-[55.022px]" style={{ maskImage: `url("${imgImage6}")` }} data-name="image 6">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.98px] mt-[8.39px] place-items-start relative row-1" data-name="2">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[5.596px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[41.034px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[4.66px_0.933px] mask-size-[40.101px_40.101px] ml-[-4.66px] mt-[-0.93px] relative row-1 w-[61.551px]" style={{ maskImage: `url("${imgImage6}")` }} data-name="image 5">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.96px] mt-[8.39px] place-items-start relative row-1" data-name="1">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[5.596px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[55.022px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[42.902px_11.191px] mask-size-[40.101px_40.101px] ml-[-42.9px] mt-[-11.19px] relative row-1 w-[98.854px]" style={{ maskImage: `url("${imgImage9}")` }} data-name="image 4">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[636.02px] mt-0 place-items-start relative row-1" data-name="03clients">
            <p className="[word-break:break-word] col-1 font-sans leading-[29.843px] ml-[1.86px] mt-[84.86px] not-italic relative row-1 text-[22.382px] text-white tracking-[-0.6715px] whitespace-nowrap">TypeScript codebase</p>
            <p className="[word-break:break-word] col-1 font-sans leading-[20.517px] ml-[2.8px] mt-[118.44px] not-italic relative row-1 text-[#8f8e8e] text-[14.921px] tracking-[-0.4476px] whitespace-nowrap">Compiler API for LSP tools</p>
            <p className="[word-break:break-word] col-1 font-display font-semibold leading-[74.607px] ml-0 mt-0 not-italic relative row-1 text-[67.146px] text-white tracking-[-3.3573px] whitespace-nowrap">98%</p>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.8px] mt-[127.76px] place-items-start relative row-1" data-name="images">
              <div className="col-1 h-[93.258px] ml-[49.43px] mt-0 relative row-1 w-[238.742px]" data-name="decor1">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238.742 93.2585">
                  <g id="decor1">
                    <line id="Line 3" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x2="238.742" y1="64.8147" y2="64.8147" />
                    <g id="vert">
                      <line id="Line 4" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x1="216.827" x2="216.827" y1="93.2585" y2="0.000114421" />
                      <path clipRule="evenodd" d={svgPaths.p98c7f0} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract" />
                      <path clipRule="evenodd" d={svgPaths.p23663f00} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[44.76px] place-items-start relative row-1" data-name="3">
                <div className="col-1 ml-0 mt-0 pointer-events-none relative rounded-[37.303px] row-1 size-[40.101px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[37.303px] size-full" src={imgRectangle21} />
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[2.797px_4.663px] mask-size-[40.101px_40.101px] ml-[-2.8px] mt-[-4.66px] relative row-1 size-[44.764px]" style={{ maskImage: `url("${imgImage1}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.98px] mt-[44.76px] place-items-start relative row-1" data-name="2">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[37.303px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0.934px_0.933px] mask-size-[40.101px_40.101px] ml-[-0.93px] mt-[-0.93px] relative row-1 size-[41.034px]" style={{ maskImage: `url("${imgImage1}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.95px] mt-[44.76px] place-items-start relative row-1" data-name="1">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[37.303px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[40.101px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[47.562px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0.93px_3.73px] mask-size-[40.101px_40.101px] ml-[-0.93px] mt-[-3.73px] relative rounded-[18.652px] row-1 w-[41.034px]" style={{ maskImage: `url("${imgImage13}")` }} data-name="image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18.652px] size-full" src={imgImage14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[953.1px] mt-[83.93px] place-items-start relative row-1" data-name="04inwork">
            <p className="[word-break:break-word] col-1 font-sans leading-[29.843px] ml-[1.86px] mt-[82.07px] not-italic relative row-1 text-[22.382px] text-white tracking-[-0.6715px] whitespace-nowrap">Open source</p>
            <p className="[word-break:break-word] col-1 font-sans leading-[20.517px] ml-[2.8px] mt-[117.51px] not-italic relative row-1 text-[#8f8e8e] text-[14.921px] tracking-[-0.4476px] whitespace-nowrap">Clone and run locally today</p>
            <p className="[word-break:break-word] col-1 font-display font-semibold leading-[74.607px] ml-0 mt-0 not-italic relative row-1 text-[67.146px] text-white tracking-[-3.3573px] whitespace-nowrap">OSS</p>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.8px] mt-[162.27px] place-items-start relative row-1">
              <div className="col-1 h-[93.258px] ml-[49.43px] mt-0 relative row-1 w-[239.674px]" data-name="decor1">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239.674 93.2585">
                  <g id="decor1">
                    <line id="Line 3" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x2="239.674" y1="27.5112" y2="27.5112" />
                    <g id="vert">
                      <line id="Line 4" stroke="var(--stroke-0, #D6DBDC)" strokeWidth="0.932584" x1="216.827" x2="216.827" y1="93.2585" y2="0.000114421" />
                      <path clipRule="evenodd" d={svgPaths.p3de6ce00} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract" />
                      <path clipRule="evenodd" d={svgPaths.p378d9680} fill="var(--fill-0, #D6DBDC)" fillRule="evenodd" id="Subtract_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[7.46px] place-items-start relative row-1" data-name="3">
                <div className="col-1 ml-0 mt-0 pointer-events-none relative rounded-[5.596px] row-1 size-[40.101px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[5.596px] size-full" src={imgRectangle21} />
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 flex h-[41.034px] items-center justify-center ml-[-16.79px] mt-0 relative row-1 w-[78.337px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="h-[41.034px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[16.786px_0px] mask-size-[40.101px_40.101px] relative w-[78.337px]" style={{ maskImage: `url("${imgImage6}")` }} data-name="image 8">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.98px] mt-[7.46px] place-items-start relative row-1" data-name="2">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[5.596px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[48.494px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[37.301px_7.461px] mask-size-[40.101px_40.101px] ml-[-37.3px] mt-[-7.46px] relative row-1 w-[72.742px]" style={{ maskImage: `url("${imgImage6}")` }} data-name="image 7">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.96px] mt-[7.46px] place-items-start relative row-1" data-name="4">
                <div className="bg-[#d6dbdc] col-1 ml-0 mt-0 relative rounded-[5.596px] row-1 size-[40.101px]">
                  <div aria-hidden className="absolute border-[#f2f2f2] border-[2.798px] border-solid inset-[-2.798px] pointer-events-none rounded-[8.394px]" />
                </div>
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Mask group">
                  <div className="col-1 h-[66.213px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0.934px_21.449px] mask-size-[40.101px_40.101px] ml-[-0.93px] mt-[-21.45px] relative row-1 w-[44.764px]" style={{ maskImage: `url("${imgImage6}")` }} data-name="image 9">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>
  );
}
