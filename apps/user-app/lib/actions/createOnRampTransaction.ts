import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"

export const createOnRampTransaction = async (amount: number, provider: string) => {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id
  const token = Math.random().toString()

  if (!userId) {
    return {
      message: 'User not logged in'
    }
  }

  await prisma.onRampTransactions.create({
    data: {
      userId,
      amount,
      provider,
      token,
      status: "Processing",
      startTime: new Date(),
    }
  })

  return {
    message: "On ramp transaction added"
  }
}