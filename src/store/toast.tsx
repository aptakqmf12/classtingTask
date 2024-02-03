import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ToastState {
  showToast: boolean;
  setShowToast: (bool: boolean) => void;
}

export const useToastStore = create<ToastState>()(
  devtools(
    (set) => ({
      showToast: false,
      setShowToast: (bool) => {
        set((state) => ({ showToast: bool }));
      },
    }),
    {
      name: "toastStore",
    }
  )
);
