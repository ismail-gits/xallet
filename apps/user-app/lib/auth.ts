
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "@repo/db/client"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        phoneNumber: { label: "Phone Number", placeholder: "Enter your number", type: "text"},
        password: { label: "Password", placeholder: "Enter your password", type: "password"}
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
              password: hashedPassword
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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
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