import React from 'react'
import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    //react fragmentatio we can put multiple divs wihtin this main empty div
    <>

      <Navbar/>
 
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <LeftSidebar/>
    <MainContent/>
    <RightSidebar/>
    </div>

    <Footer/>
    </>
  )
}

export default App
