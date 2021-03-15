import React, { useState } from 'react'
import './Hedaer.css';
import Logo from "../../Image/logo-header.webp"
function Header() {
    const [MainHeaderWraper, setNavbar] = useState(false)

    const ChangBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", ChangBackground)
    return (
        <div className={MainHeaderWraper ? "MainHeaderWraper ColorHeader" : "MainHeaderWraper"}>
            <ul>
                <li className="logo">Used<img src={Logo} />  </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Track</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Policies</a></li>
            </ul>
        </div>
    )
}

export default Header
