import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from "../assets/Library.svg"

function Nav() {
    function openMenu(){
        document.body.classList += " menu-open"
    }
    function closeMenu(){
        document.body.classList.remove("menu-open")
    }
  return (
    <nav>
        <div className="nav-container">
            <a href="/">
                <img src={logo} alt="" className='logo' />
            </a>
            <ul className="nav-links">
                <li className="nav-list">
                    <a href="/" className='nav-link'>
                        Home
                    </a>
                </li>
                <li className="nav-list">
                    <a href="/" className='nav-link'>
                        Books
                    </a>
                </li>
                <button onClick={openMenu} className='btn-menu'>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className="nav-icon">
                    <a href="/cart" className='nav-link'>
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </a>
                    <span className="cart-length">2</span>
                </li>
            </ul>
            <div className="menu-backdrop">
                <button onClick={closeMenu} className="btn-menu btn-menu-close">
                    <FontAwesomeIcon icon="times"/>
                </button>
                <ul className="menu-links">
                    <li className="menu-list">
                        <a href="/" className='menu-link'>
                            Home
                        </a>
                    </li>
                    <li className="menu-list">
                        <a href="/books" className='menu-link'>
                            Books
                        </a>
                    </li>
                    <li className="menu-list">
                        <a href="/cart" className='menu-link'>
                            Cart
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav