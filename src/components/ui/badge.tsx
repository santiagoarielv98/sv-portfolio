import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border font-mono font-medium",
  {
    variants: {
      variant: {
        default:
          "border-accent-primary/30 bg-accent-primary/15 text-accent-glow",
        secondary: "border-border-strong bg-transparent text-tx-secondary",
        outline: "border-border-strong bg-transparent text-tx-secondary",
        destructive: "border-state-error/30 bg-state-error/15 text-state-error",
        success:
          "border-state-success/30 bg-state-success/15 text-state-success",
        warning:
          "border-state-warning/30 bg-state-warning/15 text-state-warning",
        tag: "border-border-subtle bg-bg-hover text-tx-secondary hover:border-border-strong hover:text-tx-main transition-[color,border-color,opacity] duration-200",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      pill: true,
    },
  },
);

function Badge({
  className,
  variant,
  size,
  pill,
  dot = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    dot?: boolean;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, pill, className }))}
      {...props}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
