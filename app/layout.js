import './globals.css'
import { Roboto_Condensed } from 'next/font/google'

const inter = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'Blessed Solutions Plumbing',
  description: 'Specializing in the repair and installation of pipelines, plumbing and drainage systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
