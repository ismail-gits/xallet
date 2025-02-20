import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

async function main() {
  const nabil = await prisma.user.upsert({
    where: { phoneNumber: "8893465688" },
    update: {},
    create: {
      phoneNumber: "8893465688",
      password: "smile476245",
      name: "Nabil",
      balance: {
        create: {
          amount: 20000,
          locked: 0
        }
      },
      transactions: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          provider: "HDFC BANK",
          token: "token_1"
        }
      }
    }
  })

  const faisal = await prisma.user.upsert({
    where: { phoneNumber: "8894465688" },
    update: {},
    create: {
      phoneNumber: "8894465688",
      password: "smile476245",
      name: "Faisal",
      balance: {
        create: {
          amount: 50000,
          locked: 0
        }
      },
      transactions: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 50000,
          provider: "AXIS BANK",
          token: "token_2"
        }
      }
    }
  })

  console.log(nabil, faisal);
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (err) => {
  console.log(err);
  await prisma.$disconnect()
  process.exit(1)
})