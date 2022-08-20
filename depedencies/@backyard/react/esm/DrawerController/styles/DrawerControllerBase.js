import { css } from 'styled-components';
var Anchors = css(["&.anchor{&--left{.drawer{border-top-left-radius:0;border-bottom-left-radius:0;}}&--right{.drawer{border-top-right-radius:0;border-bottom-right-radius:0;}}&--top{.drawer{border-top-left-radius:0;border-top-right-radius:0;}}&--bottom{.drawer{border-bottom-left-radius:0;border-bottom-right-radius:0;}}}"]);
var DrawerControllerBase = css(["", ""], Anchors);
export { DrawerControllerBase };
export default DrawerControllerBase;