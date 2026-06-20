export const HERO_STATS_TOP = 1339;
export const HERO_STATS_FADE_TOP = 1269;
export const HERO_STATS_FADE_HEIGHT = 372;

/** Orange dot field — below hero/stats (fixed top; do not use %). */
export const DOTS_TOP = 1820;

/** Features block — fixed tops (do not use %; page height changes). */
export const FEATURES_SECTION_TOP = 1788;
const FEATURES_CONTENT_BOTTOM =
  FEATURES_SECTION_TOP + 320 + 219 + 199;

const ABOUT_GAP = 54;
/** ~54px below feature cards. */
export const SECTION_ABOUT_TOP = FEATURES_CONTENT_BOTTOM + ABOUT_GAP;

/** About intro + stats grid (fixed layout heights). */
const ABOUT_INTRO_HEIGHT = 173;
const ABOUT_SECTION_GAP = 49;
const ABOUT_STATS_HEIGHT = 276;
const GAP_AFTER_ABOUT_STATS = 128;

export const SECTION_PRICING_TOP =
  SECTION_ABOUT_TOP +
  ABOUT_INTRO_HEIGHT +
  ABOUT_SECTION_GAP +
  ABOUT_STATS_HEIGHT +
  GAP_AFTER_ABOUT_STATS;

/** Estimated block heights + gap so FAQ/CTA/footer do not overlap. */
const SECTION_GAP = 96;
const PRICING_BLOCK_HEIGHT = 1060;
/** Extra breathing room below pricing before FAQ. */
const FAQ_TOP_OFFSET = 52;
/** FAQ with one accordion open (~940px content + heading). */
const FAQ_BLOCK_HEIGHT = 940;
const CTA_BLOCK_HEIGHT = 375;
export const FOOTER_BLOCK_HEIGHT = 500;

export const SECTION_FAQ_TOP =
  SECTION_PRICING_TOP + PRICING_BLOCK_HEIGHT + SECTION_GAP + FAQ_TOP_OFFSET;
export const SECTION_CTA_TOP = SECTION_FAQ_TOP + FAQ_BLOCK_HEIGHT + SECTION_GAP;
const SECTION_FOOTER_TOP = SECTION_CTA_TOP + CTA_BLOCK_HEIGHT + SECTION_GAP;

/** Scaled Figma canvas — footer is rendered full-bleed outside this height. */
export const DESIGN_CANVAS_HEIGHT = SECTION_FOOTER_TOP;

/** Total document height (canvas + footer). */
export const DESIGN_PAGE_HEIGHT =
  SECTION_FOOTER_TOP + FOOTER_BLOCK_HEIGHT;

export const DESIGN_WIDTH = 1440;

/** Nav inset from viewport top (design canvas px). */
export const NAV_TOP = 24;
export const NAV_BAND_HEIGHT = NAV_TOP + 72;
/** Scrim extends below nav links for a soft fade into the hero. */
export const NAV_SCRIM_HEIGHT = 168;

/** Hero UI under this marker pauses galaxy mouse repulsion while hovered. */
const HERO_GALAXY_MOUSE_BLOCK = "data-hero-galaxy-block";
export const HERO_GALAXY_MOUSE_BLOCK_SELECTOR = `[${HERO_GALAXY_MOUSE_BLOCK}]`;

/** Full-bleed background bands (design canvas coordinates). */
export const PRICING_BG_WIDTH = 1483;
export const PRICING_BG_TOP = SECTION_PRICING_TOP - 180;
export const PRICING_BG_HEIGHT = 925;
export const PRICING_FADE_HEIGHT = 330;
export const PRICING_FADE_TOP = PRICING_BG_TOP + PRICING_BG_HEIGHT - PRICING_FADE_HEIGHT;
export const FAQ_GLOW_PRIMARY_TOP = SECTION_FAQ_TOP - 369;
export const FAQ_GLOW_PRIMARY_HEIGHT = 1335;
export const FAQ_GLOW_SECONDARY_TOP = SECTION_FAQ_TOP - 204;
export const FAQ_GLOW_SECONDARY_HEIGHT = 1281;
export const FAQ_ELLIPSE_TOP = SECTION_FAQ_TOP - 129;
export const FAQ_ELLIPSE_HEIGHT = 983;

/** Grey rounded accent — sits above the CTA, half cut at viewport left. */
export const DECOR_LOWER_ROUNDED_HEIGHT = 226.264;
export const DECOR_LOWER_ROUNDED_WIDTH = 636.588;
const DECOR_LOWER_ROUNDED_GAP_ABOVE_CTA = 180;
export const DECOR_LOWER_ROUNDED_TOP =
  SECTION_CTA_TOP - DECOR_LOWER_ROUNDED_GAP_ABOVE_CTA - DECOR_LOWER_ROUNDED_HEIGHT;

/** Orange ring — half cut at viewport right. */
export const DECOR_ORANGE_CIRCLE_SIZE = 445.494;
export const DECOR_ORANGE_CIRCLE_TOP =
  DESIGN_CANVAS_HEIGHT / 2 + 1336.75;

/** Coral pill near pricing — half cut at viewport left (rotated 90°). */
export const DECOR_PRICING_PILL_TOP = SECTION_PRICING_TOP + 152;
export const DECOR_PRICING_PILL_WIDTH = 423.219;
export const DECOR_PRICING_PILL_HEIGHT = 226.264;

const LANDING_CONTENT_WIDTH = 920;
const HERO_SECTION_LEFT = 217;
const HERO_SECTION_WIDTH = 1005;

const LANDING_CONTENT_LEFT =
  HERO_SECTION_LEFT + (HERO_SECTION_WIDTH - LANDING_CONTENT_WIDTH) / 2;

/** Center x of a stats column (0 = Tools, 1 = Protocols, 2 = Run modes). */
export function landingContentColumnCenter(third: 0 | 1 | 2): number {
  return LANDING_CONTENT_LEFT + (LANDING_CONTENT_WIDTH * (third * 2 + 1)) / 6;
}

/** Divider x between stats columns (0 = after Tools, 1 = after Protocols). */
export function landingContentColumnDivider(afterThird: 0 | 1): number {
  return LANDING_CONTENT_LEFT + (LANDING_CONTENT_WIDTH * (afterThird + 1)) / 3;
}
