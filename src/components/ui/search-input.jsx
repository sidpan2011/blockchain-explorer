import { Search } from "lucide-react";
import { Input } from "./input";
import { useEffect, useRef } from "react";


export default function SearchInput({ setIsSearchOpen }) {
  const searchRef = useRef(null);
  const inputRef = useRef(null)
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        inputRef.current?.blur();
      }
      if ((event.key === "f" || event.key === "F") && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        setIsSearchOpen(true);
        inputRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setIsSearchOpen]);

  return (
    <div className="space-y-2">
      <div className="relative" ref={searchRef}>
        <Input ref={inputRef} onFocus={() => setIsSearchOpen(true)} id="input-26" className="peer pe-9 ps-9" placeholder="Search address, tx hash, block, etc." type="search" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
        <div className="absolute inset-y-0 end-0 h-full justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 flex items-center mx-4 space-x-1">
          <p className="text-xs">Press</p><kbd className="text-xs">F</kbd>
        </div>
      </div>
    </div>
  );
}
