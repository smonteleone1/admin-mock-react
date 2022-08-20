declare const Theme: {
    border: {
        radius: {
            sm: string;
            md: string;
            lg: string;
            circle: string;
        };
        width: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    grid: {
        breakpoint: {
            xs: {
                min: string;
                max: string;
            };
            sm: {
                min: string;
                max: string;
            };
            md: {
                min: string;
                max: string;
            };
            lg: {
                min: string;
                max: string;
            };
            xl: {
                min: string;
                max: string;
            };
            xxl: {
                min: string;
                max: string;
            };
        };
        padding: string;
        margin: {
            none: string;
            sm: string;
            md: string;
            lg: string;
        };
    };
    shadows: {
        shadow_01: string;
        shadow_02: string;
        shadow_03: string;
        shadow_04: string;
        shadow_05: string;
        shadow_06: string;
    };
    sizes: {
        size_0: string;
        size_1: string;
        size_2: string;
        size_3: string;
        size_4: string;
        size_5: string;
        size_6: string;
        size_7: string;
        size_8: string;
        size_10: string;
        size_12: string;
        size_14: string;
        size_16: string;
        size_18: string;
        size_20: string;
        size_24: string;
        size_28: string;
        size_32: string;
        size_36: string;
        size_40: string;
        size_44: string;
        size_48: string;
        size_52: string;
        size_56: string;
        size_60: string;
        size_64: string;
        size_68: string;
        size_72: string;
        size_76: string;
        size_80: string;
        size_84: string;
        size_88: string;
        size_92: string;
        size_96: string;
        size_100: string;
        size_104: string;
        size_108: string;
        size_112: string;
        size_116: string;
        size_120: string;
        size_124: string;
        size_128: string;
    };
    font: {
        weight: {
            regular: number;
            medium: number;
            semibold: number;
        };
        family: {
            roboto: string;
            fellix: string;
        };
        tag: {
            h1: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            h2: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            h3: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            h4: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            h5: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            h6: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            body_1: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            body_2: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            article: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            caption: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            footnote: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            overline: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            label: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
            helper_text: {
                desktop: {
                    font_size: string;
                    line_height: string;
                };
                mobile: {
                    font_size: string;
                    line_height: string;
                };
            };
        };
    };
    zIndex: {
        floating: number;
        overlay: number;
        drawer: number;
        modal: number;
        notification: number;
        tooltip: number;
    };
    color: {
        marketing_interactive: string;
        text_interactive: string;
        text_interactive_inverse: string;
        icon_interactive: string;
        icon_interactive_inverse: string;
        border_interactive: string;
        border_interactive_inverse: string;
        focus_interactive: string;
        action_interactive: string;
        action_interactive_hover: string;
        action_interactive_pressed: string;
        action_interactive_subdued: string;
        action_interactive_subdued_hover: string;
        action_interactive_subdued_pressed: string;
        highlight: string;
        marketing_dark_blue: string;
        surface_dark_blue: string;
        surface_dark_blue_subdued: string;
        surface_dark_blue_inverse: string;
        surface_dark_blue_subdued_inverse: string;
        marketing_blue: string;
        surface_blue: string;
        surface_blue_subdued: string;
        surface_blue_inverse: string;
        surface_blue_subdued_inverse: string;
        marketing_light_blue: string;
        surface_light_blue: string;
        surface_light_blue_subdued: string;
        surface_light_blue_inverse: string;
        surface_light_blue_subdued_inverse: string;
        marketing_green: string;
        text_green: string;
        text_green_inverse: string;
        icon_green: string;
        icon_green_inverse: string;
        border_green: string;
        border_green_inverse: string;
        surface_green: string;
        surface_green_subdued: string;
        surface_green_inverse: string;
        surface_green_subdued_inverse: string;
        action_green: string;
        action_green_hover: string;
        action_green_pressed: string;
        action_green_subdued: string;
        action_green_subdued_hover: string;
        action_green_subdued_pressed: string;
        marketing_red: string;
        text_red: string;
        text_red_inverse: string;
        icon_red: string;
        icon_red_inverse: string;
        border_red: string;
        border_red_inverse: string;
        surface_red: string;
        surface_red_subdued: string;
        surface_red_inverse: string;
        surface_red_subdued_inverse: string;
        action_red: string;
        action_red_hover: string;
        action_red_pressed: string;
        action_red_subdued: string;
        action_red_subdued_hover: string;
        action_red_subdued_pressed: string;
        marketing_gold: string;
        surface_gold: string;
        surface_gold_subdued: string;
        surface_gold_inverse: string;
        surface_gold_subdued_inverse: string;
        marketing_lfp_yellow: string;
        text_solid_inverse: string;
        text_primary_inverse: string;
        text_secondary_inverse: string;
        text_tertiary_inverse: string;
        text_disabled_inverse: string;
        icon_solid_inverse: string;
        icon_primary_inverse: string;
        icon_secondary_inverse: string;
        icon_tertiary_inverse: string;
        icon_disabled_inverse: string;
        border_default_inverse: string;
        border_hover_inverse: string;
        border_pressed_inverse: string;
        border_subdued_inverse: string;
        border_contrast_inverse: string;
        border_disabled_inverse: string;
        focus_inverse: string;
        surface_default: string;
        surface_default_inverse: string;
        surface_subdued: string;
        elevation_01: string;
        elevation_02: string;
        elevation_03: string;
        elevation_04: string;
        elevation_05: string;
        elevation_06: string;
        action_neutral: string;
        action_neutral_hover: string;
        action_neutral_pressed: string;
        white: string;
        black: string;
        text_solid: string;
        text_primary: string;
        text_secondary: string;
        text_tertiary: string;
        text_disabled: string;
        icon_solid: string;
        icon_primary: string;
        icon_secondary: string;
        icon_tertiary: string;
        icon_disabled: string;
        border_default: string;
        border_hover: string;
        border_pressed: string;
        border_subdued: string;
        border_contrast: string;
        border_disabled: string;
        focus_default: string;
        neutral_01: string;
        neutral_02: string;
        neutral_03: string;
        neutral_04: string;
        neutral_05: string;
        neutral_06: string;
        neutral_07: string;
        neutral_08: string;
        neutral_09: string;
        neutral_10: string;
        skeleton_01: string;
        skeleton_02: string;
        overlay: string;
        text_visited_link: string;
    };
    name: string;
};
export { Theme };
export default Theme;
