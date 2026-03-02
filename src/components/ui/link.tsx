// ./src/components/ui/link.tsx

import React from "react";
import { Button } from "./button";

export type LinkProps = React.ComponentProps<typeof Button> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <Button {...props} asChild>
      <a href={href}>{children}</a>
    </Button>
  );
};

export { Link };
