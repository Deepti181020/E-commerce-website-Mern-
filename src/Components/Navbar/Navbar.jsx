import React from 'react'
import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar flex justify-around p-4 shadow-xl bg-slate-300 '>
       <div className="nav-logo flex items-center gap-10">
            <img src={logo} alt="Error" />
            <p className='text-4xl font-semibold'>SHOPAHOLIC</p>
        </div> 
        <ul className="nav-menu flex items-center list-none text-base font-medium">
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Home < hr/></li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Shop</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Men</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Women</li>
            <li className='menu-list flex flex-col items-center justify-center gap-1'>Kids</li>  
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
