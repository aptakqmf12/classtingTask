import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CountState {
  count: number;
  isCounting: boolean;
  setIsCounting: (bool: boolean) => void;
  initCount: () => void;
}

export const useCountStore = create<CountState>()(
  devtools(
    (set) => {
      let timer: NodeJS.Timeout;

      return {
        count: 0,
        isCounting: false,
        setIsCounting: (bool) => {
          if (bool) {
            timer = setInterval(() => {
              set((state) => ({ isCounting: bool, count: state.count + 1 }));
            }, 1000);
          } else {
            clearInterval(timer);
            set((state) => ({ isCounting: bool }));
          }
        },
        initCount: () => {
          clearInterval(timer);
          set((state) => ({ count: 0, isCounting: false }));
        },
      };
    },
    {
      name: "countStore",
    }
  )
);
