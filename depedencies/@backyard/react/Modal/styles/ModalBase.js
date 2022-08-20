"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalBase = void 0;

var _styledComponents = require("styled-components");

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);
var Sizes = (0, _styledComponents.css)(["&.size{&--small{width:26.25rem;}&--medium{width:40.375rem;}&--large{width:54.5rem;}&--jumbo{width:68.625rem;}&--full-screen{width:100vw;height:100vh;.modal-body{flex:1 1 auto;}}}"]);
var ModalBase = (0, _styledComponents.css)(["position:relative;display:flex;flex-direction:column;background-color:var(--bds-color-elevation-03);box-shadow:var(--bds-shadows-shadow-03);width:auto;padding:var(--bds-sizes-size-16);outline:none;max-width:var(--style-modal-max-width);max-height:var(--style-modal-max-height);height:var(--style-modal-height);&,*{box-sizing:border-box;}&.invisible{visibility:hidden;}", " ", " .modal-close{position:absolute;right:var(--bds-sizes-size-16);z-index:1;}.modal-header{position:relative;padding-bottom:var(--bds-sizes-size-16);.modal-header-label{display:block;color:var(--bds-color-text-primary);}.modal-header-title{display:flex;justify-content:flex-start;align-items:center;.modal-header-icon{margin-right:var(--bds-sizes-size-8);}}}.modal-body{position:relative;margin:var(--bds-sizes-size-16) 0;height:100%;min-height:var(--bds-sizes-size-92);overflow-y:auto;}.modal-footer{position:relative;padding-top:var(--bds-sizes-size-16);&.orientation{&--none{}&--horizontal{display:flex;flex-direction:row;justify-content:flex-end;align-items:center;& > button{margin:0 var(--bds-sizes-size-8);}& > button:first-child{margin-left:0;}& > button:last-child{margin-right:0;}}&--vertical{display:flex;flex-direction:column;& > button{margin:var(--bds-sizes-size-8) 0;}& > button:first-child{margin-top:0;}& > button:last-child{margin-bottom:0;}}}}&:not(.no-lines){.modal-header:not(.no-line){border-bottom:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);}.modal-footer:not(.no-line){border-top:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);}}"], Shapes, Sizes);
exports.ModalBase = ModalBase;
var _default = ModalBase;
exports["default"] = _default;