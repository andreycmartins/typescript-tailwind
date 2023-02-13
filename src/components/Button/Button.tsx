import classNames from "classnames"

type Props = {
  variant?: "default" | "dark" | "primary" | "light"
  children: React.ReactNode
}

export function Button({ variant, children }: Props) {
  let bgColor = "text-black"
  if (variant === "dark") bgColor = "bg-primaryDark text-white"
  if (variant === "primary")
    bgColor = "bg-primary hover:bg-primaryDark active:bg-primaryLight transition-all text-white"
  if (variant === "light") bgColor = "bg-primaryLight text-black"
  return (
    <button className={classNames("py-2 px-4 rounded-md font-bold text-white shadow-md", bgColor)}>{children}</button>
  )
}