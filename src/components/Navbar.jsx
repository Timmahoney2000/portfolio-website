/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const items = [
        {id:1, text:"About"},
        {id:2, text:"Services"},
        {id:3, text:"Work"},
        {id:4, text:"Testimonials"},
        {id:5, text:"Contact"},
    ]
    
  return (
    <div className='bg-yellow-50 text-black w-full'>
      <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
        <div className='text-x1 md:text-2x1 font-bold flex items-center gap-1'>
            <span className='text-black'>Tim</span>
            <span className='text-yellow-500'>Mahoney</span>
        </div>
      
      <div className='hidden md:flex space-x-6 items-center list-none text-lg'>
        {items.map(({id, text}) => (
            
            <li key={id} className='hover:text-yellow-500 duration-200 cursor-pointer'>{text}</li>
        ))}
      </div>
      <a className='text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400'>
        Download CV
      </a>
      </div>
      <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
        <div className='text-xl font-bold flex items-center gap-2'>
            <span className='text-black'>
                Tim
            </span>
            <span className='text-yellow-500'>Mahoney</span>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div onClick={() => setMenu(!menu)}>
                {menu ? (<IoClose size={30} className='text-black'/>) : (<IoMenu size={30} className='text-black'/>)}
            </div>
        </div>
      </div>

        {menu && (
            <div className='md:hidden bg-yellow-50 py-6 justify-center items-center text-black flex flex-col list-none shadow-sm'>
           <li 
           key={id}
        className='hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12'>
            {text}
        </li> 
        ))}
    </div>
  )
}

export default Navbar;
