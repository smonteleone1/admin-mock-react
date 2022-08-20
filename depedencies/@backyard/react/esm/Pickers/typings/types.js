/* eslint-disable import/prefer-default-export */
function isParsableDateObject(value) {
  return value && value.label !== undefined && value.value !== undefined;
}

function isParsableDateRange(value) {
  return value && value.label !== undefined && value.start !== undefined && value.end !== undefined;
}

export { isParsableDateObject, isParsableDateRange };