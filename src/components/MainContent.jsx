import React from 'react'
import Mainpost from './Mainpost'
import Mainreel from './Mainreel'
import Mainwrite from './Mainwrite'

const MainContent = () => {
  return (
   <div style={{width:"80%",textAlign:"center",backgroundColor:"lightblue",fontSize:"40px"}}>
        <Mainreel/>
        <Mainwrite/>
        <Mainpost/>

    </div>
  )
}

export default MainContent
