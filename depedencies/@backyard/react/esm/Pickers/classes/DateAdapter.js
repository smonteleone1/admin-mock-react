import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

/* eslint-disable class-methods-use-this */
import _addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths"; // import addYears from "date-fns/addYears"

import differenceInMilliseconds from "date-fns/differenceInMilliseconds";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import endOfDay from "date-fns/endOfDay";
import _endOfWeek from "date-fns/endOfWeek"; // import endOfYear from "date-fns/endOfYear"

import format from "date-fns/format";
import _getHours from "date-fns/getHours";
import _getSeconds from "date-fns/getSeconds"; // import getYear from "date-fns/getYear"

import _isAfter from "date-fns/isAfter";
import _isBefore from "date-fns/isBefore";
import _isEqual from "date-fns/isEqual";
import _isSameDay from "date-fns/isSameDay"; // import isSameYear from "date-fns/isSameYear"

import _isSameMonth from "date-fns/isSameMonth"; // import isSameHour from "date-fns/isSameHour"

import _isValid from "date-fns/isValid";
import dateFnsParse from "date-fns/parse";
import _setHours from "date-fns/setHours";
import _setMinutes from "date-fns/setMinutes"; // import setMonth from "date-fns/setMonth"

import _setSeconds from "date-fns/setSeconds"; // import setYear from "date-fns/setYear"

import _startOfDay from "date-fns/startOfDay";
import _startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import _startOfWeek from "date-fns/startOfWeek"; // import startOfYear from "date-fns/startOfYear"
// import isWithinInterval from "date-fns/isWithinInterval"
// import longFormatters from "date-fns/_lib/format/longFormatters"

var defaultFormats = {
  "default": "yyyy-MM-dd",
  dayOfMonth: "d",
  fullDate: "PP",
  fullDateTime: "PP p",
  fullDateTime12h: "PP hh:mm aaa",
  fullDateTime24h: "PP HH:mm",
  fullTime: "p",
  fullTime12h: "hh:mm aaa",
  fullTime24h: "HH:mm",
  hours12h: "hh",
  hours24h: "HH",
  keyboardDate: "P",
  keyboardDateTime: "P p",
  keyboardDateTime12h: "P hh:mm aaa",
  keyboardDateTime24h: "P HH:mm",
  minutes: "mm",
  month: "LLLL",
  monthAndDate: "MMMM d",
  monthAndYear: "LLLL yyyy",
  monthShort: "MMM",
  normalDate: "d MMMM",
  normalDateWithWeekday: "EEE, MMM d",
  seconds: "ss",
  shortDate: "MMM d",
  year: "yyyy"
};

var isDate = function isDate(value) {
  return value instanceof Date;
};

var isNumber = function isNumber(value) {
  return Number(value) === value;
};

var isString = function isString(value) {
  return typeof value === 'string';
};

