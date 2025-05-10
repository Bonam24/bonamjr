import { Inter } from "next/font/google"
import "./globals.css"
import ThemeRegistry from "@/components/ThemeRegistry"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bonam Osene | Software Engineer",
  description: "Personal website of Bonam Osene, Software Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
