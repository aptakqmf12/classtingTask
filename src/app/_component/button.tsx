import React, { ReactNode, MouseEvent, Attributes } from "react";

export interface ButtonProps {
  children: ReactNode;
  size?: "xs" | "s" | "m" | "l" | "xl";
  bg?: string;
  color?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  size = "m",
  bg = "#000",
  color = "#fff",
  disabled = false,
  onClick,
}: ButtonProps) {
  const sx = () => {
    switch (size) {
      case "xs":
        return {
          fontSize: 12,
        };
      case "s":
        return {
          fontSize: 14,
        };
      case "m":
        return {
          fontSize: 16,
        };
      case "l":
        return {
          fontSize: 20,
        };
      case "xl":
        return {
          fontSize: 24,
        };

      default:
        return {
          fontSize: 16,
        };
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        border: "1px white solid",
        borderRadius: 4,
        padding: "4px 12px",
        backgroundColor: disabled ? "#eee" : bg,
        color: disabled ? "#bfbfbf" : color,
        ...sx(),
      }}
    >
      {children}
    </button>
  );
}
