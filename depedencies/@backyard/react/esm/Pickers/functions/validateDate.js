var validateDate = function validateDate(adapter, value, _ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      shouldDisableDate = _ref.shouldDisableDate,
      disablePast = _ref.disablePast,
      disableDates = _ref.disableDates,
      dates = _ref.dates;
  var now = adapter.date();
  var date = adapter.date(value);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !adapter.isValid(value):
      return 'invalidDate';

    case Boolean(shouldDisableDate && shouldDisableDate(date)):
      return 'shouldDisableDate';

    case Boolean(disableFuture && adapter.isAfterDay(date, now)):
      return 'disableFuture';

    case Boolean(disablePast && adapter.isBeforeDay(date, now)):
      return 'disablePast';

    case Boolean(minDate && adapter.isBeforeDay(date, minDate)):
      return 'minDate';

    case Boolean(maxDate && adapter.isAfterDay(date, maxDate)):
      return 'maxDate';

    case Boolean(disableDates && disableDates.some(function (disabledDate) {
      return adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(disabledDate));
    })):
      return 'disableDates';

    case Boolean(dates && dates.length > 0 && !dates.some(function (enabledDate) {
      return adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(enabledDate));
    })):
      return 'dates';

    default:
      return null;
  }
};

export { validateDate };
export default validateDate;