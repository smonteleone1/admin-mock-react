import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
declare const Option: BDSFunctional<OptionProps>;
interface OptionProps extends BackyardBaseProps<HTMLOptionElement> {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    hidden?: boolean;
    value?: string | number;
    options?: OptionProps[];
}
export { Option };
export type { OptionProps };
export default Option;
