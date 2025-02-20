"use client"

import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textInput"
import { useState } from "react";

export const SendCard = () => {
  const [ phoneNumber, setPhoneNumber ] = useState("")
  const [ amount, setAmount ] = useState(0)

  return <Card title="Send">
  <div className="py-4">
    <TextInput label="Phone Number" placeholder="Phone Number" onChange={(value) => setPhoneNumber(value)}/>
  </div>
  <div className="pb-4">
    <TextInput label="Amount" placeholder="Amount" onChange={(value) => setAmount(Number(value))}/>
  </div>
  <div className="flex justify-center">
    <Button onClickHandler={ async () => {
      alert(`send to ${phoneNumber} and amount ${amount}`)
    }}>Send</Button>
  </div>
</Card>
}