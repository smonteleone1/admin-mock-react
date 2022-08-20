import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable class-methods-use-this */
import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths"; // import addYears from "date-fns/addYears"

import differenceInMilliseconds from "date-fns/differenceInMilliseconds";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import endOfDay from "date-fns/endOfDay";
import endOfWeek from "date-fns/endOfWeek"; // import endOfYear from "date-fns/endOfYear"

import format from "date-fns/format";
import getHours from "date-fns/getHours";
import getSeconds from "date-fns/getSeconds"; // import getYear from "date-fns/getYear"

import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";
import isSameDay from "date-fns/isSameDay"; // import isSameYear from "date-fns/isSameYear"

import isSameMonth from "date-fns/isSameMonth"; // import isSameHour from "date-fns/isSameHour"

import isValid from "date-fns/isValid";
import dateFnsParse from "date-fns/parse";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes"; // import setMonth from "date-fns/setMonth"

import setSeconds from "date-fns/setSeconds"; // import setYear from "date-fns/setYear"

import startOfDay from "date-fns/startOfDay";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfWeek from "date-fns/startOfWeek"; // import startOfYear from "date-fns/startOfYear"
// import isWithinInterval from "date-fns/isWithinInterval"
// import longFormatters from "date-fns/_lib/format/longFormatters"

const defaultFormats = {
  default: "yyyy-MM-dd",
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

const isDate = value => value instanceof Date;

const isNumber = value => Number(value) === value;

const isString = value => typeof value === 'string';

class DateAdapter {
  constructor({
    locale,
    formats
  } = {}) {
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


  addDays(value, count) {
    return addDays(value, count);
  } // public addMonths(value: Date, count: number) {
  //     return addMonths(value, count)
  // }


  isValid(value) {
    return isValid(this.date(value));
  }

  getDiff(value, comparing) {
    return differenceInMilliseconds(value, this.date(comparing));
  }

  isAfter(value, comparing) {
    return isAfter(value, comparing);
  }

  isBefore(value, comparing) {
    return isBefore(value, comparing);
  }

  startOfDay(value) {
    return startOfDay(value);
  } // public endOfDay(value: Date) {
  //     return endOfDay(value)
  // }


  getHours(value) {
    return getHours(value);
  }

  setHours(value, count) {
    return setHours(value, count);
  }

  setMinutes(value, count) {
    return setMinutes(value, count);
  }

  getSeconds(value) {
    return getSeconds(value);
  }

  setSeconds(value, count) {
    return setSeconds(value, count);
  }

  isSameDay(value, comparing) {
    return isSameDay(value, comparing);
  }

  isSameMonth(value, comparing) {
    return isSameMonth(value, comparing);
  } // public isSameYear(value: Date, comparing: Date) {
  //     return isSameYear(value, comparing)
  // }
  // public isSameHour(value: Date, comparing: Date) {
  //     return isSameHour(value, comparing)
  // }


  startOfMonth(value) {
    return startOfMonth(value);
  } // public endOfMonth(value: Date) {
  //     return endOfMonth(value)
  // }


  startOfWeek(value) {
    return startOfWeek(value, {
      locale: this.locale
    });
  }

  endOfWeek(value) {
    return endOfWeek(value, {
      locale: this.locale
    });
  } // public getYear(value: Date) {
  //     return getYear(value)
  // }
  // public setYear(value: Date, count: number) {
  //     return setYear(value, count)
  // }


  date(value) {
    if (typeof value === "undefined") {
      return new Date();
    }

    if (value === null) {
      return null;
    }

    return new Date(value);
  }

  toJsDate(value) {
    return value;
  }

  parse(date, formatString = 'default') {
    if (isDate(date)) {
      return date;
    }

    if (isNumber(date)) {
      return this.date(date);
    }

    if (isString(date)) {
      const parsedDate = dateFnsParse(date, defaultFormats[formatString] || formatString, new Date(), {
        locale: this.locale
      });

      if (this.isValid(parsedDate)) {
        return parsedDate;
      }
    }

    return null;
  }

  format(date, formatKey = 'default') {
    return this.formatByString(date, this.formats[formatKey] || formatKey);
  }

  formatByString(date, formatString = defaultFormats.default) {
    return format(date, formatString, {
      locale: this.locale
    });
  }

  reformat(str, oldFormat, newFormat) {
    const date = this.parse(str, oldFormat);

    if (date) {
      return this.format(date, newFormat);
    }

    return str;
  }

  isEqual(date, comparing) {
    if (date === null && comparing === null) {
      return true;
    }

    return isEqual(date, comparing);
  } // public isNull(date: Date) {
  //     return date === null
  // }


  isAfterDay(date, value) {
    return isAfter(date, endOfDay(value));
  }

  isBeforeDay(date, value) {
    return isBefore(date, startOfDay(value));
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


  getMinutes(date) {
    return date.getMinutes();
  }

  getMonth(date) {
    return date.getMonth();
  } // public setMonth(date: Date, count: number) {
  //     return setMonth(date, count)
  // }
  // public getMeridiemText(ampm: "am" | "pm") {
  //     return ampm === "am" ? "AM" : "PM"
  // }


  getNextMonth(date) {
    return addMonths(date, 1);
  }

  getPreviousMonth(date) {
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


  mergeDateAndTime(date, time) {
    return this.setSeconds(this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time)), this.getSeconds(time));
  }

  getWeekdays() {
    const now = new Date();
    return eachDayOfInterval({
      start: startOfWeek(now, {
        locale: this.locale
      }),
      end: endOfWeek(now, {
        locale: this.locale
      })
    }).map(day => this.formatByString(day, "EEEEEE"));
  }

  getWeekArray(date) {
    const start = startOfWeek(startOfMonth(date), {
      locale: this.locale
    });
    const end = endOfWeek(endOfMonth(date), {
      locale: this.locale
    });
    let count = 0;
    let current = start;
    const nestedWeeks = [];

    while (isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = addDays(current, 1);
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


}

export { DateAdapter };
export default DateAdapter;