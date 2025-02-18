import { JSX } from "react"
import { Button } from "./button"

interface AppBarProps {
  user?: {
    name?: string | null,
  },
  onSignIn: any,
  onSignOut: any
}

export const AppBar = ({user, onSignIn, onSignOut}: AppBarProps): JSX.Element => {

  return <div className="flex justify-between shadow-sm px-10 py-3 items-center">
    <div className="text-3xl font-extrabold pb-1 text-gray-800 hover:text-gray-700 cursor-pointer">
      XALLET
    </div>
    <div className="">
      <Button onClickHandler={user ? onSignOut : onSignIn}>{user ? "Logout" : "Login"}</Button>
    </div>
  </div>
}