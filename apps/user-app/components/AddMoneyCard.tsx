"use client"

import prisma from "@repo/db/client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textInput"
import { getServerSession } from "next-auth";
import { JSX, useState } from "react";
import { authOptions } from "../lib/auth";

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
  const [ prodiver, setProvider ] = useState("")
  const session = await getServerSession(authOptions)

  return <Card title="Add Money">
    <div className="w-full pt-4">
      <div>
        <TextInput label="Amount" placeholder="Amount" onChange={(value) => {setAmount(Number(value))}}/>
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
          await prisma.onRampTransactions.create({
            data: {
              userId: session.user.id,
              amount: amount,
              provider: prodiver,
              status: "Processing",
              startTime: new Date(),
              token: "token_3"
            }
          })
          window.location.href = redirectUrl || ""
        }}>Add Money</Button>
      </div>
    </div>
  </Card>
}