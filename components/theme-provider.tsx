"use client"

import { createContext, useContext, type ReactNode } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: string
}

const initialState: ThemeProviderState = {
  theme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // We're using a more efficient approach without unnecessary DOM operations
  // since we're only using light mode and it's already set in the HTML tag
  // This works well with our image-free design system that uses CSS gradients and shapes

  const value = {
    theme: "light",
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value} suppressHydrationWarning>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

