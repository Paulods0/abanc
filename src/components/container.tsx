import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <div className={twMerge("lg:w-[1200px] w-full mx-auto", className)}>{children}</div>
}

export default Container
