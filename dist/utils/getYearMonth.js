"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYearMonth = getYearMonth;
function getYearMonth(date) {
  if (!date) {
    return undefined;
  }

  return { year: date.year(), month: date.month() };
}

var getYearMonthProps = exports.getYearMonthProps = function getYearMonthProps(props) {
  var selectionType = props.selectionType,
      value = props.value;

  if (!value) {
    return undefined;
  }

  if (value._isAMomentObject) {
    return getYearMonth(value);
  } else {
    return getYearMonth(props.value.start);
  }
};