var DateAdapter = /*#__PURE__*/function () {
  function DateAdapter() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale,
        formats = _ref.formats;

    _classCallCheck(this, DateAdapter);

    this.locale = void 0;
    this.formats = void 0;
    this.locale = locale;
    this.formats = _extends({}, defaultFormats, formats);
  } // // Note: date-fns input types are more lenient than this adapter, so we need to expose our more
  // // strict signature and delegate to the more lenient signature. Otherwise, we have downstream type errors upon usage.
  // public is12HourCycleInCurrentLocale() {
  //     if (this.locale) {
  //         return /a/.test(this.locale.formatLong.time())
  //     }
  //     // By default date-fns is using en-US locale with am/pm enabled
  //     return true
  // }
  // public getFormatHelperText(str: string) {
  //     // @see https://github.com/date-fns/date-fns/blob/master/src/format/index.js#L31
  //     const longFormatRegexp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  //     const locale = this.locale || defaultLocale
  //     return str
  //         .match(longFormatRegexp)
  //         .map((token) => {
  //             const firstCharacter = token[0]
  //             if (firstCharacter === "p" || firstCharacter === "P") {
  //                 const longFormatter = longFormatters[firstCharacter]
  //                 return longFormatter(token, locale.formatLong, {})
  //             }
  //             return token
  //         })
  //         .join("")
  //         .replace(/(aaa|aa|a)/g, "(a|p)m")
  //         .toLocaleLowerCase()
  // }
  // public getCurrentLocaleCode() {
  //     return this.locale?.code || "en-US"
  // }


  _createClass(DateAdapter, [{
    key: "addDays",
    value: function addDays(value, count) {
      return _addDays(value, count);
    } // public addMonths(value: Date, count: number) {
    //     return addMonths(value, count)
    // }

  }, {
    key: "isValid",
    value: function isValid(value) {
      return _isValid(this.date(value));
    }
  }, {
    key: "getDiff",
    value: function getDiff(value, comparing) {
      return differenceInMilliseconds(value, this.date(comparing));
    }
  }, {
    key: "isAfter",
    value: function isAfter(value, comparing) {
      return _isAfter(value, comparing);
    }
  }, {
    key: "isBefore",
    value: function isBefore(value, comparing) {
      return _isBefore(value, comparing);
    }
  }, {
    key: "startOfDay",
    value: function startOfDay(value) {
      return _startOfDay(value);
    } // public endOfDay(value: Date) {
    //     return endOfDay(value)
    // }

  }, {
    key: "getHours",
    value: function getHours(value) {
      return _getHours(value);
    }
  }, {
    key: "setHours",
    value: function setHours(value, count) {
      return _setHours(value, count);
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(value, count) {
      return _setMinutes(value, count);
    }
  }, {
    key: "getSeconds",
    value: function getSeconds(value) {
      return _getSeconds(value);
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(value, count) {
      return _setSeconds(value, count);
    }
  }, {
    key: "isSameDay",
    value: function isSameDay(value, comparing) {
      return _isSameDay(value, comparing);
    }
  }, {
    key: "isSameMonth",
    value: function isSameMonth(value, comparing) {
      return _isSameMonth(value, comparing);
    } // public isSameYear(value: Date, comparing: Date) {
    //     return isSameYear(value, comparing)
    // }
    // public isSameHour(value: Date, comparing: Date) {
    //     return isSameHour(value, comparing)
    // }

  }, {
    key: "startOfMonth",
    value: function startOfMonth(value) {
      return _startOfMonth(value);
    } // public endOfMonth(value: Date) {
    //     return endOfMonth(value)
    // }

  }, {
    key: "startOfWeek",
    value: function startOfWeek(value) {
      return _startOfWeek(value, {
        locale: this.locale
      });
    }
  }, {
    key: "endOfWeek",
    value: function endOfWeek(value) {
      return _endOfWeek(value, {
        locale: this.locale
      });
    } // public getYear(value: Date) {
    //     return getYear(value)
    // }
    // public setYear(value: Date, count: number) {
    //     return setYear(value, count)
    // }

  }, {
    key: "date",
    value: function date(value) {
      if (typeof value === "undefined") {
        return new Date();
      }

      if (value === null) {
        return null;
      }

      return new Date(value);
    }
  }, {
    key: "toJsDate",
    value: function toJsDate(value) {
      return value;
    }
  }, {
    key: "parse",
    value: function parse(date) {
      var formatString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

      if (isDate(date)) {
        return date;
      }

      if (isNumber(date)) {
        return this.date(date);
      }

      if (isString(date)) {
        var parsedDate = dateFnsParse(date, defaultFormats[formatString] || formatString, new Date(), {
          locale: this.locale
        });

        if (this.isValid(parsedDate)) {
          return parsedDate;
        }
      }

      return null;
    }
  }, {
    key: "format",
    value: function format(date) {
      var formatKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      return this.formatByString(date, this.formats[formatKey] || formatKey);
    }
  }, {
    key: "formatByString",
    value: function formatByString(date) {
      var formatString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFormats["default"];
      return format(date, formatString, {
        locale: this.locale
      });
    }
  }, {
    key: "reformat",
    value: function reformat(str, oldFormat, newFormat) {
      var date = this.parse(str, oldFormat);

      if (date) {
        return this.format(date, newFormat);
      }

      return str;
    }
  }, {
    key: "isEqual",
    value: function isEqual(date, comparing) {
      if (date === null && comparing === null) {
        return true;
      }

      return _isEqual(date, comparing);
    } // public isNull(date: Date) {
    //     return date === null
    // }

  }, {
    key: "isAfterDay",
    value: function isAfterDay(date, value) {
      return _isAfter(date, endOfDay(value));
    }
  }, {
    key: "isBeforeDay",
    value: function isBeforeDay(date, value) {
      return _isBefore(date, _startOfDay(value));
    } // public isBeforeYear(date: Date, value: Date) {
    //     return isBefore(date, startOfYear(value))
    // }
    // public isAfterYear(date: Date, value: Date) {
    //     return isAfter(date, endOfYear(value))
    // }
    // public isWithinRange(date: Date, [start, end]: [Date, Date]) {
    //     return isWithinInterval(date, { start, end })
    // }
    // public formatNumber(numberToFormat: string) {
    //     return numberToFormat
    // }

  }, {
    key: "getMinutes",
    value: function getMinutes(date) {
      return date.getMinutes();
    }
  }, {
    key: "getMonth",
    value: function getMonth(date) {
      return date.getMonth();
    } // public setMonth(date: Date, count: number) {
    //     return setMonth(date, count)
    // }
    // public getMeridiemText(ampm: "am" | "pm") {
    //     return ampm === "am" ? "AM" : "PM"
    // }

  }, {
    key: "getNextMonth",
    value: function getNextMonth(date) {
      return addMonths(date, 1);
    }
  }, {
    key: "getPreviousMonth",
    value: function getPreviousMonth(date) {
      return addMonths(date, -1);
    } // public getMonthArray(date: Date) {
    //     const firstMonth = startOfYear(date)
    //     const monthArray = [firstMonth]
    //     while (monthArray.length < 12) {
    //         const prevMonth = monthArray[monthArray.length - 1]
    //         monthArray.push(this.getNextMonth(prevMonth))
    //     }
    //     return monthArray
    // }

  }, {
    key: "mergeDateAndTime",
    value: function mergeDateAndTime(date, time) {
      return this.setSeconds(this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time)), this.getSeconds(time));
    }
  }, {
    key: "getWeekdays",
    value: function getWeekdays() {
      var _this = this;

      var now = new Date();
      return eachDayOfInterval({
        start: _startOfWeek(now, {
          locale: this.locale
        }),
        end: _endOfWeek(now, {
          locale: this.locale
        })
      }).map(function (day) {
        return _this.formatByString(day, "EEEEEE");
      });
    }
  }, {
    key: "getWeekArray",
    value: function getWeekArray(date) {
      var start = _startOfWeek(_startOfMonth(date), {
        locale: this.locale
      });

      var end = _endOfWeek(endOfMonth(date), {
        locale: this.locale
      });

      var count = 0;
      var current = start;
      var nestedWeeks = [];

      while (_isBefore(current, end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = _addDays(current, 1);
        count += 1;
      }

      return nestedWeeks;
    } // public getYearRange(start: Date, end: Date) {
    //     const startDate = startOfYear(start)
    //     const endDate = endOfYear(end)
    //     const years: Date[] = []
    //     let current = startDate
    //     while (isBefore(current, endDate)) {
    //         years.push(current)
    //         current = addYears(current, 1)
    //     }
    //     return years
    // }

  }]);

  return DateAdapter;
}();

export { DateAdapter };
export default DateAdapter;