import { forwardRef, ReactNode } from "react";
import { Badge } from "../badge";
import { Lightbulb } from "lucide-react";

interface MikiriBadgeProps {
  children: ReactNode;
  className?: string;
}

export const MikiriBadge = forwardRef<HTMLDivElement, MikiriBadgeProps>(
  ({ children, className }, ref) => {
    return (
      <Badge
        ref={ref}
        variant={"outline"}
        className={`font-inter rounded-full  shadow ${className}`}
      >
        <Lightbulb />
        {children}
      </Badge>
    );
  },
);

MikiriBadge.displayName = "MikiriBadge";
