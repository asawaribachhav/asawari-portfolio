"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

/**
 * Desktop navigation bar.
 * Displays the logo and navigation links with a sticky header.
 * The background becomes blurred once the page is scrolled.
 */
export function Navbar() {
  const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
  const activeId = useActiveSection(sectionIds);
  const isScrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 h-16 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo />

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={activeId === item.href.slice(1)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}