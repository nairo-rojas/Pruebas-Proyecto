import React from 'react'
import Header from 'components/Navbar'
import Footer from 'components/Footer'

const LayoutHeaderFooter = ({children}) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="h-full overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutHeaderFooter
