"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"

export default function Home() {
  const router = useRouter();
  const session = useSession()

  if (!session.data?.user) {
    router.push('/api/auth/signin')
  } 
  else {
    router.push('/dashboard')
  }
  

  return <div>Redirecting...</div>;
}