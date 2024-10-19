import type { Metadata, Viewport } from "next"
import Link from "next/link"
import { ThemeProvider } from "@/components/ThemeProvider"
import ThemeToggle from "@/components/ThemeToggle"
import "./globals.css"
import Dropdown from "@/components/Dropdown"

const APP_DEFAULT_TITLE = "Finapp"
const APP_TITLE_TEMPLATE = "%s - Finapp"

export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: "Personal finance app",

  applicationName: APP_DEFAULT_TITLE,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: "#171717",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ThemeToggle></ThemeToggle>
          <Dropdown></Dropdown>

          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </ThemeProvider>
      </body>
    </html>
  )
}
