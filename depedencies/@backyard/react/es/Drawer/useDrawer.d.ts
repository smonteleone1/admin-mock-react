import type { ModalContextValues } from '../Modal/ModalProvider';
declare const useDrawer: () => DrawerContextValues;
interface DrawerContextValues extends ModalContextValues {
    /**
     * Orientation of the `Drawer`
     */
    orientation?: 'vertical' | 'horizontal';
}
export { useDrawer };
export default useDrawer;
