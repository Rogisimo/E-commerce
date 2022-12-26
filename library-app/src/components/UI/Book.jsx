import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from "./Price"
function Book({ book }) {
    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book-img-wrapper">
                    <img src={book.url} alt="" className='book-img' />
                </figure>
            </Link>
            <div className="book-title">
                <Link to={`/books/${book.id}`} className='book-title-link'>
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
        </div>
    )
}

export default Book