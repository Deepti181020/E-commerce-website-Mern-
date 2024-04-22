import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  //Create a usestate for the nav menu
  const [menu,setMenu]=useState("home");

  return (
    <div className='navbar flex justify-around p-10 shadow-xl bg-slate-300 '>
       <div className="nav-logo flex items-center gap-10">
            <img src={logo} alt="Error" />
            <p className='text-4xl font-semibold'>SHOPAHOLIC</p>
        </div> 
        <ul className="nav-menu flex items-center list-none text-base font-medium">
            <li onClick={()=>setMenu("home")} className='menu-list flex flex-col items-center justify-center gap-1'>
            <Link to="/home">Home {menu==="home"?< hr id="hr1"/> : <></>}</Link>
            </li>
            <li onClick={()=>{setMenu("men")}} className='menu-list flex flex-col items-center justify-center gap-1'><Link to="/men">Men {menu==="men"?< hr id="hr2"/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("women")}} className='menu-list flex flex-col items-center justify-center gap-1'><Link to="/women">Women {menu==="women"?< hr id="hr3"/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("kids")}} className='menu-list flex flex-col items-center justify-center gap-1'><Link to="/kids">Kids {menu==="kids"?< hr id="hr4"/> : <></>}</Link></li>
            <li onClick={()=>{setMenu("contact")}} className='menu-list flex flex-col items-center justify-center gap-1'><Link to="/contact">Contact Us {menu==="contact"?< hr id="hr5"/> : <></>}</Link></li>  
        </ul>

        <div className="nav-login-cart flex items-center gap-14">
          <Link to="/login">
            <button className='w-36 h-14 outline-none text-slate-800  text-base font-medium  hover:bg-slate-400'>Login</button>
          </Link>

           <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count flex items-center justify-center w-5 h-5 -mt-8 -ml-14 text-sm rounded-lg bg-rose-700 text-white">0</div>
        </div>
    </div>
  )
}

export default Navbar
