import React from 'react'

function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row-column">
                <h2 className='section-title'>
                    Explore more <span className="purple"> Books</span>
                </h2>
                <a href="/books">
                    <button className='btn'>
                    Explore books
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Explore