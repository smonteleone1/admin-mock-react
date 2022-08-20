/**
 * Clamps a value between the minimum and the maximum value of the slider.
 *
 * @param value - the value to be clamped
 * @param min - the minimum value
 * @param max - the maximum value
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 *
 * @param values
 * @param currentValue
 */
export declare function findClosest(values: any, currentValue: any): any;
/**
 * Returns the x and y position of the pointer (Touch or Mouse) event.
 *
 * @param event - the pointer event
 * @param touchId - the ref for the component that recieved the touch event
 */
export declare function trackFinger(event: any, touchId: any): false | {
    x: any;
    y: any;
};
export declare function valueToPercent(value: number, min: number, max: number): number;
export declare function percentToValue(percent: number, min: number, max: number): number;
export declare function getDecimalPrecision(num: number): number;
/**
 * Round the position of the thumb when the mouse releases it to the nearest step.
 *
 * @param value - the position of the thumb
 * @param step - the step value
 * @param min - the minimum value
 */
export declare function roundValueToStep(value: number, step: number, min: number, max: number): number;
export declare function setValueIndex({ values, source, newValue, index }: {
    values: any;
    source: any;
    newValue: any;
    index: any;
}): any;
/**
 * Focuses the thumb by ref.
 *
 * @param sliderRef - the ref to the slider
 * @param setActive - the function to set the focus
 */
export declare function focusThumb(sliderRef: any, setActive: any): void;
declare type AxisOffset = {
    left?: string;
    bottom?: string;
};
declare type AxisLeap = {
    width?: string;
    height?: string;
};
export declare const axisProps: {
    horizontal: {
        offset: (percent: any) => AxisOffset;
        leap: (percent: any) => AxisLeap;
    };
    vertical: {
        offset: (percent: any) => AxisOffset;
        leap: (percent: any) => AxisLeap;
    };
};
export declare const Identity: (x: any) => any;
export {};
