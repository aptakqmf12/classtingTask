import React from "react";

interface ToastProps {
  type: "success" | "error";
}

export default function Toast({ type = "success" }: ToastProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        width: 200,
        height: 50,
        backgroundColor: "#fff",
        border: "1px #eee solid",
        borderRadius: 4,
        color: type === "success" ? "blue" : "red",
      }}
    >
      {type === "success" ? "정답입니다😊" : "오답입니다😭"}
    </div>
  );
}
