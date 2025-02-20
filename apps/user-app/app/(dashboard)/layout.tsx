import React, { JSX } from "react";
import { SideBarItem } from "../../components/SideBarItem";

export default function Layout({children}: {children: React.ReactNode}): JSX.Element {
  return <div className="flex min-h-screen">
    <div className="flex flex-col py-20 pl-8 w-64 min-h-screen shadow-md">
      <SideBarItem href="/dashboard" icon={<HomeIcon/>}>Home</SideBarItem>
      <SideBarItem href="/transfer" icon={<TrasnferIcon/>}>Transfer</SideBarItem>
      <SideBarItem href="/transactions" icon={<TransactionsIcon/>}>Transactions</SideBarItem>
      <SideBarItem href="/p2p" icon={<P2PTransfer/>}>P2P Transfer</SideBarItem>
    </div>
    <div className="flex-1 p-4 overflow-hidden">
      {children}
    </div>
  </div>
}

function HomeIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
}

function TrasnferIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
}

function TransactionsIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
}

function P2PTransfer() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
}