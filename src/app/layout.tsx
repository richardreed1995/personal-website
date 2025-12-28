import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MusicProvider } from '@/context/MusicContext'
import { ThemeProvider } from '@/context/ThemeContext'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  title: 'Richard Reed',
  description: 'B2B growth, AI, and automations',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MusicProvider>
            <div className="container">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
            <MusicPlayer />
          </MusicProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
