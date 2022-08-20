import styled, { css } from 'styled-components';
var Shapes = css(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);
var FileUploadItemWrapper = styled.li.withConfig({
  displayName: "FileUploadItemWrapper",
  componentId: "sc-1ftci05-0"
})(["position:relative;display:flex;justify-content:space-between;align-items:center;", " padding-left:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-16);height:var(--bds-sizes-size-40);z-index:1;background-color:var(--bds-color-surface-subdued);.file-upload-item-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:", ";font-weight:var(--bds-font-weight-regular);}.file-upload-item-icon{display:flex;align-items:center;justify-content:center;margin-left:var(--bds-sizes-size-20);min-width:var(--bds-sizes-size-16);min-height:var(--bds-sizes-size-16);.icon-close,.icon-close-circle-filled{cursor:pointer;}}@media only screen and (min-width:var(--bds-grid-breakpoint-md-max)){font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}"], Shapes, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});
export { FileUploadItemWrapper };
export default FileUploadItemWrapper;