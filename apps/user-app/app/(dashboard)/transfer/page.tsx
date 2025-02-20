import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";

async function getBalance() {
  const session = await getServerSession(authOptions)

  const balance = await prisma.balance.findFirst({
    where: {
      userId: session?.user?.id
    }
  })

  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0
  }
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions)

  const transactions = await prisma.onRampTransactions.findMany({
    where: {
      userId: session?.user?.id
    }
  })

  return transactions.map(t => ({
    id: t.id,
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider
  }))
}


export default async function() {
  const { amount, locked } = await getBalance()
  const transactions = await getOnRampTransactions()

  return <div className="w-full max-w-full">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold pl-2">
      Transfer
    </div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 p-4">
      <div>
        <AddMoneyCard/>
      </div>
      <div className="space-y-4">
        <div>
          <BalanceCard amount={amount} locked={locked}/>
        </div>
        <div className="">
          <OnRampTransaction transactions={transactions}/>
        </div>
      </div>
    </div>
  </div>
}