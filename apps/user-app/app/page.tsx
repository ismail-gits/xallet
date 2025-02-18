"use client"

import { JSX } from "react";
import { AppBar } from "../../../packages/ui/src/appBar";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home(): JSX.Element {
  const session = useSession()

  return (
    <div>
      <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={signOut}/>
    </div>
  )
}