"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClickHandler: () => void
}

export const Button = ({ children, onClickHandler }: ButtonProps) => {
  return (
    <button onClick={onClickHandler} type="button" className="text-white bg-gray-700 font-bold text-xl p-2 rounded-lg cursor-pointer">{children}</button>
  )
};
