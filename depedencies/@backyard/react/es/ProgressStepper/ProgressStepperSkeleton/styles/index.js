import styled from 'styled-components';
export const HorizontalWrapper = styled.div.withConfig({
  displayName: "styles__HorizontalWrapper",
  componentId: "sc-1wmnymo-0"
})(["width:100%;display:flex;flex-direction:row;position:relative;.progress-step-connector{position:absolute;left:calc(-50% + var(--bds-sizes-size-24));right:calc(50% + var(--bds-sizes-size-24));top:var(--bds-sizes-size-36);bottom:0;}"]);
export const VerticalWrapper = styled.div.withConfig({
  displayName: "styles__VerticalWrapper",
  componentId: "sc-1wmnymo-1"
})(["height:100%;display:flex;flex-direction:column;position:relative;.progress-step-connector{position:absolute;top:calc(-50% + var(--bds-sizes-size-12));bottom:calc(50% + var(--bds-sizes-size-48));left:var(--bds-sizes-size-20);}&.size--small{.progress-step-connector{left:var(--bds-sizes-size-18);top:calc(-50% + var(--bds-sizes-size-12));}.skeleton--step{min-height:4.75rem !important;}}"]);
export const StepSkeleton = styled.span.withConfig({
  displayName: "styles__StepSkeleton",
  componentId: "sc-1wmnymo-2"
})(["display:flex;flex-direction:column;align-items:center;flex-grow:1;padding:", ";margin:", ";.indicator{margin-bottom:", ";}.heading{margin-top:", ";margin-bottom:", ";}.caption{margin-top:", ";margin-bottom:", ";}&&&.skeleton--step{flex-direction:row;align-items:start;position:relative;padding:", ";margin:", ";min-height:5.25rem;.label-group{margin-left:", ";margin-top:", ";}}"], ({
  theme
}) => `${theme.sizes.size_8} 0px`, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_8, ({
  theme
}) => theme.sizes.size_4, ({
  theme
}) => theme.sizes.size_4, ({
  theme
}) => theme.sizes.size_5, ({
  theme
}) => theme.sizes.size_5, ({
  theme
}) => `${theme.sizes.size_8} 0`, ({
  theme
}) => `${theme.sizes.size_4} 0`, ({
  theme
}) => theme.sizes.size_24, ({
  theme
}) => theme.sizes.size_12);