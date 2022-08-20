import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { TextInputProps, TextInputRef } from '../TextInput';
declare const MaskedInput: BDSForwardRef<MaskedInputProps>;
declare type MaskedInputRef = TextInputRef;
interface MaskedInputProps extends TextInputProps {
    /**
     * Icon displayed before text
     */
    icon?: React.ReactElement;
    /**
     * Info after text input
     */
    info?: string;
    /**
     * Prop types to override info with
     */
    infoProps?: object;
    /**
     * The Mask that should be followed
     */
    mask?: 'currency' | 'phone';
}
export { MaskedInput };
export type { MaskedInputProps, MaskedInputRef };
export default MaskedInput;
