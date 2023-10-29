import React from 'react'
import { Logo, Menu, SearchBox, UserInfo } from './headerpart'
import Category from '../category/Category'

const Header = () => {
  return (
    <header className='bg-[#e0062d] sticky top-0 z-10'>
      <nav className='container h-16 flex mx-auto items-center'>
        <Logo/>
        <Category/>
        <Menu/>
        <SearchBox/>
        <UserInfo/>
      </nav>
    </header>
  )
}

export default Header
