import { cn } from "@/utils"
import { HTMLAttributes } from "react"

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-light text-zinc-800",
        className
      )}
      {...props}
    >
        {children}
    </h1>
  )
}
export default Heading