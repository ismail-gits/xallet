"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"

export const p2pTransfer = async (to: string, amount: number) => {
  const session = await getServerSession(authOptions)
  const fromUserId = session?.user?.id

  if (!fromUserId) {
    return {
      message: "Error while sending!"
    }
  }

  const toUser = await prisma.user.findFirst({
    where: {
      phoneNumber: to
    }
  })

  if (!toUser) {
    return {
      message: "User not found, not a valid phone number"
    }
  }

  try {
    await prisma.$transaction(async (t) => {
      // implementing locking for this row until update is done
      await t.$queryRaw`SELECT * FROM "Balance" WHERE "userId"=${fromUserId} FOR UPDATE`

      const fromBalance = await t.balance.findFirst({
        where: {
          userId: fromUserId
        }
      })
  
      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient funds!")
      }
  
      await t.balance.updateMany({
        where: {
          userId: fromUserId
        },
        data: {
          amount: {
            decrement: amount
          }
        }
      })
  
      await t.balance.updateMany({
        where: {
          userId: toUser.id
        },
        data: {
          amount: {
            increment: amount
          }
        }
      })
    })
  }
  catch(err) {
    console.log(err);
    return {
      message: "Error while sending!"
    }
  }
}