import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
declare const OptionGroup: BDSFunctional<OptionGroupProps>;
interface OptionGroupProps extends BackyardBaseProps<HTMLOptGroupElement> {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    label: string;
}
export { OptionGroup };
export type { OptionGroupProps };
export default OptionGroup;
