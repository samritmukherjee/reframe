"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getCurrentTheme(): Theme {
  if (
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  ) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  // On mount: read localStorage or fall back to system preference.
  // The inline <script> in layout.tsx already applied the class to <html>;
  // we just sync React state here so the toggle button shows the right icon.
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "light" || stored === "dark") {
        setThemeState(stored);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setThemeState(prefersDark ? "dark" : "light");
      }
    } catch {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemeState(prefersDark ? "dark" : "light");
    }

    // Listen for OS-level preference changes (only when no manual override)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const applyTheme = useCallback(
    (next: Theme, persist = true) => {
      setThemeState(next);
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Always remove high-contrast data theme attribute
      document.documentElement.removeAttribute("data-theme");
      if (persist) {
        localStorage.setItem("theme", next);
      }
    },
    []
  );

  useEffect(() => {
    setThemeState(getCurrentTheme());

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "light" ? "dark" : "light");
  }, [theme, applyTheme]);

  const setTheme = useCallback(
    (next: Theme) => applyTheme(next),
    [applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
