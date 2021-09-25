import Header from "components/header";
import Footer from "components/footer";
import React from 'react'

const layout = ({children}) => {
    return (
      <div className="mainContainer">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default layout

