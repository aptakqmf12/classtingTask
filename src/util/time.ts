export const numberToTime = (num: number) => {
  const sec = num % 60;
  const min = Math.floor(num / 60);
  const hour = Math.floor(min / 60);

  const hourStr = hour >= 10 ? hour.toString() : "0" + hour;
  const minStr = min >= 10 ? min.toString() : "0" + min;
  const secStr = sec >= 10 ? sec.toString() : "0" + sec;

  return `${hourStr}:${minStr}:${secStr}`;
};
