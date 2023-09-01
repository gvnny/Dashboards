import { Sidebar } from '../components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Dashboards',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  )
}
