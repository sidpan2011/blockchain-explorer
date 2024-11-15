import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const handleModeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <Button variant="noBg" size="icon" onClick={handleModeToggle} className="h-full w-full text-neutral-500 dark:text-neutral-300">
            <Sun className="w-auto h-auto rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}
