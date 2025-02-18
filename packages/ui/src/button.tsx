"use client";

import { ReactNode } from "react";
import { JSX } from "react/jsx-dev-runtime";

interface ButtonProps {
  children: ReactNode;
  onClickHandler: () => void
}

export const Button = ({ children, onClickHandler }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClickHandler} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-6 py-2 me-2 mb-2 cursor-pointer">{children}</button>
  )
};
