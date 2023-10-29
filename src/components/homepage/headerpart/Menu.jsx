import React from 'react'
import { FaList } from 'react-icons/fa6'
const Menu = () => {
  return (
    <div className='group relative ml-3 flex items-center justify-center px-2 py-2 rounded-lg bg-white/20 text-white hover:cursor-pointer'>
      <FaList className='text-white text-lg mr-1'/>
      <span className='text-white text-base'>Menu</span>
      <div className='absolute top-full left-0 bg-white w-40 hidden group-hover:block shadow-2xl'>
        <ul>
          <li className='text-black py-3 px-4 border-b-2 hover:shadow-inner hover:bg-current/25'>
            <a href='#'>Home</a>
          </li>
          <li className='text-black py-3 px-4 border-b-2 hover:shadow-inner hover:bg-current/25'>
            <a href='#'>About</a>
          </li>
          <li className='text-black py-3 px-4 border-b-2 hover:shadow-inner hover:bg-current/25'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu