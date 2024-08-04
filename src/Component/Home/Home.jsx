import React from 'react'
import { FaStar } from "react-icons/fa6";
import myimage from "../../assets/avataaars.svg"
export default function Home() {
  return (
    <>
  
      <div className="h-lvh bg-secondColor  flex items-center justify-center  ">



        <div className='flex flex-col  p-3 '>
               <div className=" flex justify-center  ">
                    <img className='w-60' src={myimage} alt="" />
               </div>



            <div className="flex justify-center items-center flex-col pt-14 ">

                <h2 className='uppercase font-bold text-5xl text-white'>start framework</h2>
                <div className='mt-6 flex items-center flex-wrap gap-5'> 
                  <div className='h-1 w-24 bg-white'></div>
                  < FaStar className='text-white'/>
                  <div className='h-1 w-24 bg-white'></div>
                </div>
                <p className='mt-6 text-xl text-white'>Graphic Artist - Web Designer - Illustrator</p>
           </div>


        </div>


      </div>
    </>
  )
}
