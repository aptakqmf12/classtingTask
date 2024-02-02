import { useEffect, useState } from "react";

export default function useCountDown({ duration }: { duration: number }) {
  const [isCountDown, setIsCountDown] = useState(false);
  const [count, setCount] = useState<number>(duration);

  useEffect(() => {
    const countDownFunc = setInterval(() => {
      if (isCountDown === false) return;

      if (count <= 1) {
        setIsCountDown(false);
        clearInterval(countDownFunc);
        setCount(duration);
      } else {
        setCount((count) => count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countDownFunc);
    };
  }, [isCountDown, count]);

  return { count, setCount, isCountDown, setIsCountDown };
}
