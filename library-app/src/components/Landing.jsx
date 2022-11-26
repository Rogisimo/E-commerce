import React from 'react'
import booksImg from '../assets/Undraw_Books.svg'

function Landing() {
  return (
    <section id="landing">
        <header>
        <div className="header-container">
                <div className="header-description">
                    <h1 className="purple">Lithuania's most awarded online library platform</h1>
                    <h2>Find your dream book wih <span className="purple">Library</span></h2>
                    <a href="#features">
                        <button className="btn">Browse Books</button>
                    </a>
                    <figure className="header-img-wrapper">
                        <img src={booksImg} alt=""/>
                    </figure>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Landing