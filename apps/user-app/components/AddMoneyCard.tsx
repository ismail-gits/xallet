"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textInput"
import { JSX, useState } from "react";
import { createOnRampTransaction } from "../lib/actions/createOnRampTransaction";

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
  const [ amount, setAmount ] = useState(0)
  const [ provider, setProvider ] = useState(SUPPORTED_BANKS[0]?.name || "")

  return <Card title="Add Money">
    <div className="w-full pt-4">
      <div>
        <TextInput onChange={(value) => {
          setAmount(Number(value))
        }} label="Amount" placeholder="Amount" />
      </div>
      <div className="py-4">
        <Select label="Bank" onSelect={(value) => {
          setProvider(value)
          setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
        }} options={SUPPORTED_BANKS.map(x => ({
          key: x.name,
          value: x.name
        }))}/>
      </div>
      <div className="flex justify-center pt-4">
        <Button onClickHandler={async () => {
          await createOnRampTransaction(amount * 100, provider)
          window.location.href = redirectUrl || ""
        }}>Add Money</Button>
      </div>
    </div>
  </Card>
}