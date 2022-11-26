import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Book({ book }) {
    return (
        <div className="book">
            <a href="">
                <figure className="book-img-wrapper">
                    <img src={book.url} alt="" className='book-img' />
                </figure>
            </a>
            <div className="book-title">
                <a href="/" className='book-title-link'>
                    {book.title}
                </a>
            </div>
            <div className="book-ratings">
                {
                    new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
                }
                {
                    !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"/>
                }
            </div>
            <div className="book-price">
                {book.salePrice ?(
                        <><span className="book-price-normal">
                            ${book.originalPrice.toFixed(2)}
                        </span>
                            ${book.salePrice.toFixed(2)}</>
                ) : (
                    <>${book.originalPrice.toFixed(2)}</>
                    )
                }
            </div>
        </div>
    )
}

export default Book