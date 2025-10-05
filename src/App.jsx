import React from 'react'
import RightSidebar from './components-fb-home-page/RightSidebar'
import MainContent from './components-fb-home-page/MainContent'
import LeftSidebar from './components-fb-home-page/LeftSidebar'
import Navbar from './components-fb-home-page/Navbar'


const App = (props) => {

  return (
    //react fragmentatio we can put multiple divs wihtin this main empty div
    <>
    <div  className='bg-white'>
    <Navbar/>
    </div>
   { <div className="mt-20 flex gap-6">
  <LeftSidebar/>
  <MainContent/>
  <RightSidebar/>
  
</div> }


    
    </>
  )
}

export default App
