import React from 'react'
import './Footer.scss'

 const Footer = () => {
  return (
    <div className="footer">
    <div className="topfooter">
<div className="footeritem">
    <h1>Categories</h1>
    <a href='/products/1'>Women</a>
    <a href='/products/2'>Men</a>
    <a href='/products/3'>Children</a>
    <span>Accessories</span>
    <span>New Arrivals</span>
</div>

<div className="footeritem">
<h1>Links</h1>
    <span>FAQ</span>
    <span>Pages</span>
    <span>Stores</span>
    <span>Compare</span>
    </div>
<div className="footeritem">
    <h1>About</h1>
    <span>
      ClothyStore A small local business that started early 2023 in monterrey mexico, <br/><a href="/about">READ MORE</a>
   
    </span>
</div>
<div className="footeritem"><a href='/contact'>
<h1>Contact</h1>
</a>
    <a href='/contact'>
    Email
    </a>
    <a href='/contact'>
    Telephone
    </a>
    <a href='/contact'>
    Address
    </a>
    
</div>
    </div>
    <div className="bottom">
<div className="left">
    <span className="logo">ClothyStore</span>
    <span className="copyright">
    © Copyright 2023. All Rights Reserved
    </span>
</div>

<div className="right">
    <img src="/img/payment.png"></img>
</div>
   
    </div> 
    </div>
  )
}

export default Footer