"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
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
    <div className="w-full pt-4">
      <div>
        <TextInput label="Amount" placeholder="Amount" onChange={() => {}}/>
      </div>
      <div className="py-4">
        <Select label="Bank" onSelect={(value) => {
          setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
        }} options={SUPPORTED_BANKS.map(x => ({
          key: x.name,
          value: x.name
        }))}/>
      </div>
      <div className="flex justify-center pt-4">
        <Button onClickHandler={() => {
          window.location.href = redirectUrl || ""
        }}>Add Money</Button>
      </div>
    </div>
  </Card>
}