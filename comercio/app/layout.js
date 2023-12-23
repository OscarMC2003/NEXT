import Navbar from '@/components/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children} 
    </div>
      
  )
}
