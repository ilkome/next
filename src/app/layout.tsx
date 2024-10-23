import type { Metadata, Viewport } from "next"

import { ThemeProvider } from "@/components/ThemeProvider"
import "@/app/globals.css"
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

const APP_DEFAULT_TITLE = "Finapp"
const APP_TITLE_TEMPLATE = "%s - Finapp"

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  applicationName: APP_DEFAULT_TITLE,

  description: "Personal finance app",
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
}

export const viewport: Viewport = {
  themeColor: "#171717",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          {/* <ThemeToggle></ThemeToggle>
          <Dropdown></Dropdown>

          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link> */}
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
