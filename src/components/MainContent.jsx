import React from 'react'
import Mainpost from './Mainpost'
import Mainreel from './Mainreel'
import Mainwrite from './Mainwrite'

const MainContent = () => {
  return (
   <div className='w=[50%] bg-orange-800'>
        <Mainreel/>
        <Mainwrite/>
        <Mainpost/>

    </div>
  )
}

export default MainContent
