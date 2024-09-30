"use client";

import React from "react";

type TButtonProps = {
  children: React.ReactNode;
  onClick:
    | (() => void)
    | (() => Promise<void>)
    | ((prevState: any) => React.SetStateAction<any>);
  className?: string;
  loading?: boolean;
  loadingText?: string;
  outline?: boolean;
  iconPosition?: "left" | "right";
  rounded?: "rounded-md" | "rounded-full";
  padding?: "px-4 py-2" | "px-4 py-1";
  bold?: boolean;
};

function Button({
  children,
  onClick,
  className,
  loading,
  rounded = "rounded-md",
  padding = "px-4 py-2",
  bold = false,
}: Readonly<TButtonProps>) {
  return (
    <button
      disabled={loading}
      className={`w-full justify-center ${rounded} ${padding} ${
        bold ? "font-bold" : ""
      } align-middle ${className} text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
