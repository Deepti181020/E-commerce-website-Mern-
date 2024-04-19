import React from 'react'
import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar flex justify-around p-10 shadow-xl bg-slate-300 '>
       <div className="nav-logo flex items-center gap-10">
            <img src={logo} alt="Error" />
            <p className='text-4xl font-semibold'>SHOPAHOLIC</p>
        </div> 
        <ul className="nav-menu flex items-center list-none text-base font-medium">
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Home 
            < hr id="hr1"/>
            </li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Shop</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Men</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Women</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Kids</li>  
        </ul>

        <div className="nav-login-cart flex items-center gap-32">
            <button className='w-36 h-14 outline-none text-slate-800  text-base font-medium  hover:bg-slate-400'>Login</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
