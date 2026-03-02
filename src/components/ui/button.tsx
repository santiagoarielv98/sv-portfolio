import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[color,background-color,border-color,box-shadow,opacity] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Matches Button.astro default — glass border with accent tint
        default:
          "border border-accent-primary/35 bg-bg-main text-tx-main shadow-glass hover:border-accent-primary/60 hover:bg-bg-hover hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border-strong bg-transparent text-tx-main hover:bg-bg-hover",
        secondary:
          "border border-border-subtle bg-bg-hover text-tx-main hover:border-border-strong hover:bg-bg-card",
        ghost: "text-tx-secondary hover:bg-bg-hover hover:text-tx-main",
        link: "rounded-sm p-0 text-accent-glow underline-offset-4 hover:text-accent-primary hover:underline",
        // Extra variants matching Button.astro
        filter:
          "border border-border-subtle bg-bg-main text-tx-secondary hover:border-border-strong hover:text-tx-main",
        "filter-active":
          "border border-accent-primary/35 bg-accent-primary/10 text-accent-glow shadow-glass",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-11 px-6 text-sm has-[>svg]:px-4",
        icon: "size-10 p-0",
        "icon-xs": "size-8 rounded-md p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-10 p-0",
        chip: "h-8 px-2.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
