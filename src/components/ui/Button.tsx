import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all",
        variant === "primary" && "bg-black text-white hover:bg-gray-800",
        variant === "secondary" && "border border-black text-black hover:bg-black hover:text-white",
        variant === "ghost" && "text-black hover:underline",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
