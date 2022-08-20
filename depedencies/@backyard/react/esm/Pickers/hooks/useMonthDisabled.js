import * as React from 'react';
import useAdapter from './useAdapter';

var useNextMonthDisabled = function useNextMonthDisabled(month, _ref) {
  var disableFuture = _ref.disableFuture,
      maxDate = _ref.maxDate;
  var adapter = useAdapter();
  return React.useMemo(function () {
    var now = adapter.date();
    var lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter]);
};

var usePreviousMonthDisabled = function usePreviousMonthDisabled(month, _ref2) {
  var disablePast = _ref2.disablePast,
      minDate = _ref2.minDate;
  var adapter = useAdapter();
  return React.useMemo(function () {
    var now = adapter.date();
    var firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter]);
};

export { useNextMonthDisabled, usePreviousMonthDisabled };