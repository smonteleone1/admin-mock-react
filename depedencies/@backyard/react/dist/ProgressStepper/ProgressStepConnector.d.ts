import BackyardBaseProps from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Progress Step Connector
 *
 * @ignore
 *
 * `ProgressStepConnector` is an internal component that visually connects `ProgresStep`s in `ProgressStepper`
 *
 * It only requires contexts provided by the `ProgressStepper` and `ProgressStep`
 */
declare const ProgressStepConnector: BDSForwardRef<ProgressStepConnectorProps>;
declare type ProgressStepConnectorRef = HTMLDivElement;
interface ProgressStepConnectorProps extends BackyardBaseProps<ProgressStepConnectorRef> {
    /**
     * DOM classname
     */
    className?: string;
}
export { ProgressStepConnector };
export type { ProgressStepConnectorRef, ProgressStepConnectorProps };
export default ProgressStepConnector;
