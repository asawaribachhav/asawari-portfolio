"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the page has been scrolled past the given threshold.
 * Useful for changing the header appearance (background, shadow, blur, etc.).
 */
export function useScrolled(threshold = 8) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > threshold;

      setIsScrolled((prev) => {
        if (prev === scrolled) return prev;
        return scrolled;
      });
    }

    // Set initial state on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}