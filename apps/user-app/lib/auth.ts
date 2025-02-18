
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@repo/db/client"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        phoneNumber: { label: "phoneNumber", placeholder: "Enter your number", type: "text"},
        password: { label: "password", placeholder: "Enter your password", type: "password"}
      },
      
      async authorize(credentials: any) {
        // Do ZOD validation here
        const hashedPassword = await bcrypt.hash(credentials.password, 10)
        const existingUser = await prisma.user.findFirst({
          where: {
            phoneNumber: credentials.phoneNumber
          }
        })

        // if user exists
        if (existingUser) {
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
          if (passwordValidation) {
            return {
              id: existingUser.id,
              name: existingUser.name,
              phoneNumber: existingUser.phoneNumber
            }
          }
          return null
        }

        // if user does not exists, create one
        try {
          const newUser = await prisma.user.create({
            data: {
              phoneNumber: credentials.phoneNumber,
              password: credentials.password
            }
          })

          return {
            id: newUser.id,
            name: newUser.name,
            phoneNumber: newUser.phoneNumber
          }
        }
        catch(err) {
          console.log(err);
          return null
        }
      }
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({token, session}: any) {
      session.user.id = token.sub

      return session
    }
  }
}