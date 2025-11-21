"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  return (
    <button
      className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
