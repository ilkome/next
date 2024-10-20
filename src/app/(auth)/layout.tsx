export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grid h-dvh content-center w-full">{children}</div>
}
