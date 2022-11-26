import React from 'react'
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
                    <a href="/home" className='footer-link'>Home</a>
                    <a href="/home" className='footer-link no-cursor'>About</a>
                    <a href="/books" className='footer-link'>Books</a>
                    <a href="/cart" className='footer-link'>Cart</a>
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