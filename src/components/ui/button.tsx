import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-fire text-primary-foreground shadow hover:shadow-fire transform hover:scale-105 transition-all duration-300 font-cyber",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background/50 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-neon transition-all duration-300",
        secondary:
          "bg-gradient-neon text-secondary-foreground shadow-sm hover:shadow-neon transform hover:scale-105 transition-all duration-300 font-cyber",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cyber: 
          "bg-gradient-cyber border border-primary/20 text-foreground shadow-cyber hover:shadow-fire hover:border-primary/40 backdrop-blur-sm transition-all duration-300 font-cyber",
        fire:
          "bg-gradient-fire text-primary-foreground shadow-fire hover:shadow-neon transform hover:scale-110 transition-all duration-300 font-cyber animate-pulse-fire",
        neon:
          "bg-gradient-neon text-secondary-foreground shadow-neon hover:shadow-fire transform hover:scale-110 transition-all duration-300 font-cyber"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
