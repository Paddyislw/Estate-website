import React from 'react'

export default function Card(props) {
  {/* The card component */}
  return (
    <div className='flex flex-col w-[350px] border-[1px] border-gray-300 rounded-lg h-[380px] mx-10 my-5 xl:mx-2 relative bg-[#f8f2fa] hover:scale-105 hover:ease-out cursor-pointer xl:w-[300px]'>
      <img src={props.image} className='w-[350px] h-[200px] rounded-t-lg' />
      <div className='mx-4 mt-2'>
        <p className='font-semibold text-[#9C0EC4] text-xl'>Rs{props.rent}<span className='font-normal text-gray-500 text-base'>/month</span></p>
        <p className='font-semibold text-xl'>{props.name}</p>
        <p className='text-sm text-gray-500 mt-1 '>{props.address}</p>
        <div className='flex flex-col text-sm absolute bottom-0 mb-4 xl:w-[270px]'>
          <hr className='border-[1px] mb-3 w-[300px] xl:w-[270px] ' />
          <div className='flex justify-between '>
            <div className='flex items-center space-x-1'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4zm-2 3v-3a2 2 0 0 0-2-2h-4v5h6zM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="rgba(156,14,196,1)" />
              </svg>
              <p>{props.beds} Beds</p>
            </div>
            <div className='flex space-x-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0L24 0 24 24 0 24z" />
                <path d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8.5-10C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2z" fill="rgba(156,14,196,1)" />
              </svg>
              <p>{props.bathrooms} Bathrooms</p>
            </div>
            <div className='flex space-x-1 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z" fill="rgba(156,14,196,1)" />
              </svg>
              <p>{props.area}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
