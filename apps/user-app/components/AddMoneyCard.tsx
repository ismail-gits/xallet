"use client"

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput"

import { JSX, useState } from "react";

const SUPPORTED_BANKS = [
  {
    name: "HDFC BANK",
    redirectUrl: "https://netbanking.hdfcbank.com"
  },
  {
    name: "AXIS BANK",
    redirectUrl: "https://axisbank.com"
  }
]

export const AddMoneyCard = (): JSX.Element => {
  const [ redirectUrl, setRedirectUrl ] = useState(SUPPORTED_BANKS[0]?.redirectUrl)

  return <Card title="Add Money">
    <div className="w-full">
      <TextInput label="Amount"/>
    </div>
  </Card>
}