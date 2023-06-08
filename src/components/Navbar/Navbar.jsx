import React, { useState, useRef } from 'react'


import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import Cart from "./../Cart/Cart"
import "./Navbar.scss"
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import SignLogin from '../SignLogin/SignLogin';
import CloseIcon from '@mui/icons-material/Close';

 const Navbar = () => {


const navRef= useRef()   
const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
}

const products = useSelector((state) => state.cart.products)

const [openSign, setOpenSign] = useState(false)
const [open,setOpen] = useState(false)








  return (
    <div className='navbar'>
<div className="wrapper">


<div className="left"  >

<Link className="link" to="/">clothystore.com</Link>

</div>



<div className='center' ref={navRef}>

<div className='item'>
    <Link className="link" to="/products/1">Woman</Link>
</div>
<div className='item'>
    <Link className="link" to="/products/2">Men</Link>
</div>
<div className='item'>
    <Link className="link" to="/products/3">Children</Link>  
</div>
<div className='item'>
    <Link  className="link" to="/">Homepage</Link>
</div>
<div className='item'>
    <Link className="link" to="/about">About</Link>
</div>
<div className='item'>
    <Link className="link" to="/contact">Contact</Link>
</div>
<div className='item'>
    <Link className="link" to="/stores">Stores</Link>
</div>
<button className="nav-btn nav-close-btn" onClick={showNavbar}>
<CloseIcon />
    </button>
</div>



<div className='right' > 
<button className="nav-btn" onClick={showNavbar}>
<MenuIcon />
    </button>

<div className="icons">
 
    <div className="cartIcon" {...(!open ? {onClick: () => {setOpenSign(!openSign)}} : {})}>
    <PersonOutlineIcon />
    </div>
    <div className="cartIcon" {...(!openSign ? {onClick: ()=> {setOpen(!open)}}:{})}>
        <ShoppingCartIcon />
        <span>{products.length}</span>
    </div>
</div>
</div>

</div>




{openSign && <SignLogin /> }
{open && <Cart /> }
</div>

  )
}

export default Navbar