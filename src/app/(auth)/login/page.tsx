import LocaleSwitcher from "@/components/locale-switcher"
import Logo from "@/components/logo"
import ThemeToggle from "@/components/ThemeToggle"

export default function LoginPage() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <header className="px-4 py-2">
        <Logo />
      </header>

      <main className="content-center px-4">
        <ThemeToggle />
        <LocaleSwitcher />
      </main>

      <footer className="px-4 py-2">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Finapp
        </div>
      </footer>
    </div>
  )
}
