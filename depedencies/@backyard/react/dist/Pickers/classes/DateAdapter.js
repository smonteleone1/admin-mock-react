"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DateAdapter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _addDays2 = _interopRequireDefault(require("date-fns/addDays"));

var _addMonths = _interopRequireDefault(require("date-fns/addMonths"));

var _differenceInMilliseconds = _interopRequireDefault(require("date-fns/differenceInMilliseconds"));

var _eachDayOfInterval = _interopRequireDefault(require("date-fns/eachDayOfInterval"));

var _endOfDay = _interopRequireDefault(require("date-fns/endOfDay"));

var _endOfWeek2 = _interopRequireDefault(require("date-fns/endOfWeek"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _getHours2 = _interopRequireDefault(require("date-fns/getHours"));

var _getSeconds2 = _interopRequireDefault(require("date-fns/getSeconds"));

var _isAfter2 = _interopRequireDefault(require("date-fns/isAfter"));

var _isBefore2 = _interopRequireDefault(require("date-fns/isBefore"));

var _isEqual2 = _interopRequireDefault(require("date-fns/isEqual"));

var _isSameDay2 = _interopRequireDefault(require("date-fns/isSameDay"));

var _isSameMonth2 = _interopRequireDefault(require("date-fns/isSameMonth"));

var _isValid2 = _interopRequireDefault(require("date-fns/isValid"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _setHours2 = _interopRequireDefault(require("date-fns/setHours"));

var _setMinutes2 = _interopRequireDefault(require("date-fns/setMinutes"));

var _setSeconds2 = _interopRequireDefault(require("date-fns/setSeconds"));

var _startOfDay2 = _interopRequireDefault(require("date-fns/startOfDay"));

var _startOfMonth2 = _interopRequireDefault(require("date-fns/startOfMonth"));

var _endOfMonth = _interopRequireDefault(require("date-fns/endOfMonth"));

var _startOfWeek2 = _interopRequireDefault(require("date-fns/startOfWeek"));

/* eslint-disable class-methods-use-this */
// import addYears from "date-fns/addYears"
// import endOfYear from "date-fns/endOfYear"
// import getYear from "date-fns/getYear"
// import isSameYear from "date-fns/isSameYear"
// import isSameHour from "date-fns/isSameHour"
// import setMonth from "date-fns/setMonth"
// import setYear from "date-fns/setYear"
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

    (0, _classCallCheck2["default"])(this, DateAdapter);
    this.locale = void 0;
    this.formats = void 0;
    this.locale = locale;
    this.formats = (0, _extends2["default"])({}, defaultFormats, formats);
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


  (0, _createClass2["default"])(DateAdapter, [{
    key: "addDays",
    value: function addDays(value, count) {
      return (0, _addDays2["default"])(value, count);
    } // public addMonths(value: Date, count: number) {
    //     return addMonths(value, count)
    // }

  }, {
    key: "isValid",
    value: function isValid(value) {
      return (0, _isValid2["default"])(this.date(value));
    }
  }, {
    key: "getDiff",
    value: function getDiff(value, comparing) {
      return (0, _differenceInMilliseconds["default"])(value, this.date(comparing));
    }
  }, {
    key: "isAfter",
    value: function isAfter(value, comparing) {
      return (0, _isAfter2["default"])(value, comparing);
    }
  }, {
    key: "isBefore",
    value: function isBefore(value, comparing) {
      return (0, _isBefore2["default"])(value, comparing);
    }
  }, {
    key: "startOfDay",
    value: function startOfDay(value) {
      return (0, _startOfDay2["default"])(value);
    } // public endOfDay(value: Date) {
    //     return endOfDay(value)
    // }

  }, {
    key: "getHours",
    value: function getHours(value) {
      return (0, _getHours2["default"])(value);
    }
  }, {
    key: "setHours",
    value: function setHours(value, count) {
      return (0, _setHours2["default"])(value, count);
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(value, count) {
      return (0, _setMinutes2["default"])(value, count);
    }
  }, {
    key: "getSeconds",
    value: function getSeconds(value) {
      return (0, _getSeconds2["default"])(value);
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(value, count) {
      return (0, _setSeconds2["default"])(value, count);
    }
  }, {
    key: "isSameDay",
    value: function isSameDay(value, comparing) {
      return (0, _isSameDay2["default"])(value, comparing);
    }
  }, {
    key: "isSameMonth",
    value: function isSameMonth(value, comparing) {
      return (0, _isSameMonth2["default"])(value, comparing);
    } // public isSameYear(value: Date, comparing: Date) {
    //     return isSameYear(value, comparing)
    // }
    // public isSameHour(value: Date, comparing: Date) {
    //     return isSameHour(value, comparing)
    // }

  }, {
    key: "startOfMonth",
    value: function startOfMonth(value) {
      return (0, _startOfMonth2["default"])(value);
    } // public endOfMonth(value: Date) {
    //     return endOfMonth(value)
    // }

  }, {
    key: "startOfWeek",
    value: function startOfWeek(value) {
      return (0, _startOfWeek2["default"])(value, {
        locale: this.locale
      });
    }
  }, {
    key: "endOfWeek",
    value: function endOfWeek(value) {
      return (0, _endOfWeek2["default"])(value, {
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
        var parsedDate = (0, _parse["default"])(date, defaultFormats[formatString] || formatString, new Date(), {
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
      return (0, _format["default"])(date, formatString, {
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

      return (0, _isEqual2["default"])(date, comparing);
    } // public isNull(date: Date) {
    //     return date === null
    // }

  }, {
    key: "isAfterDay",
    value: function isAfterDay(date, value) {
      return (0, _isAfter2["default"])(date, (0, _endOfDay["default"])(value));
    }
  }, {
    key: "isBeforeDay",
    value: function isBeforeDay(date, value) {
      return (0, _isBefore2["default"])(date, (0, _startOfDay2["default"])(value));
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
      return (0, _addMonths["default"])(date, 1);
    }
  }, {
    key: "getPreviousMonth",
    value: function getPreviousMonth(date) {
      return (0, _addMonths["default"])(date, -1);
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
      return (0, _eachDayOfInterval["default"])({
        start: (0, _startOfWeek2["default"])(now, {
          locale: this.locale
        }),
        end: (0, _endOfWeek2["default"])(now, {
          locale: this.locale
        })
      }).map(function (day) {
        return _this.formatByString(day, "EEEEEE");
      });
    }
  }, {
    key: "getWeekArray",
    value: function getWeekArray(date) {
      var start = (0, _startOfWeek2["default"])((0, _startOfMonth2["default"])(date), {
        locale: this.locale
      });
      var end = (0, _endOfWeek2["default"])((0, _endOfMonth["default"])(date), {
        locale: this.locale
      });
      var count = 0;
      var current = start;
      var nestedWeeks = [];

      while ((0, _isBefore2["default"])(current, end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = (0, _addDays2["default"])(current, 1);
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

exports.DateAdapter = DateAdapter;
var _default = DateAdapter;
exports["default"] = _default;