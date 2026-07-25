import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex items-center gap-2 font-semibold tracking-tight transition-colors"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
        AB
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-base font-bold">
          Asawari Bachhav
        </span>
        <span className="text-xs text-muted-foreground">
          Data Analytics Portfolio
        </span>
      </div>
    </Link>
  );
}