
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@repo/db/client"

export const authOptions = {
  providers: [
    CredentialsProvider({
       name: 'Credentials',
       credentials: {
        phone: { label: "phone", placeholder: "Enter phone number", type: "text"},
        password: { label: "password", placeholder: "Enter you password", type: "password"}
       },

      async authorize(credentials: any) {
        // Do zod validation here for otp
        const hashedPassword = await bcrypt.hash(credentials.password, 10)
        const existingUser = await prisma.user.findFirst({
          where: {
            phoneNumber: credentials.phone 
          }
        })
      }
    })
  ]
}