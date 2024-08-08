
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import { NavProvider } from '@/provider/navProvider'

const App = ({ children }: { children: React.ReactNode }) => {


  return (
    <div>
      <NavProvider>
        <Header />
        {children}
        <Footer />
      </NavProvider>
    </div>
  )
}

export default App