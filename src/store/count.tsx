import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CountState {
  count: number;
  isCounting: boolean;
  setCountUp: () => void;
  setIsCounting: (bool: boolean) => void;
  initCount: () => void;
}

export const useCountStore = create<CountState>()(
  devtools(
    (set) => {
      return {
        count: 0,
        isCounting: false,
        setCountUp: () => {
          set((state) => ({ count: state.count + 1 }));
        },
        setIsCounting: (bool) => {
          set(() => ({ isCounting: bool }));
        },

        initCount: () => {
          set(() => ({ count: 0, isCounting: false }));
        },
      };
    },
    {
      name: "countStore",
    }
  )
);
