import React from 'react'
import { FaRectangleList } from "react-icons/fa6";

const Category = () => {

  const Categories = [
    {
      cId: 1,
      cName: 'Laptop'
    },
    {
      cId: 2,
      cName: 'Diện thoại'
    },
    {
      cId: 3,
      cName: 'TV'
    }
  ]

  return (
    <div className='relative group flex items-center justify-center px-2 py-2 rounded-lg bg-white/20 text-white hover:cursor-pointer'>
      <FaRectangleList className='mr-1'/>
      Category
      <div>
        <ul className='absolute top-full left-0 bg-white w-40 hidden group-hover:block shadow-2xl'>
          {
            Categories.map((category) => (
              <li key={category.cId}
                className='text-black py-3 px-4 border-b-2 hover:shadow-inner hover:bg-current/25'
              >
                {category.cName} 
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Category