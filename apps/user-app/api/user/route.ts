import { PrismaClient } from "@repo/db/client"
import { NextResponse } from "next/server"

const client = new PrismaClient()

export const GET = async () => {

  try {
    const id = await client.user.create({
      data: {
        email: "ismail@gmail.com",
        password: "smile476245",
        name: "ismail"
      },
      select: {
        id: true
      }
    })

    return NextResponse.json({id})
  }
  catch(err) {
    console.log(err);
    return NextResponse.json({message: "invalid details"}, {status: 400})
  }
}