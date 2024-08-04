import React from 'react'
import { FaStar } from 'react-icons/fa6'


export default function Contact() {
  return (
    <>
   <div className="h-lvh">
    <div className="flex justify-center items-center flex-col  pt-9">
        
    <h2 className='uppercase bold text-mainColor bold text-5xl'>contact section</h2>

          <div className='mt-6 flex items-center flex-wrap gap-5'>
          <div className='h-1 w-24 bg-mainColor'></div>
            <FaStar className='text-mainColor'/>
          <div className='h-1 w-24 bg-mainColor'></div>
          </div> 
    </div>
 

    <div className='flex justify-center  pt-20'>

        <div className='flex flex-col gap-14 lg:w-2/4 w-full'>      
                    <div className='relative flex flex-col'>
                    <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Name'/>
                    <label className='text-secondColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Name</label>
                    </div>              
                    <div className='relative flex flex-col'>
                    <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Age'/>
                    <label className='text-secondColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Age</label>
                    </div>              
                    <div className='relative flex flex-col'>
                      <input type="text" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Email'/>
                    <label className='text-secondColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Email</label>
                    </div>              
                    <div className='relative flex flex-col'>
                     <input type="password" className='border-b-2 focus:outline-none placeholder:text-gray-600 peer' placeholder='User Password'/>
                    <label className='text-secondColor absolute opacity-0 -bottom-2/4 font-bold peer-focus:opacity-100 peer-focus:bottom-full duration-200'>User Password</label>
                    </div>    
                    <button className='bg-secondColor w-32 py-2 rounded-md text-white active:scale-95 duration-200'>Send Message</button>          
          </div>


    </div>
   </div>
    </>
  )
}
