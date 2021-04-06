import React from 'react'
import {
   Link
  } from "react-router-dom";
const Nav = () => {
    return (
        <div className="menu_wrapper">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div  className="menu">
                <Link style={{ textDecoration: 'none',fontWeight:"600" }} to="/">About</Link>
                <Link style={{ textDecoration: 'none',fontWeight:"600"  }} to="/products">Products</Link>
                <Link style={{ textDecoration: 'none',fontWeight:"600"  }} to="/contact">Contact</Link>
                <Link style={{ textDecoration: 'none' ,fontWeight:"600"}} to="/cart">Cart</Link>
            </div>
            
        </div>
    )
}

export default Nav
