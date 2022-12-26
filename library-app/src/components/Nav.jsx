import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from "../assets/Library.svg"
import { Link } from 'react-router-dom'

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
            <Link to="/">
                <img src={logo} alt="" className='logo' />
            </Link>
            <ul className="nav-links">
                <li className="nav-list">
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className="nav-list">
                    <Link to="/books" className='nav-link'>
                        Books
                    </Link>
                </li>
                <button onClick={openMenu} className='btn-menu'>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className="nav-icon">
                    <Link to="/cart" className='nav-link'>
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </Link>
                    <span className="cart-length">2</span>
                </li>
            </ul>
            <div className="menu-backdrop">
                <button onClick={closeMenu} className="btn-menu btn-menu-close">
                    <FontAwesomeIcon icon="times"/>
                </button>
                <ul className="menu-links">
                    <li className="menu-list">
                        <Link to="/" className='menu-link'>
                            Home
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to="/books" className='menu-link'>
                            Books
                        </Link>
                    </li>
                    <li className="menu-list">
                        <Link to="/cart" className='menu-link'>
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav