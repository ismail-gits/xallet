"use client"

import { AppBar } from "@repo/ui/appBar"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { JSX } from "react"

export const AppBarComponent = (): JSX.Element => {
  const session = useSession()
  const router = useRouter()

  return <div>
    <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={ async () => {
      await signOut()
      router.push('/api/auth/signin')
    }}/>
  </div>
}