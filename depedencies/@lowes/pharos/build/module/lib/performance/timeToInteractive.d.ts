export default FirstConsistentlyInteractiveDetector;
declare class FirstConsistentlyInteractiveDetector {
    constructor(windowReference: any, startTimestamp?: number, _useMutationObserver?: boolean);
    startTimestamp: number;
    performance: any;
    calculateQuietWindow: CalculateQuietWindow;
    startSchedulingTimerTasks(): void;
    setData(FCP: any, FP: any, maybeFCI: any, longTaskEntries: any): void;
    _getMinValue(): number;
    disable(): void;
    _checkTTI({ lastBusy, longTaskEntries }: {
        lastBusy: any;
        longTaskEntries: any;
    }): void;
}
import CalculateQuietWindow from "../utils/calculateQuietWindow";
