import React from 'react'
import Navbar from './components/Navbar'
import RightSidebar from './components/RightSidebar'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import Shortcut from './components/Shortcut'
import { Stack } from '@mui/material'

const App = () => {
  return (
    //react fragmentatio we can put multiple divs wihtin this main empty div
    <>
    <Stack direction={"row"}>
      <Navbar/>
    </Stack>
    <Stack direction={"row"} p={2}>
    <LeftSidebar/>
    <MainContent/>
    <RightSidebar/>
    </Stack>
    
    </>
  )
}

export default App
