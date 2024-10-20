import ThemeToggle from "@/components/ThemeToggle"
import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <h1>LoginPage</h1>
      <Link href="/dashboard">Dashboard</Link>
      <ThemeToggle />
    </>
  )
}
