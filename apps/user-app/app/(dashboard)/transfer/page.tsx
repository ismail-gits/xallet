import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransactions";

export default async function() {
  // const transactions = []

  return <div className=" w-full">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold pl-2">
      Transfer
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
      <div>
        <AddMoneyCard/>
      </div>
      <div className="space-y-4">
        <div>
          <BalanceCard amount={0} locked={0}/>
        </div>
        <div className="">
          <OnRampTransaction transactions={[]}/>
        </div>
      </div>
    </div>
  </div>
}