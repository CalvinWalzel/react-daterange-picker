export function getYearMonth(date) {
  if (!date) {
    return undefined;
  }

  return { year: date.year(), month: date.month() };
}

export const getYearMonthProps = function (props) {
  const { selectionType, value } = props;
  if (!value) {
    return undefined;
  }

  if (value._isAMomentObject) {
    return getYearMonth(value);
  } else {
    return getYearMonth(props.value.start);
  }
};
