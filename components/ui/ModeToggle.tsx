"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/Button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-1 border border-border rounded-full p-1 bg-background/50 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`h-7 w-7 rounded-full ${theme === 'light' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={`h-7 w-7 rounded-full ${theme === 'system' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
      >
        <Laptop className="h-4 w-4" />
        <span className="sr-only">System</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`h-7 w-7 rounded-full ${theme === 'dark' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark</span>
      </Button>
    </div>
  )
}
