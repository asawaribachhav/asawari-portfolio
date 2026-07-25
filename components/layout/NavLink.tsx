"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  active = false,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative rounded-md text-sm font-medium transition-colors duration-200",
        "hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        active ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}

      <span
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}