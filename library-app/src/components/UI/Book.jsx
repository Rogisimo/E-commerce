import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from "./Price"
import { useState } from 'react'
import { useEffect } from 'react'
function Book({ book }) {
    const [img, setImg] = useState();

//6:40
    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            setTimeout(() => {
                    setImg(image)
            }, 300);
        };
    })



    return (
        <div className="book">
            {
                img ? 
                <>
                <Link to={`/books/${book.id}`}>
                <figure className="book-img-wrapper">
                    <img src={img.src} alt="" className='book-img'/>
                </figure>
            </Link>
            <div className="book-title">
                <Link to={`/books/${book.id}`} className='book-title-link'>
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
            </>
            : 
            <>
            <div className="book-img-skeleton"></div>
            <div className="skeleton book-title-skeleton"></div>
            <div className="skeleton book-rating-skeleton"></div>
            <div className="skeleton book-price-skeleton"></div>
            </>
            }
        </div>
    )
}

export default Book