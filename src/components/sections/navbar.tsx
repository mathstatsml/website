import { ModeToggle } from "~/components/ui/mode-toggle";
import { Button } from "~/components/ui/primitives/button";
import { NavigationMenu } from "~/components/ui/primitives/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-gray-400/50 bg-gray-100/50 py-0.5 backdrop-blur-md backdrop-saturate-200 dark:border-gray-700/50 dark:bg-gray-900/50">
    <nav className="container flex h-16 items-center justify-between lg:h-20">
      <figure className="relative h-full">
        <Link href="/">
          <div className="h-full w-20 py-2 lg:w-32" draggable={false} />
        </Link>
      </figure>
      <NavigationMenu />
      <div className="flex scale-90 items-center gap-1 xs:gap-2 sm:scale-100 sm:gap-3 md:h-full">
        {/* <Link href="/apply">
          <Button variant="default">Apply</Button>
        </Link> */}
        <ModeToggle />
      </div>
    </nav>
  </header>
);
