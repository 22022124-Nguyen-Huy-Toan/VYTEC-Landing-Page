import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VYTEC\'25 - Vietnamese Youth TEchnopreneur Challenge',
  description: 'Cuộc thi Ý tưởng Sáng tạo Công nghệ 2025 - Hành trình bừng sáng ý tưởng công nghệ',
  keywords: ['VYTEC', 'công nghệ', 'cuộc thi', 'startup', 'ý tưởng sáng tạo'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
