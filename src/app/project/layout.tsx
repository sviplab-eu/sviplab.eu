import { Header } from '@/app/components/header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  )
}