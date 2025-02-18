import { Button } from "./button"

interface AppBarProps {
  user?: {
    name?: string | null,
  },
  onSignIn: any,
  onSignOut: any
}

export const AppBar = ({user, onSignIn, onSignOut}: AppBarProps) => {

  return <div className="flex justify-between items-center shadow-sm px-4 py-3">
    <div className="text-3xl font-extrabold">
      XALLET
    </div>
    <div>
      <Button onClickHandler={user ? onSignOut : onSignIn}>{user ? "Logout" : "Login"}</Button>
    </div>
  </div>
}