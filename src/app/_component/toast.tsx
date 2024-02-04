import React from "react";

import { ToastStatus } from "@/store/toast";

interface ToastProps {
  type: ToastStatus;
}

export default function Toast({ type = ToastStatus.SUCCESS }: ToastProps) {
  console.log("type", type);
  const color = type === ToastStatus.SUCCESS ? "blue" : "red";
  return (
    <div
      className=" fixed bottom-4 left-1/2 -translate-x-1/2 w-200 h-50 px-10 py-4 bg-white border border-gray-100 rounded-md"
      style={{ color }}
    >
      {type === ToastStatus.SUCCESS ? "정답입니다😊" : "오답입니다😭"}
    </div>
  );
}
