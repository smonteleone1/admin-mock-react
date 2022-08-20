# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [unreleased]

## [1.2.4]
### Changed
- backyard theme colors and fonts

## [1.2.2]
### Changed
- usage for shared text colors from `border-colors` to `text-colors`

## [1.2.1]
### Added
- intentcategory to all color props
- `color_slate_500` to `shared_colors`

### Changed
- category `accent_colors` to `shared-colors`


## [1.2.0]
### Added
- `color_sky_100`, `color_slate_350`, `color_slate_300` to color scale
- `size_23` - `size_26` to sizing scale to reach 96px
- dark theme `bg_color_interactive_canvas_var`, `brd_color_interactive_var` and `brd_color_interactive_var_active`
- light theme `bg_color_interactive_canvas_var`, `brd_color_interactive_var` and `brd_color_interactive_var_active`
- web theme `icon_size_mobile_2xl`
- encapsulated theme `light_bg_color_interactive_canvas_var`

### Changed
- dark theme `bg_color_brand_var` to be color_slate_450
- dark theme `bg_color_interactive_var` from color_sky_500 to color_slate_300
- dark theme `bg_color_interactive_var_active` from color_sky_600 to color_slate_350
- dark theme `bg_color_overlay` from color_black_opacity_26 to color_black_opacity_54
- dark theme `text_color_info` from color_sky_500 to color_white_500
- dark theme `icon_color_info` from text_color_info to color_sky_500
- light theme `bg_color_brand_var` to be color_brand_500
- light theme `bg_color_interactive_var` fro color_white_opacity_87 to color_white_500
- light theme `bg_color_interactive_var_active` fro color_white_500 to color_black_opacity_6
- light theme `bg_color_info` from color_brand_500 to color_sky_500
- light theme `bg_color_info_var` from color_brand_075 to color_sky_100
- light theme `bg_color_overlay` from color_black_opacity_6 to color_black_opacity_54
- light theme `brd_color_info` from color_brand_500 to color_sky_500
- light theme `text_color_info` from color_brand_500 to color_black_500
- light theme `info_color_info` from text_color_info to color_sky_500
- light theme `info_color_warning` from text_color_warning to color_gold_500
- web theme `icon_size_2xl` from size_14 (48px) to size_26 (96px)
- web theme `icon_size_xl` from size_12 (40px) to size_18 (64px)
- web theme `icon_size_lg` from size_10 (32px) to size_14 (48px)
- web theme `icon_size_mobile_xl` from size_12 (40px) to size_14 (48px)
- all props associated with added/removed aliases

### Removed
- dark theme `bg_color_overlay_var`
- light theme `bg_color_overlay_var`
- web theme `icon_size_xs` and `icon_size_mobile_xs`


## [1.1.0]
### Added
- core platform theme
- brd-color-warning, brd-color-success, brd-color-info

### Changed
- parent theme colors
- variable names (variant > var, xxxl > 3xl, xxl > 2xl, large > lg, medium > md, small > sm)
- manifest to include a theme title and update Styleguide to use title

### Removed
- all colors that are not in context of either background, text, icon or border to reduce confusion

## [1.0.3]
### Added
- subcategories to some token props for oraganizationa and layout purposes in Backyard Documentation

### Changed
- 'border' to 'brd' in all instances

## [1.0.1] 
### Added
- Backyard theme
- conversion tasks to read the built token files and add new build files for scss with export variables and ios colorset files

### Changed
- build tasks to include data json theme files in the dist folder for Jenkins


## [1.0.0]
### Changed
- fix units for android and iOS builds
- build tasks to create a combined theme file for associate applications that contain both light and dark themes
- formatting
- borders and box-shadows

## [0.3.1]
### Added
- medium gutter

### Changed
- sizing and spacing scales
- rems to ems for all layout related spacing

## [0.3.0]
### Added
- more opacity options to the neutral color palette

### Changed
- move all scale aliases out of themes and into a scale folder
- all child themes to inherit from parent themes in a consistent way
- structure of all tokens
- styleguide to pull directly from tokens and dynamically load all tokens that exist

### Removed
- line-height from shared theme
- category/type from individual tokens


## [0.2.1]
### Changed
- font-weight-regular to font-weight-default

## [0.2.0]
### Added
- themes for web/android/web specific styling that are seperate from colors
- defined font-families
- defined font-size
- defined font-weight
- defined spacing
- defined icon sizes
- defined border widths
- defined border-radius

### Changed
- android and ios formatting
- styleguide styling

## [0.1.0]
### Added
- defined themes
- defined color schemes
- created visual output styleguide