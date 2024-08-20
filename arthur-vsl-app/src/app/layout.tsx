import './styles/global.css';
import { Header } from './components/Header'
import { AppProvider } from './Context/AppContext'
import { Footer } from './components/Footer'

export const metadata = {
  title: '@Arthur.vsl',
  description: 'Venha conhecer o meu site! 🖖',
}

export default function RootLayout({
  children,
  titlePage,
}: {
  children: React.ReactNode,
  titlePage: string
}) {
  return (
    <html lang="pt-br" className='Html'>
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}