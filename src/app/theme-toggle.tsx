"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isLightMounted, setIsLightMounted] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      setIsLightMounted(true);
    } else {
      setIsLightMounted(false);
    }
  }, [theme]);

  return (
    <button
      className="p-2 rounded-md hover:bg-slate-400 transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {isLightMounted ? <Moon size={20} /> : <Sun size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
