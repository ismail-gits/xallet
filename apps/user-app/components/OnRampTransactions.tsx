import { Card } from "@repo/ui/card"

type TransactionType = {
  time: Date,
  amount: number,
  status: string,
  provider: string
}

export const OnRampTransaction = ({transactions}: {transactions: TransactionType[]}) => {
  if (!transactions.length) {
    return <Card title="Recent Transactions">
      <div className="text-center py-8">
        No Recent Transactions
      </div>
    </Card>
  }

  return <Card title="Recent Transactions">
    <div className="pt-2">
      Logic for transactions here
    </div>
  </Card>
}