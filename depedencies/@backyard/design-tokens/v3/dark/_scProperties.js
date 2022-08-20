"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeVariables = void 0;

var _styledComponents = require("styled-components");

var ThemeVariables = (0, _styledComponents.css)([":root{--bds-border-radius-sm:", ";--bds-border-radius-md:", ";--bds-border-radius-lg:", ";--bds-border-radius-circle:", ";--bds-border-width-sm:", ";--bds-border-width-md:", ";--bds-border-width-lg:", ";--bds-border-width-xl:", ";--bds-grid-breakpoint-xs-min:", ";--bds-grid-breakpoint-xs-max:", ";--bds-grid-breakpoint-sm-min:", ";--bds-grid-breakpoint-sm-max:", ";--bds-grid-breakpoint-md-min:", ";--bds-grid-breakpoint-md-max:", ";--bds-grid-breakpoint-lg-min:", ";--bds-grid-breakpoint-lg-max:", ";--bds-grid-breakpoint-xl-min:", ";--bds-grid-breakpoint-xl-max:", ";--bds-grid-breakpoint-xxl-min:", ";--bds-grid-breakpoint-xxl-max:", ";--bds-grid-padding:", ";--bds-grid-margin-none:", ";--bds-grid-margin-sm:", ";--bds-grid-margin-md:", ";--bds-grid-margin-lg:", ";--bds-shadows-shadow-01:", ";--bds-shadows-shadow-02:", ";--bds-shadows-shadow-03:", ";--bds-shadows-shadow-04:", ";--bds-shadows-shadow-05:", ";--bds-shadows-shadow-06:", ";--bds-sizes-size-0:", ";--bds-sizes-size-1:", ";--bds-sizes-size-2:", ";--bds-sizes-size-3:", ";--bds-sizes-size-4:", ";--bds-sizes-size-5:", ";--bds-sizes-size-6:", ";--bds-sizes-size-7:", ";--bds-sizes-size-8:", ";--bds-sizes-size-10:", ";--bds-sizes-size-12:", ";--bds-sizes-size-14:", ";--bds-sizes-size-16:", ";--bds-sizes-size-18:", ";--bds-sizes-size-20:", ";--bds-sizes-size-24:", ";--bds-sizes-size-28:", ";--bds-sizes-size-32:", ";--bds-sizes-size-36:", ";--bds-sizes-size-40:", ";--bds-sizes-size-44:", ";--bds-sizes-size-48:", ";--bds-sizes-size-52:", ";--bds-sizes-size-56:", ";--bds-sizes-size-60:", ";--bds-sizes-size-64:", ";--bds-sizes-size-68:", ";--bds-sizes-size-72:", ";--bds-sizes-size-76:", ";--bds-sizes-size-80:", ";--bds-sizes-size-84:", ";--bds-sizes-size-88:", ";--bds-sizes-size-92:", ";--bds-sizes-size-96:", ";--bds-sizes-size-100:", ";--bds-sizes-size-104:", ";--bds-sizes-size-108:", ";--bds-sizes-size-112:", ";--bds-sizes-size-116:", ";--bds-sizes-size-120:", ";--bds-sizes-size-124:", ";--bds-sizes-size-128:", ";--bds-font-weight-regular:", ";--bds-font-weight-medium:", ";--bds-font-weight-semibold:", ";--bds-font-family-roboto:", ";--bds-font-family-fellix:", ";--bds-font-tag-h1-desktop-font-size:", ";--bds-font-tag-h1-desktop-line-height:", ";--bds-font-tag-h1-mobile-font-size:", ";--bds-font-tag-h1-mobile-line-height:", ";--bds-font-tag-h2-desktop-font-size:", ";--bds-font-tag-h2-desktop-line-height:", ";--bds-font-tag-h2-mobile-font-size:", ";--bds-font-tag-h2-mobile-line-height:", ";--bds-font-tag-h3-desktop-font-size:", ";--bds-font-tag-h3-desktop-line-height:", ";--bds-font-tag-h3-mobile-font-size:", ";--bds-font-tag-h3-mobile-line-height:", ";--bds-font-tag-h4-desktop-font-size:", ";--bds-font-tag-h4-desktop-line-height:", ";--bds-font-tag-h4-mobile-font-size:", ";--bds-font-tag-h4-mobile-line-height:", ";--bds-font-tag-h5-desktop-font-size:", ";--bds-font-tag-h5-desktop-line-height:", ";--bds-font-tag-h5-mobile-font-size:", ";--bds-font-tag-h5-mobile-line-height:", ";--bds-font-tag-h6-desktop-font-size:", ";--bds-font-tag-h6-desktop-line-height:", ";--bds-font-tag-h6-mobile-font-size:", ";--bds-font-tag-h6-mobile-line-height:", ";--bds-font-tag-body-1-desktop-font-size:", ";--bds-font-tag-body-1-desktop-line-height:", ";--bds-font-tag-body-1-mobile-font-size:", ";--bds-font-tag-body-1-mobile-line-height:", ";--bds-font-tag-body-2-desktop-font-size:", ";--bds-font-tag-body-2-desktop-line-height:", ";--bds-font-tag-body-2-mobile-font-size:", ";--bds-font-tag-body-2-mobile-line-height:", ";--bds-font-tag-article-desktop-font-size:", ";--bds-font-tag-article-desktop-line-height:", ";--bds-font-tag-article-mobile-font-size:", ";--bds-font-tag-article-mobile-line-height:", ";--bds-font-tag-caption-desktop-font-size:", ";--bds-font-tag-caption-desktop-line-height:", ";--bds-font-tag-caption-mobile-font-size:", ";--bds-font-tag-caption-mobile-line-height:", ";--bds-font-tag-footnote-desktop-font-size:", ";--bds-font-tag-footnote-desktop-line-height:", ";--bds-font-tag-footnote-mobile-font-size:", ";--bds-font-tag-footnote-mobile-line-height:", ";--bds-font-tag-overline-desktop-font-size:", ";--bds-font-tag-overline-desktop-line-height:", ";--bds-font-tag-overline-mobile-font-size:", ";--bds-font-tag-overline-mobile-line-height:", ";--bds-font-tag-label-desktop-font-size:", ";--bds-font-tag-label-desktop-line-height:", ";--bds-font-tag-label-mobile-font-size:", ";--bds-font-tag-label-mobile-line-height:", ";--bds-font-tag-helper-text-desktop-font-size:", ";--bds-font-tag-helper-text-desktop-line-height:", ";--bds-font-tag-helper-text-mobile-font-size:", ";--bds-font-tag-helper-text-mobile-line-height:", ";--bds-z-index-floating:", ";--bds-z-index-overlay:", ";--bds-z-index-drawer:", ";--bds-z-index-modal:", ";--bds-z-index-notification:", ";--bds-z-index-tooltip:", ";--bds-color-marketing-interactive:", ";--bds-color-text-interactive:", ";--bds-color-text-interactive-inverse:", ";--bds-color-icon-interactive:", ";--bds-color-icon-interactive-inverse:", ";--bds-color-border-interactive:", ";--bds-color-border-interactive-inverse:", ";--bds-color-focus-interactive:", ";--bds-color-action-interactive:", ";--bds-color-action-interactive-hover:", ";--bds-color-action-interactive-pressed:", ";--bds-color-action-interactive-subdued:", ";--bds-color-action-interactive-subdued-hover:", ";--bds-color-action-interactive-subdued-pressed:", ";--bds-color-highlight:", ";--bds-color-marketing-dark-blue:", ";--bds-color-surface-dark-blue:", ";--bds-color-surface-dark-blue-subdued:", ";--bds-color-surface-dark-blue-inverse:", ";--bds-color-surface-dark-blue-subdued-inverse:", ";--bds-color-marketing-blue:", ";--bds-color-surface-blue:", ";--bds-color-surface-blue-subdued:", ";--bds-color-surface-blue-inverse:", ";--bds-color-surface-blue-subdued-inverse:", ";--bds-color-marketing-light-blue:", ";--bds-color-surface-light-blue:", ";--bds-color-surface-light-blue-subdued:", ";--bds-color-surface-light-blue-inverse:", ";--bds-color-surface-light-blue-subdued-inverse:", ";--bds-color-marketing-green:", ";--bds-color-text-green:", ";--bds-color-text-green-inverse:", ";--bds-color-icon-green:", ";--bds-color-icon-green-inverse:", ";--bds-color-border-green:", ";--bds-color-border-green-inverse:", ";--bds-color-surface-green:", ";--bds-color-surface-green-subdued:", ";--bds-color-surface-green-inverse:", ";--bds-color-surface-green-subdued-inverse:", ";--bds-color-action-green:", ";--bds-color-action-green-hover:", ";--bds-color-action-green-pressed:", ";--bds-color-action-green-subdued:", ";--bds-color-action-green-subdued-hover:", ";--bds-color-action-green-subdued-pressed:", ";--bds-color-marketing-red:", ";--bds-color-text-red:", ";--bds-color-text-red-inverse:", ";--bds-color-icon-red:", ";--bds-color-icon-red-inverse:", ";--bds-color-border-red:", ";--bds-color-border-red-inverse:", ";--bds-color-surface-red:", ";--bds-color-surface-red-subdued:", ";--bds-color-surface-red-inverse:", ";--bds-color-surface-red-subdued-inverse:", ";--bds-color-action-red:", ";--bds-color-action-red-hover:", ";--bds-color-action-red-pressed:", ";--bds-color-action-red-subdued:", ";--bds-color-action-red-subdued-hover:", ";--bds-color-action-red-subdued-pressed:", ";--bds-color-marketing-gold:", ";--bds-color-surface-gold:", ";--bds-color-surface-gold-subdued:", ";--bds-color-surface-gold-inverse:", ";--bds-color-surface-gold-subdued-inverse:", ";--bds-color-marketing-lfp-yellow:", ";--bds-color-text-solid-inverse:", ";--bds-color-text-primary-inverse:", ";--bds-color-text-secondary-inverse:", ";--bds-color-text-tertiary-inverse:", ";--bds-color-text-disabled-inverse:", ";--bds-color-icon-solid-inverse:", ";--bds-color-icon-primary-inverse:", ";--bds-color-icon-secondary-inverse:", ";--bds-color-icon-tertiary-inverse:", ";--bds-color-icon-disabled-inverse:", ";--bds-color-border-default-inverse:", ";--bds-color-border-hover-inverse:", ";--bds-color-border-pressed-inverse:", ";--bds-color-border-subdued-inverse:", ";--bds-color-border-contrast-inverse:", ";--bds-color-border-disabled-inverse:", ";--bds-color-focus-inverse:", ";--bds-color-surface-default:", ";--bds-color-surface-default-inverse:", ";--bds-color-surface-subdued:", ";--bds-color-elevation-01:", ";--bds-color-elevation-02:", ";--bds-color-elevation-03:", ";--bds-color-elevation-04:", ";--bds-color-elevation-05:", ";--bds-color-elevation-06:", ";--bds-color-action-neutral:", ";--bds-color-action-neutral-hover:", ";--bds-color-action-neutral-pressed:", ";--bds-color-white:", ";--bds-color-black:", ";--bds-color-text-solid:", ";--bds-color-text-primary:", ";--bds-color-text-secondary:", ";--bds-color-text-tertiary:", ";--bds-color-text-disabled:", ";--bds-color-icon-solid:", ";--bds-color-icon-primary:", ";--bds-color-icon-secondary:", ";--bds-color-icon-tertiary:", ";--bds-color-icon-disabled:", ";--bds-color-border-default:", ";--bds-color-border-hover:", ";--bds-color-border-pressed:", ";--bds-color-border-subdued:", ";--bds-color-border-contrast:", ";--bds-color-border-disabled:", ";--bds-color-focus-default:", ";--bds-color-neutral-01:", ";--bds-color-neutral-02:", ";--bds-color-neutral-03:", ";--bds-color-neutral-04:", ";--bds-color-neutral-05:", ";--bds-color-neutral-06:", ";--bds-color-neutral-07:", ";--bds-color-neutral-08:", ";--bds-color-neutral-09:", ";--bds-color-neutral-10:", ";--bds-color-skeleton-01:", ";--bds-color-skeleton-02:", ";--bds-color-overlay:", ";--bds-color-text-visited-link:", ";--bds-name:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border.radius.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.radius.md;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.radius.lg;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.border.radius.circle;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.border.width.sm;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.border.width.md;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.border.width.lg;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.border.width.xl;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.breakpoints.xs.min;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.xs.max;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakpoints.sm.min;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.sm.max;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.breakpoints.md.min;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.breakpoints.md.max;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.breakpoints.lg.min;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.breakpoints.lg.max;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.breakpoints.xl.min;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.breakpoints.xl.max;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.breakpoints.xxl.min;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.breakpoints.xxl.max;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.grid.padding;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.grid.margin.none;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.grid.margin.sm;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.grid.margin.md;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.grid.margin.lg;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.shadows.shadow_01;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.shadows.shadow_02;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.shadows.shadow_03;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.shadows.shadow_04;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.shadows.shadow_05;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.shadows.shadow_06;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.sizes.size_0;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.sizes.size_1;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.sizes.size_2;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.sizes.size_3;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.sizes.size_4;
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.sizes.size_5;
}, function (_ref38) {
  var theme = _ref38.theme;
  return theme.sizes.size_6;
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.sizes.size_7;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.sizes.size_8;
}, function (_ref41) {
  var theme = _ref41.theme;
  return theme.sizes.size_10;
}, function (_ref42) {
  var theme = _ref42.theme;
  return theme.sizes.size_12;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.sizes.size_14;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.sizes.size_16;
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.sizes.size_18;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.sizes.size_20;
}, function (_ref47) {
  var theme = _ref47.theme;
  return theme.sizes.size_24;
}, function (_ref48) {
  var theme = _ref48.theme;
  return theme.sizes.size_28;
}, function (_ref49) {
  var theme = _ref49.theme;
  return theme.sizes.size_32;
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.sizes.size_36;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.sizes.size_40;
}, function (_ref52) {
  var theme = _ref52.theme;
  return theme.sizes.size_44;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.sizes.size_48;
}, function (_ref54) {
  var theme = _ref54.theme;
  return theme.sizes.size_52;
}, function (_ref55) {
  var theme = _ref55.theme;
  return theme.sizes.size_56;
}, function (_ref56) {
  var theme = _ref56.theme;
  return theme.sizes.size_60;
}, function (_ref57) {
  var theme = _ref57.theme;
  return theme.sizes.size_64;
}, function (_ref58) {
  var theme = _ref58.theme;
  return theme.sizes.size_68;
}, function (_ref59) {
  var theme = _ref59.theme;
  return theme.sizes.size_72;
}, function (_ref60) {
  var theme = _ref60.theme;
  return theme.sizes.size_76;
}, function (_ref61) {
  var theme = _ref61.theme;
  return theme.sizes.size_80;
}, function (_ref62) {
  var theme = _ref62.theme;
  return theme.sizes.size_84;
}, function (_ref63) {
  var theme = _ref63.theme;
  return theme.sizes.size_88;
}, function (_ref64) {
  var theme = _ref64.theme;
  return theme.sizes.size_92;
}, function (_ref65) {
  var theme = _ref65.theme;
  return theme.sizes.size_96;
}, function (_ref66) {
  var theme = _ref66.theme;
  return theme.sizes.size_100;
}, function (_ref67) {
  var theme = _ref67.theme;
  return theme.sizes.size_104;
}, function (_ref68) {
  var theme = _ref68.theme;
  return theme.sizes.size_108;
}, function (_ref69) {
  var theme = _ref69.theme;
  return theme.sizes.size_112;
}, function (_ref70) {
  var theme = _ref70.theme;
  return theme.sizes.size_116;
}, function (_ref71) {
  var theme = _ref71.theme;
  return theme.sizes.size_120;
}, function (_ref72) {
  var theme = _ref72.theme;
  return theme.sizes.size_124;
}, function (_ref73) {
  var theme = _ref73.theme;
  return theme.sizes.size_128;
}, function (_ref74) {
  var theme = _ref74.theme;
  return theme.font.weight.regular;
}, function (_ref75) {
  var theme = _ref75.theme;
  return theme.font.weight.medium;
}, function (_ref76) {
  var theme = _ref76.theme;
  return theme.font.weight.semibold;
}, function (_ref77) {
  var theme = _ref77.theme;
  return theme.font.family.roboto;
}, function (_ref78) {
  var theme = _ref78.theme;
  return theme.font.family.fellix;
}, function (_ref79) {
  var theme = _ref79.theme;
  return theme.context.typography.h1.desktop.font_size;
}, function (_ref80) {
  var theme = _ref80.theme;
  return theme.context.typography.h1.desktop.line_height;
}, function (_ref81) {
  var theme = _ref81.theme;
  return theme.context.typography.h1.mobile.font_size;
}, function (_ref82) {
  var theme = _ref82.theme;
  return theme.context.typography.h1.mobile.line_height;
}, function (_ref83) {
  var theme = _ref83.theme;
  return theme.context.typography.h2.desktop.font_size;
}, function (_ref84) {
  var theme = _ref84.theme;
  return theme.context.typography.h2.desktop.line_height;
}, function (_ref85) {
  var theme = _ref85.theme;
  return theme.context.typography.h2.mobile.font_size;
}, function (_ref86) {
  var theme = _ref86.theme;
  return theme.context.typography.h2.mobile.line_height;
}, function (_ref87) {
  var theme = _ref87.theme;
  return theme.context.typography.h3.desktop.font_size;
}, function (_ref88) {
  var theme = _ref88.theme;
  return theme.context.typography.h3.desktop.line_height;
}, function (_ref89) {
  var theme = _ref89.theme;
  return theme.context.typography.h3.mobile.font_size;
}, function (_ref90) {
  var theme = _ref90.theme;
  return theme.context.typography.h3.mobile.line_height;
}, function (_ref91) {
  var theme = _ref91.theme;
  return theme.context.typography.h4.desktop.font_size;
}, function (_ref92) {
  var theme = _ref92.theme;
  return theme.context.typography.h4.desktop.line_height;
}, function (_ref93) {
  var theme = _ref93.theme;
  return theme.context.typography.h4.mobile.font_size;
}, function (_ref94) {
  var theme = _ref94.theme;
  return theme.context.typography.h4.mobile.line_height;
}, function (_ref95) {
  var theme = _ref95.theme;
  return theme.context.typography.h5.desktop.font_size;
}, function (_ref96) {
  var theme = _ref96.theme;
  return theme.context.typography.h5.desktop.line_height;
}, function (_ref97) {
  var theme = _ref97.theme;
  return theme.context.typography.h5.mobile.font_size;
}, function (_ref98) {
  var theme = _ref98.theme;
  return theme.context.typography.h5.mobile.line_height;
}, function (_ref99) {
  var theme = _ref99.theme;
  return theme.context.typography.h6.desktop.font_size;
}, function (_ref100) {
  var theme = _ref100.theme;
  return theme.context.typography.h6.desktop.line_height;
}, function (_ref101) {
  var theme = _ref101.theme;
  return theme.context.typography.h6.mobile.font_size;
}, function (_ref102) {
  var theme = _ref102.theme;
  return theme.context.typography.h6.mobile.line_height;
}, function (_ref103) {
  var theme = _ref103.theme;
  return theme.context.typography.body_1.desktop.font_size;
}, function (_ref104) {
  var theme = _ref104.theme;
  return theme.context.typography.body_1.desktop.line_height;
}, function (_ref105) {
  var theme = _ref105.theme;
  return theme.context.typography.body_1.mobile.font_size;
}, function (_ref106) {
  var theme = _ref106.theme;
  return theme.context.typography.body_1.mobile.line_height;
}, function (_ref107) {
  var theme = _ref107.theme;
  return theme.context.typography.body_2.desktop.font_size;
}, function (_ref108) {
  var theme = _ref108.theme;
  return theme.context.typography.body_2.desktop.line_height;
}, function (_ref109) {
  var theme = _ref109.theme;
  return theme.context.typography.body_2.mobile.font_size;
}, function (_ref110) {
  var theme = _ref110.theme;
  return theme.context.typography.body_2.mobile.line_height;
}, function (_ref111) {
  var theme = _ref111.theme;
  return theme.context.typography.article.desktop.font_size;
}, function (_ref112) {
  var theme = _ref112.theme;
  return theme.context.typography.article.desktop.line_height;
}, function (_ref113) {
  var theme = _ref113.theme;
  return theme.context.typography.article.mobile.font_size;
}, function (_ref114) {
  var theme = _ref114.theme;
  return theme.context.typography.article.mobile.line_height;
}, function (_ref115) {
  var theme = _ref115.theme;
  return theme.context.typography.caption.desktop.font_size;
}, function (_ref116) {
  var theme = _ref116.theme;
  return theme.context.typography.caption.desktop.line_height;
}, function (_ref117) {
  var theme = _ref117.theme;
  return theme.context.typography.caption.mobile.font_size;
}, function (_ref118) {
  var theme = _ref118.theme;
  return theme.context.typography.caption.mobile.line_height;
}, function (_ref119) {
  var theme = _ref119.theme;
  return theme.context.typography.footnote.desktop.font_size;
}, function (_ref120) {
  var theme = _ref120.theme;
  return theme.context.typography.footnote.desktop.line_height;
}, function (_ref121) {
  var theme = _ref121.theme;
  return theme.context.typography.footnote.mobile.font_size;
}, function (_ref122) {
  var theme = _ref122.theme;
  return theme.context.typography.footnote.mobile.line_height;
}, function (_ref123) {
  var theme = _ref123.theme;
  return theme.context.typography.overline.desktop.font_size;
}, function (_ref124) {
  var theme = _ref124.theme;
  return theme.context.typography.overline.desktop.line_height;
}, function (_ref125) {
  var theme = _ref125.theme;
  return theme.context.typography.overline.mobile.font_size;
}, function (_ref126) {
  var theme = _ref126.theme;
  return theme.context.typography.overline.mobile.line_height;
}, function (_ref127) {
  var theme = _ref127.theme;
  return theme.context.typography.label.desktop.font_size;
}, function (_ref128) {
  var theme = _ref128.theme;
  return theme.context.typography.label.desktop.line_height;
}, function (_ref129) {
  var theme = _ref129.theme;
  return theme.context.typography.label.mobile.font_size;
}, function (_ref130) {
  var theme = _ref130.theme;
  return theme.context.typography.label.mobile.line_height;
}, function (_ref131) {
  var theme = _ref131.theme;
  return theme.context.typography.helper_text.desktop.font_size;
}, function (_ref132) {
  var theme = _ref132.theme;
  return theme.context.typography.helper_text.desktop.line_height;
}, function (_ref133) {
  var theme = _ref133.theme;
  return theme.context.typography.helper_text.mobile.font_size;
}, function (_ref134) {
  var theme = _ref134.theme;
  return theme.context.typography.helper_text.mobile.line_height;
}, function (_ref135) {
  var theme = _ref135.theme;
  return theme.zIndex.floating;
}, function (_ref136) {
  var theme = _ref136.theme;
  return theme.zIndex.overlay;
}, function (_ref137) {
  var theme = _ref137.theme;
  return theme.zIndex.drawer;
}, function (_ref138) {
  var theme = _ref138.theme;
  return theme.zIndex.modal;
}, function (_ref139) {
  var theme = _ref139.theme;
  return theme.zIndex.notification;
}, function (_ref140) {
  var theme = _ref140.theme;
  return theme.zIndex.tooltip;
}, function (_ref141) {
  var theme = _ref141.theme;
  return theme.color.marketing_interactive;
}, function (_ref142) {
  var theme = _ref142.theme;
  return theme.color.text_interactive;
}, function (_ref143) {
  var theme = _ref143.theme;
  return theme.color.text_interactive_inverse;
}, function (_ref144) {
  var theme = _ref144.theme;
  return theme.color.icon_interactive;
}, function (_ref145) {
  var theme = _ref145.theme;
  return theme.color.icon_interactive_inverse;
}, function (_ref146) {
  var theme = _ref146.theme;
  return theme.color.border_interactive;
}, function (_ref147) {
  var theme = _ref147.theme;
  return theme.color.border_interactive_inverse;
}, function (_ref148) {
  var theme = _ref148.theme;
  return theme.color.focus_interactive;
}, function (_ref149) {
  var theme = _ref149.theme;
  return theme.color.action_interactive;
}, function (_ref150) {
  var theme = _ref150.theme;
  return theme.color.action_interactive_hover;
}, function (_ref151) {
  var theme = _ref151.theme;
  return theme.color.action_interactive_pressed;
}, function (_ref152) {
  var theme = _ref152.theme;
  return theme.color.action_interactive_subdued;
}, function (_ref153) {
  var theme = _ref153.theme;
  return theme.color.action_interactive_subdued_hover;
}, function (_ref154) {
  var theme = _ref154.theme;
  return theme.color.action_interactive_subdued_pressed;
}, function (_ref155) {
  var theme = _ref155.theme;
  return theme.color.highlight;
}, function (_ref156) {
  var theme = _ref156.theme;
  return theme.color.marketing_dark_blue;
}, function (_ref157) {
  var theme = _ref157.theme;
  return theme.color.surface_dark_blue;
}, function (_ref158) {
  var theme = _ref158.theme;
  return theme.color.surface_dark_blue_subdued;
}, function (_ref159) {
  var theme = _ref159.theme;
  return theme.color.surface_dark_blue_inverse;
}, function (_ref160) {
  var theme = _ref160.theme;
  return theme.color.surface_dark_blue_subdued_inverse;
}, function (_ref161) {
  var theme = _ref161.theme;
  return theme.color.marketing_blue;
}, function (_ref162) {
  var theme = _ref162.theme;
  return theme.color.surface_blue;
}, function (_ref163) {
  var theme = _ref163.theme;
  return theme.color.surface_blue_subdued;
}, function (_ref164) {
  var theme = _ref164.theme;
  return theme.color.surface_blue_inverse;
}, function (_ref165) {
  var theme = _ref165.theme;
  return theme.color.surface_blue_subdued_inverse;
}, function (_ref166) {
  var theme = _ref166.theme;
  return theme.color.marketing_light_blue;
}, function (_ref167) {
  var theme = _ref167.theme;
  return theme.color.surface_light_blue;
}, function (_ref168) {
  var theme = _ref168.theme;
  return theme.color.surface_light_blue_subdued;
}, function (_ref169) {
  var theme = _ref169.theme;
  return theme.color.surface_light_blue_inverse;
}, function (_ref170) {
  var theme = _ref170.theme;
  return theme.color.surface_light_blue_subdued_inverse;
}, function (_ref171) {
  var theme = _ref171.theme;
  return theme.color.marketing_green;
}, function (_ref172) {
  var theme = _ref172.theme;
  return theme.color.text_green;
}, function (_ref173) {
  var theme = _ref173.theme;
  return theme.color.text_green_inverse;
}, function (_ref174) {
  var theme = _ref174.theme;
  return theme.color.icon_green;
}, function (_ref175) {
  var theme = _ref175.theme;
  return theme.color.icon_green_inverse;
}, function (_ref176) {
  var theme = _ref176.theme;
  return theme.color.border_green;
}, function (_ref177) {
  var theme = _ref177.theme;
  return theme.color.border_green_inverse;
}, function (_ref178) {
  var theme = _ref178.theme;
  return theme.color.surface_green;
}, function (_ref179) {
  var theme = _ref179.theme;
  return theme.color.surface_green_subdued;
}, function (_ref180) {
  var theme = _ref180.theme;
  return theme.color.surface_green_inverse;
}, function (_ref181) {
  var theme = _ref181.theme;
  return theme.color.surface_green_subdued_inverse;
}, function (_ref182) {
  var theme = _ref182.theme;
  return theme.color.action_green;
}, function (_ref183) {
  var theme = _ref183.theme;
  return theme.color.action_green_hover;
}, function (_ref184) {
  var theme = _ref184.theme;
  return theme.color.action_green_pressed;
}, function (_ref185) {
  var theme = _ref185.theme;
  return theme.color.action_green_subdued;
}, function (_ref186) {
  var theme = _ref186.theme;
  return theme.color.action_green_subdued_hover;
}, function (_ref187) {
  var theme = _ref187.theme;
  return theme.color.action_green_subdued_pressed;
}, function (_ref188) {
  var theme = _ref188.theme;
  return theme.color.marketing_red;
}, function (_ref189) {
  var theme = _ref189.theme;
  return theme.color.text_red;
}, function (_ref190) {
  var theme = _ref190.theme;
  return theme.color.text_red_inverse;
}, function (_ref191) {
  var theme = _ref191.theme;
  return theme.color.icon_red;
}, function (_ref192) {
  var theme = _ref192.theme;
  return theme.color.icon_red_inverse;
}, function (_ref193) {
  var theme = _ref193.theme;
  return theme.color.border_red;
}, function (_ref194) {
  var theme = _ref194.theme;
  return theme.color.border_red_inverse;
}, function (_ref195) {
  var theme = _ref195.theme;
  return theme.color.surface_red;
}, function (_ref196) {
  var theme = _ref196.theme;
  return theme.color.surface_red_subdued;
}, function (_ref197) {
  var theme = _ref197.theme;
  return theme.color.surface_red_inverse;
}, function (_ref198) {
  var theme = _ref198.theme;
  return theme.color.surface_red_subdued_inverse;
}, function (_ref199) {
  var theme = _ref199.theme;
  return theme.color.action_red;
}, function (_ref200) {
  var theme = _ref200.theme;
  return theme.color.action_red_hover;
}, function (_ref201) {
  var theme = _ref201.theme;
  return theme.color.action_red_pressed;
}, function (_ref202) {
  var theme = _ref202.theme;
  return theme.color.action_red_subdued;
}, function (_ref203) {
  var theme = _ref203.theme;
  return theme.color.action_red_subdued_hover;
}, function (_ref204) {
  var theme = _ref204.theme;
  return theme.color.action_red_subdued_pressed;
}, function (_ref205) {
  var theme = _ref205.theme;
  return theme.color.marketing_gold;
}, function (_ref206) {
  var theme = _ref206.theme;
  return theme.color.surface_gold;
}, function (_ref207) {
  var theme = _ref207.theme;
  return theme.color.surface_gold_subdued;
}, function (_ref208) {
  var theme = _ref208.theme;
  return theme.color.surface_gold_inverse;
}, function (_ref209) {
  var theme = _ref209.theme;
  return theme.color.surface_gold_subdued_inverse;
}, function (_ref210) {
  var theme = _ref210.theme;
  return theme.color.marketing_lfp_yellow;
}, function (_ref211) {
  var theme = _ref211.theme;
  return theme.color.text_solid_inverse;
}, function (_ref212) {
  var theme = _ref212.theme;
  return theme.color.text_primary_inverse;
}, function (_ref213) {
  var theme = _ref213.theme;
  return theme.color.text_secondary_inverse;
}, function (_ref214) {
  var theme = _ref214.theme;
  return theme.color.text_tertiary_inverse;
}, function (_ref215) {
  var theme = _ref215.theme;
  return theme.color.text_disabled_inverse;
}, function (_ref216) {
  var theme = _ref216.theme;
  return theme.color.icon_solid_inverse;
}, function (_ref217) {
  var theme = _ref217.theme;
  return theme.color.icon_primary_inverse;
}, function (_ref218) {
  var theme = _ref218.theme;
  return theme.color.icon_secondary_inverse;
}, function (_ref219) {
  var theme = _ref219.theme;
  return theme.color.icon_tertiary_inverse;
}, function (_ref220) {
  var theme = _ref220.theme;
  return theme.color.icon_disabled_inverse;
}, function (_ref221) {
  var theme = _ref221.theme;
  return theme.color.border_default_inverse;
}, function (_ref222) {
  var theme = _ref222.theme;
  return theme.color.border_hover_inverse;
}, function (_ref223) {
  var theme = _ref223.theme;
  return theme.color.border_pressed_inverse;
}, function (_ref224) {
  var theme = _ref224.theme;
  return theme.color.border_subdued_inverse;
}, function (_ref225) {
  var theme = _ref225.theme;
  return theme.color.border_contrast_inverse;
}, function (_ref226) {
  var theme = _ref226.theme;
  return theme.color.border_disabled_inverse;
}, function (_ref227) {
  var theme = _ref227.theme;
  return theme.color.focus_inverse;
}, function (_ref228) {
  var theme = _ref228.theme;
  return theme.color.surface_default;
}, function (_ref229) {
  var theme = _ref229.theme;
  return theme.color.surface_default_inverse;
}, function (_ref230) {
  var theme = _ref230.theme;
  return theme.color.surface_subdued;
}, function (_ref231) {
  var theme = _ref231.theme;
  return theme.color.elevation_01;
}, function (_ref232) {
  var theme = _ref232.theme;
  return theme.color.elevation_02;
}, function (_ref233) {
  var theme = _ref233.theme;
  return theme.color.elevation_03;
}, function (_ref234) {
  var theme = _ref234.theme;
  return theme.color.elevation_04;
}, function (_ref235) {
  var theme = _ref235.theme;
  return theme.color.elevation_05;
}, function (_ref236) {
  var theme = _ref236.theme;
  return theme.color.elevation_06;
}, function (_ref237) {
  var theme = _ref237.theme;
  return theme.color.action_neutral;
}, function (_ref238) {
  var theme = _ref238.theme;
  return theme.color.action_neutral_hover;
}, function (_ref239) {
  var theme = _ref239.theme;
  return theme.color.action_neutral_pressed;
}, function (_ref240) {
  var theme = _ref240.theme;
  return theme.color.white;
}, function (_ref241) {
  var theme = _ref241.theme;
  return theme.color.black;
}, function (_ref242) {
  var theme = _ref242.theme;
  return theme.color.text_solid;
}, function (_ref243) {
  var theme = _ref243.theme;
  return theme.color.text_primary;
}, function (_ref244) {
  var theme = _ref244.theme;
  return theme.color.text_secondary;
}, function (_ref245) {
  var theme = _ref245.theme;
  return theme.color.text_tertiary;
}, function (_ref246) {
  var theme = _ref246.theme;
  return theme.color.text_disabled;
}, function (_ref247) {
  var theme = _ref247.theme;
  return theme.color.icon_solid;
}, function (_ref248) {
  var theme = _ref248.theme;
  return theme.color.icon_primary;
}, function (_ref249) {
  var theme = _ref249.theme;
  return theme.color.icon_secondary;
}, function (_ref250) {
  var theme = _ref250.theme;
  return theme.color.icon_tertiary;
}, function (_ref251) {
  var theme = _ref251.theme;
  return theme.color.icon_disabled;
}, function (_ref252) {
  var theme = _ref252.theme;
  return theme.color.border_default;
}, function (_ref253) {
  var theme = _ref253.theme;
  return theme.color.border_hover;
}, function (_ref254) {
  var theme = _ref254.theme;
  return theme.color.border_pressed;
}, function (_ref255) {
  var theme = _ref255.theme;
  return theme.color.border_subdued;
}, function (_ref256) {
  var theme = _ref256.theme;
  return theme.color.border_contrast;
}, function (_ref257) {
  var theme = _ref257.theme;
  return theme.color.border_disabled;
}, function (_ref258) {
  var theme = _ref258.theme;
  return theme.color.focus_default;
}, function (_ref259) {
  var theme = _ref259.theme;
  return theme.color.neutral_01;
}, function (_ref260) {
  var theme = _ref260.theme;
  return theme.color.neutral_02;
}, function (_ref261) {
  var theme = _ref261.theme;
  return theme.color.neutral_03;
}, function (_ref262) {
  var theme = _ref262.theme;
  return theme.color.neutral_04;
}, function (_ref263) {
  var theme = _ref263.theme;
  return theme.color.neutral_05;
}, function (_ref264) {
  var theme = _ref264.theme;
  return theme.color.neutral_06;
}, function (_ref265) {
  var theme = _ref265.theme;
  return theme.color.neutral_07;
}, function (_ref266) {
  var theme = _ref266.theme;
  return theme.color.neutral_08;
}, function (_ref267) {
  var theme = _ref267.theme;
  return theme.color.neutral_09;
}, function (_ref268) {
  var theme = _ref268.theme;
  return theme.color.neutral_10;
}, function (_ref269) {
  var theme = _ref269.theme;
  return theme.color.skeleton_01;
}, function (_ref270) {
  var theme = _ref270.theme;
  return theme.color.skeleton_02;
}, function (_ref271) {
  var theme = _ref271.theme;
  return theme.color.overlay;
}, function (_ref272) {
  var theme = _ref272.theme;
  return theme.color.text_visited_link;
}, function (_ref273) {
  var theme = _ref273.theme;
  return theme.name;
});
exports.ThemeVariables = ThemeVariables;