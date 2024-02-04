import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum ToastStatus {
  SUCCESS = "success",
  FAIL = "fail",
}
interface ToastState {
  showToast: boolean;
  toastStatus: ToastStatus | undefined;
  setShowToast: (status: ToastStatus) => void;
  setHideToast: () => void;
}

export const useToastStore = create<ToastState>()(
  devtools(
    (set) => ({
      showToast: false,
      toastStatus: undefined,
      setShowToast: (status) => {
        set((state) => ({ showToast: true, toastStatus: status }));
      },
      setHideToast: () => {
        set((state) => ({ showToast: false, toastStatus: undefined }));
      },
    }),
    {
      name: "toastStore",
    }
  )
);
