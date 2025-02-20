import { Card } from "@repo/ui/card"

type TransactionType = {
  id: string,
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
      {transactions.map(t => <div key={t.id} className="flex justify-between">
        <div>
          <div className="text-sm">
            Received INR 
          </div>
          <div className="text-gray-500 text-sm">
            {t.time.toDateString()}
          </div>
        </div>
        <div className="text-green-500">
          + Rs {t.amount / 100}
        </div>
      </div>)}
    </div>
  </Card>
}