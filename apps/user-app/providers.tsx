"use client"

import React from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react"

export const Providers = ({children}: {children: React.ReactNode}) => {
  return <div>
    <RecoilRoot>
      <SessionProvider>
        {children}
      </SessionProvider>
    </RecoilRoot>
  </div>
}