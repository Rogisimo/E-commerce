import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Library.svg"

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row-column">
                <a href="/">
                    <figure className='footer-logo'>
                        <img src={Logo} alt="" className='footer-logo-img' />
                    </figure>
                </a>
                <div className="footer-list">
                    <Link to="/" className='footer-link'>Home</Link>
                    <Link to="/" className='footer-link no-cursor'>About</Link>
                    <Link to="/books" className='footer-link'>Books</Link>
                    <Link to="/cart" className='footer-link'>Cart</Link>
                </div>
                <div className="footer-copyright">
                    Copyright &copy; 2022 Library
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer