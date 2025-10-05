import React from 'react'
import Navlogo from './Navlogo'
import Navicon from './Navicon'
import Navoption from './Navoption'

const Navbar = () => {
  return (
   
   <>
   <div className='flex justify-between h-14 !bg-white shadow-md fixed top-0 left-0 w-full z-50 px-4'>
   <Navlogo/>
   <Navicon/>
   <Navoption/>
   </div>
    </>
  )
}

export default Navbar
