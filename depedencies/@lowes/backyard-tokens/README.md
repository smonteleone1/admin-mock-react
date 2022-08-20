# Lowe's Backyard Design Tokens

Visual example of output can be seen [here](http://ux.lowes.com/backyard/tokens/styleguide/)

Welcome to the Lowe's Backyard Design Token generator.  These tokens are the source of truth for all Lowe's Digital design properties see below for the token categories included.

This generator will take the YAML files owned by the Lowe's UX team and create variable files for both web and applications depending on platform need.

All platform specific generated tokens are located in the 'dist' directory.  You can see all the themes, types and formats that are created in the table below.

## Quick Start
1. Clone the project with `git clone ssh://git@vmlnxatlstash.lowes.com:42000/ux/backyard-tokens.git`
2. Run `npm install` in the root backyard-tokens directory.


### Available Commands
1. `npm run build` to build all Design Token files.
2. `npm run convert` to build extra conversion files.
-- 
3. `npm run start` to build all Design Token files and start a server at `localhost:3000`


### All Themes created

| Theme | Parent Theme | Type | Format | 
|-------|--------------|------|--------|
| Light  | | | scss |
| Dark  | | | scss |
| Encapsulated  | Dark | | scss |
| Web  | | web | scss |
| Android  | | android | xml |
| iOS  | | ios | ios |
| Lowes.com  | Light | web | scss  |
| Associate App Dark | Dark | android  | xml | 
| Associate App Light  | Light | android  | xml |
| Associate App Both  |  Both | android  | xml |
| Consumer App iOS |  Light | ios | json |
| Consumer App Android |  Light | android | xml |
| Omnia |  Encapsulated | web  | less |

### Token Categories Included
* Colors
    * Theme Colors
        * Base Colors
        * Brand Colors
        * Interactive Colors
        * Commerce Colors
        * Utility Colors
    * Shared Colors
        * Palette Colors
        * Neutral Opacities
    * Context Colors
        * Background Colors
        * Border Colors
        * Text Colors
        * Icon Colors
* Typography
    * Font Stack
    * Font Weight
    * Font Size
    * Line Height
* Sizing
    * Icon Size
* Layout
    * Grid
        * Media Queries
        * Gutters
    * Spacing
* Borders
    * Border Width
    * Border Radius
    * Box Shadow




