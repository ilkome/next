"use client"

import { useTheme } from "next-themes"
import React from "react"

export default function ThemeToggle() {
  const { setTheme } = useTheme()
  return (
    <div className="mt-10 flex gap-10 text-4xl">
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
    </div>
  )
}
