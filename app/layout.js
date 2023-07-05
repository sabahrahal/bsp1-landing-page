import { Footer, Navbar } from './components'
import './globals.css'
import { Roboto_Condensed } from 'next/font/google'

const inter = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap'
})

export const metadata = () => {
  return {
    title: {
      default: "Blessed Solutions Plumbing",
    },
    description:
      "Specializing in the repair and installation of pipelines, plumbing and drainage systems.",
    icons: {
      icon: "./favicon.ico",
    },
    generator: "Next.js",
    applicationName: "BSP1",
    referrer: "origin-when-cross-origin",
    keywords: ["Plumbing repairs", "Drain cleaning", "Water heater services", "Pipe and sewer line services", "Bathroom and kitchen plumbing"],
    authors: [
      { name: "Sabah Rahal", url: "https://github.com/sabahrahal" },
      { name: "Jorge Oviedo", url: "https://github.com/jorgeoviedo3" }
    ],
    colorScheme: "light",
    creator: "Sabah Rahal",
    publisher: "Jorge Oviedo",
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar /> 
      <div className="container px-2 md:px-0 mt-40 md:mt-48">
        {children}
      </div>
      <Footer />
      </body>
    </html>
  )
}
