import { Navbar } from "./Navbar";

/**
 * Thin composition wrapper around Navbar.
 *
 * This component intentionally does not render its own <header> element.
 * The Navbar already provides the semantic <header> landmark, sticky
 * positioning, and scroll behavior. Keeping Header as a composition wrapper
 * avoids nested <header> elements and provides a stable place to add future
 * site-wide elements (such as an announcement bar) without modifying Navbar.
 */
export function Header() {
  return <Navbar />;
}