import type { ModalControllerContextValues } from '../ModalController/ModalControllerProvider';
declare const useDrawerController: () => DrawerControllerContextValues;
interface DrawerControllerContextValues extends ModalControllerContextValues {
    /**
     * Orientation of the `Drawer`
     */
    orientation?: 'vertical' | 'horizontal';
}
export { useDrawerController };
export default useDrawerController;
