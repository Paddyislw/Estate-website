import React from 'react'
import logo from '../media/logo.png'
import { useState } from 'react'

export default function NavBar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='px-[100px] flex items-center justify-between bg-violet-200 py-4 lg:px-[60px]'>
            <div className='flex space-x-12 font-semibold text-violet-900 items-center'>
                <div className='flex items-center space-x-1 cursor-pointer'>
                    <img src={logo} className='w-8' />
                    <p className='text-xl'>Estates</p>
                </div>
                <div className='flex items-center lg:hidden space-x-6'>
                    <p className='w-20 bg-violet-100 text-center rounded-lg py-1 cursor-pointer hover:bg-violet-50'>Rent</p>
                    <p className='w-20 bg-violet-100 text-center rounded-lg py-1 cursor-pointer hover:bg-violet-50'>Buy</p>
                    <p className='w-20 bg-violet-100 text-center rounded-lg py-1 cursor-pointer hover:bg-violet-50'>Sell</p>
                </div>
            </div>
            <div className='flex space-x-2 lg:hidden'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white w-24 py-2 rounded-lg'>Login</button>
                <button className='bg-violet-50 hover:bg-violet-100 w-24 py-2 rounded-lg'>Sign Up</button>
            </div>

            {/* The ham menu for the smaller screens */}
            <div className='hidden lg:block relative'>
                <button onClick={() => { setToggle(!toggle) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(76,29,149,1)" />
                    </svg>
                </button>
                {toggle &&
                    <div className='flex flex-col absolute bg-violet-100 rounded-lg right-0 z-10 space-y-4 font-semibold'>
                        <button className='w-44 py-1 mt-2 hover:bg-violet-200 rounded-lg'>Rent</button>
                        <button className='w-44 py-1 hover:bg-violet-200 rounded-lg'>Buy</button>
                        <button className='w-44 py-1 hover:bg-violet-200 rounded-lg'>Sell</button>
                        <button className='w-44 py-1 hover:bg-violet-200 rounded-lg'>Login</button>
                        <button className='w-44 py-1 hover:bg-violet-200 pb-2 rounded-lg'>Sign Up</button>
                    </div>}
            </div>
        </div>
    )
}
