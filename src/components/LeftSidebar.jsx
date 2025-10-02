import React from 'react'
import Options from './Options'
import Shortcut from './Shortcut'
import Profile from './Profile'

const LeftSidebar = () => {
  return (
    <div className='w-[25%]'>
     <Profile/> 
     <hr className="my-2 border-gray-300" />
    <Shortcut/> 
    </div>
  )
}

export default LeftSidebar
