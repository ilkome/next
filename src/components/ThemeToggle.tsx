"use client"

import { useTheme } from "next-themes"
import React from "react"

export default function DarkLightToggle() {
  const { setTheme } = useTheme()
  return (
    <div className="flex gap-10 text-4xl mt-10">
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
    </div>
  )
}
