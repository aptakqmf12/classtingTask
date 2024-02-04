export const numberToTime = (num: number) => {
  const hour = Math.floor(num / 60);
  const min = num % 60;

  const hourStr = hour >= 10 ? hour.toString() : "0" + hour;
  const minStr = min >= 10 ? min.toString() : "0" + min;

  return `${hourStr}:${minStr}`;
};
