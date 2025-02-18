"use client"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import React, { JSX } from "react"

type SideBarItemType = {
  href: string,
  children: React.ReactNode,
  icon: React.ReactNode
}

export const SideBarItem = ({href, children, icon} : SideBarItemType): JSX.Element => {
  const router = useRouter()
  const pathName = usePathname()
  const selected = pathName === href

  return <div onClick={() => {
    router.push(href)
  }} className={`flex pb-3 text-lg ${selected ? "text-[#6a51a6]" : "text-gray-500"}`}>
    <div className="cursor-pointer">
      {icon}
    </div>
    <div className="font-bold pl-2 cursor-pointer">
      {children}
    </div>
  </div>
}