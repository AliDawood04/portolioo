import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoBold } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>

   <div >
          <div className='bg-mainColor grid grid-cols-3 text-white text-center p-20'>
                <div >
                  <h2 className='font-bold text-3xl'>LOCATION</h2>
                  <p className='my-3 text-2xl '>Ali Dawood</p>
                  <p className='my-3 capitalize text-2xl '>kbeer ay geeha regloo tgeha</p>
                </div>

                <div >
                  <h2 className='font-bold text-3xl uppercase'>ARound the web</h2>
                  <ul >
                    <li className='text-white flex justify-center my-6 '>
                      <i className=' mx-3 text-3xl'><RiTwitterXFill  /></i>
                      <i className=' mx-3 text-3xl'>< CiFacebook /></i>
                      <i className=' mx-3 text-3xl'>< CiLinkedin /></i>
                      <i className=' mx-3 text-3xl'><  PiInstagramLogoBold/></i>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className='font-bold text-3xl'>ABOUT FREELANCER</h2>
                  <p className='my-3 text-2xl capitalize'>he is a beginner and he study hard</p>
                </div>
          </div>
          <div>
            <p className='bg-thirdCcolors text-white text-center p-3'>Copyright © Your Website 2021</p>
          </div>
   </div>

    </>
  )
}
