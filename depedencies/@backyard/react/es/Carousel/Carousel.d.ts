import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { IconButtonProps } from '../IconButton';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * A carousel may contain buttons the link the user to another page or site, or it may be a slider containing imagery
 * and details for products. Each image and information should like the user to the respective product page.
 *
 * Details for the product variation may include price, name, and a quick “add to cart” button for ease of shopping.
 *
 * Interactive arrows on both the left and right allow the user to view more options that may be hidden due to the
 * width restriction of a screen. To show there are more options, a slider will be visible below the product version
 * on web, and pagination dots on the mobile version.
 *
 * The button carousel is a type of horizontal navigation. As the user clicks on a button, they are brought
 * to the respective page.
 *
 * ex.
 * <Carousel noScrollbar
 *           scrollDistance={200}>
 *      <CarouselItem>
 *          <Button>Button 1</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 2</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 3</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 4</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 5</Button>
 *      </CarouselItem>
 * </Carousel>
 */
declare const Carousel: BDSForwardRef<CarouselProps>;
declare type CarouselRef = HTMLDivElement;
interface CarouselProps extends BackyardBaseProps<CarouselRef> {
    /**
     * Overrides the props on both of the carousel icon buttons.
     */
    carouselButtonProps?: IconButtonProps;
    /**
     * The icon for the navigate left icon button.
     */
    leftIcon?: React.ReactElement;
    /**
     * Makes it so that when true the Carousel will not display a scrollbar whenever there are items hidden by overflow.
     * Note: This does not remove the scroll functionality just purely removes the scrollbar. You can still scroll via
     * the buttons or within the Carousel itself.
     */
    noScrollbar?: boolean;
    /**
     * Makes it so that when true, the Carousel will not display the left and right buttons. This works in concert with
     * the noScrollbar prop. Both noScrollBar and noButtons can be false but only one can be true at a time.
     */
    noButtons?: boolean;
    /**
     * The icon for the navigate left icon button.
     */
    rightIcon?: React.ReactElement;
    /**
     * Distance, in px, that is scrolled when clicking the 'scroll buttons'
     */
    scrollDistance?: number;
}
export { Carousel };
export type { CarouselProps, CarouselRef };
export default Carousel;
