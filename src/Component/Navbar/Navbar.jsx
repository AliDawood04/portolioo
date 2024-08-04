import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {

      const [bigNav, setBigNav] = useState(false)

      function Nav(){
        if (window.scrollY>5) {
          setBigNav(true)
        }else{
          setBigNav(false)
        }
      }
      window.addEventListener('scroll',Nav)

  return (
    <>

        <nav className={`bg-mainColor ${bigNav?"p-6":"p-10"} duration-500  capitalize text-center fixed right-0 z-50 left-0 top-0`}>

          <div className="flex container items-center text-white justify-between font-bold uppercase ">
                 <div className='text-3xl'>
                 <ul>
                    <li ><Link to=''>start framework</Link></li>
                  </ul>
                 </div>
                 <div >
                 <ul className="flex space-x-5 ">
                    <li><NavLink to='about'> about</NavLink></li>
                    <li><NavLink to='portfolio'> portfolio</NavLink></li>
                    <li><NavLink to='contact'>contact</NavLink></li>
                  </ul>
                 </div>

          </div>
        </nav>
    </>
  )
}
