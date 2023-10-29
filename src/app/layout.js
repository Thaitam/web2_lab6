import Header from '@/components/homepage/Header'
import './globals.css'
import Footer from '@/components/homepage/Footer'

export const metadata = {
  title: 'Nextjs lab6',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}