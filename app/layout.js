import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/Navbar";
import PSA from "@/components/PSA";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: {
      template: '%s - The Federal Democracy of Solstice',
      default: 'The Federal Democracy of Solstice'
  },
  description: 'The official website of the Federal Democracy of Solstice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <div className="sm:px-10 px-5 py-0.5 font-medium space-x-3 text-right">
          <a href="https://aircs.racing" className="transition duration-150 ease-out hover:ease-in md:hover:text-red-500">aircs.racing ↗</a>
      </div>
      <PSA/>
      <Navbar/>
      {children}
      <footer className="flex flex-col text-center py-3 space-y-2 bg-blue-950 text-light text-sm sm:text-base px-5 sm:px-0">
          <p>The Federal Democracy of Solstice is a fictional country made for the bits & Bytes Minecraft Server</p>
          <p>This website is proudly written using Next.JS and Tailwind CSS</p>
      </footer>
      </body>
    </html>
  )
}
