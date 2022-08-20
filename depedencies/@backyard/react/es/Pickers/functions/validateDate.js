const validateDate = (adapter, value, {
  minDate,
  maxDate,
  disableFuture,
  shouldDisableDate,
  disablePast,
  disableDates,
  dates
}) => {
  const now = adapter.date();
  const date = adapter.date(value);

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

    case Boolean(disableDates && disableDates.some(disabledDate => adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(disabledDate)))):
      return 'disableDates';

    case Boolean(dates && dates.length > 0 && !dates.some(enabledDate => adapter.isEqual(adapter.startOfDay(date), adapter.startOfDay(enabledDate)))):
      return 'dates';

    default:
      return null;
  }
};

export { validateDate };
export default validateDate;