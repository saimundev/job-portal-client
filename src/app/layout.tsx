import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutProps } from '@/types/types'
import Header from '@/components/shared/Header'
import { cn } from '@/lib/utils'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-bgColor ")}>
        <div className="">
          <Header />
        </div>
        <div className="">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  )
}
