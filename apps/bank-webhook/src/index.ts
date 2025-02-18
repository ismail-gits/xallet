
import prisma from "@repo/db/client"
import express, { Request, Response } from "express"

const app = express() 
const PORT = 3003

app.use(express.json())

app.get('/hdfcWebhook', async (req: Request, res: Response): Promise<Response | any> => {
  // do zod validation here
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount
  }

  try {
    await prisma.$transaction([
      prisma.balance.update({
        where: {
          userId: paymentInformation.userId
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount)
          }
        }
      }),
      prisma.onRampTransactions.update({
        where: {
          token: paymentInformation.token
        },
        data: {
          status: "Success"
        }
      })
    ])

    return res.json({message: "captured"})
  }
  catch(err) {
    console.log(err)
    return res.status(411).json({message: "Error while processing webhook"})
  }
})

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
  
})