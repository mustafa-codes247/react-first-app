import React from 'react'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'
import LeftSidebar from './components/LeftSidebar'


const App = (props) => {

  return (
    //react fragmentatio we can put multiple divs wihtin this main empty div
    <>
   { <div className="flex gap-6 px-4">
  <LeftSidebar/>
  <MainContent/>
  <RightSidebar/>
</div> }

    
    </>
  )
}

export default App
