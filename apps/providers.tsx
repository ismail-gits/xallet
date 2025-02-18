"use client"

import React from "react";
import { RecoilRoot } from "recoil";

export const Providers = ({children}: {children: React.ReactNode}) => {
  return <div>
    <RecoilRoot>
      {children}
    </RecoilRoot>
  </div>
}