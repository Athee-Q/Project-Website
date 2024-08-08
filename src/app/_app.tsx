
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import React from 'react'

const App = ({ children }: { children: React.ReactNode }) => {


  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default App