/* eslint-disable no-underscore-dangle */

const getFullDate = (date: Date): string => {
  let _date = date;

  if (typeof date === 'string') {
    _date = new Date(date);
  }

  const day = _date.getDate();
  const month = _date.getMonth() + 1;
  const year = _date.getFullYear();

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};

export default getFullDate;
