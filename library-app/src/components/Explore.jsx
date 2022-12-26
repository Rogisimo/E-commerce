import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row-column">
                <h2 className='section-title'>
                    Explore more <span className="purple"> Books</span>
                </h2>
                <Link to="/books">
                    <button className='btn'>
                    Explore books
                    </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Explore