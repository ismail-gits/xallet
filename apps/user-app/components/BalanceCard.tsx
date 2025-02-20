
import { Card } from "@repo/ui/card"

type BalanceCardType = {
  amount: number,
  locked: number
}

export const BalanceCard = ({amount, locked}: BalanceCardType) => {
  return <Card title="Balance">
    <div className="flex justify-between border-b border-gray-300 py-2">
      <div>
        Unlocked Balance
      </div>
      <div>
        {amount / 100} INR
      </div>
    </div>
    <div className="flex justify-between border-b border-gray-300 py-2">
      <div>
        Total Locked Balance
      </div>
      <div>
        {locked / 100} INR
      </div>
    </div>
    <div className="flex justify-between border-b border-gray-300 py-2">
      <div>
        Total Balance
      </div>
      <div>
        {(amount + locked) / 100} INR
      </div>
    </div>
  </Card>
}