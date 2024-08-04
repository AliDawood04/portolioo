import React from 'react'

import { FaStar } from 'react-icons/fa6'


export default function About() {
  return (
    <>
    <div className="h-lvh bg-secondColor flex items-center text-white">
      <div className=" container flex justify-center  flex-col items-center">
         <h2 className='uppercase bold text-5xl'>about component</h2>

               <div className='mt-6 flex items-center flex-wrap gap-5'>
                <div className='h-1 w-24 bg-white'></div>
                 <FaStar/>
                <div className='h-1 w-24 bg-white'></div>
               </div>
               <div className='px-16 flex mt-6'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam doloremque soluta cum esse quia quo cupiditate eius quos ut delectus rem, distinctio ducimus odit optio beatae at nulla eos!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam doloremque soluta cum esse quia quo cupiditate eius quos ut delectus rem, distinctio ducimus odit optio beatae at nulla eos!</p>
               </div>

      </div>
    </div>

    </>
  )
}
