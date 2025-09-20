"use client"
import RootThemeLayout from "@/components/providers/RootThemLayout"
import "../globals.css"
import { AuthProvider } from "@/context/AuthContext"

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <RootThemeLayout>
            {children}
          </RootThemeLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
