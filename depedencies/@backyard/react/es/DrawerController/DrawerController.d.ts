import * as React from 'react';
import type { ModalControllerProps, ModalControllerRef } from '../ModalController';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Drawer Controller
 *
 * Extends from `DrawerHandler` to offer and cleaner API to work with
 *
 * Controls drawer defined in `drawer` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `DrawerHandler`
 *
 * Example:
 *  <DrawerController
 *      drawer={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */
declare const DrawerController: BDSForwardRef<DrawerControllerProps>;
declare type DrawerControllerRef = ModalControllerRef;
declare type DrawerControllerOverrideProps = 'modal';
interface DrawerControllerProps extends Omit<ModalControllerProps, DrawerControllerOverrideProps> {
    /**
     * Anchor point for the `Drawer`
     *
     * Automatically sets `Drawer`'s `orientation` prop if not specified.
     *
     * @default 'left'
     */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Drawer component to control
     */
    drawer: React.ReactElement;
    /**
     * Drawer style overrides
     */
    drawerStyle?: React.CSSProperties;
    /**
     * Position override for `Drawer` placement
     */
    position?: React.CSSProperties;
}
export { DrawerController, DrawerControllerProps, DrawerControllerRef };
export default DrawerController;
