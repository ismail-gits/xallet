import { Button } from "./button"

interface AppBarProps {
  user?: {
    name?: string | null,
  },
  onSignIn: any,
  onSignOut: any
}

export const AppBar = ({user, onSignIn, onSignOut}: AppBarProps) => {

  return <div className="flex justify-between shadow-sm px-4 py-2 items-center">
    <div className="text-3xl font-extrabold pb-1">
      XALLET
    </div>
    <div>
      <Button onClickHandler={user ? onSignOut : onSignIn}>{user ? "Logout" : "Login"}</Button>
    </div>
  </div>
}