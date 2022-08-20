import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { BreadcrumbDesktopProps, BreadcrumbDesktopRef, LinkCrumbProps } from '../BreadcrumbDesktop';
import type { BreadcrumbMobileProps, BreadcrumbMobileRef } from '../BreadcrumbMobile';
declare const Breadcrumb: BDSForwardRef<BreadcrumbProps>;
declare type BreadcrumbRef = BreadcrumbDesktopRef | BreadcrumbMobileRef;
declare type CrumbProps = LinkCrumbProps;
declare type BreadcrumbOverrideProps = 'crumbs';
interface BreadcrumbProps extends Omit<BreadcrumbDesktopProps, BreadcrumbOverrideProps>, Omit<BreadcrumbMobileProps, BreadcrumbOverrideProps> {
    /**
     * Determines the rendered breadcrumb component
     * @default 'auto'
     */
    render?: 'auto' | 'desktop' | 'mobile';
    /**
     * List of crumb props to render as crumbs
     */
    crumbs: CrumbProps[];
}
export { Breadcrumb };
export type { BreadcrumbProps, BreadcrumbRef, CrumbProps };
export default Breadcrumb;
