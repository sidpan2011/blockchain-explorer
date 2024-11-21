import { ArrowRight, Search } from "lucide-react";
import { Input } from "./input";
import { useEffect, useRef } from "react";

export default function SearchInput({ setIsSearchOpen }) {
  const searchRef = useRef(null);
  useEffect(() => {
    // Defining the handler function
    function handleEscKey(event) {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    }

    // Adding the event listener for keydown
    document.addEventListener("keydown", handleEscKey);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setIsSearchOpen]);
  return (
    <div className="space-y-2">
      {/* <Label htmlFor="input-26">Search input with icon and button</Label> */}
      <div className="relative" ref={searchRef}>
        <Input onFocus={() => setIsSearchOpen(true)} id="input-26" className="peer pe-9 ps-9" placeholder="Search address, tx hash, block, etc." type="search" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
