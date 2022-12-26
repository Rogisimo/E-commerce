import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../UI/Rating'
import Price from '../UI/Price'
import Book from '../UI/Book'

function BooksInfo({books, addToCart, cart}) {
    const {id} = useParams();
    const book = books.find(book => +book.id === +id)

    function addBookToCart(book){
        addToCart(book);
    }

    function bookExistsOnCart(){
         return cart.find(book => book.id ===+id);

    }

  return (
   <div className="books-body">
    <main id="books-main">
        <div className="books-container">
            <div className="row">
                <div className="book-selected-top">
                    <Link to="/books" className="book-link">
                        <FontAwesomeIcon icon="arrow-left"/>
                    </Link>
                    <Link to={"/books"} className="book-link">
                        <h2 className="book-selected-title-top">Books</h2>
                    </Link>
                    </div>
                    <div className="book-selected">
                        <figure className="book-selected-figure">
                            <img src={book.url} alt="" className="book-selected-img" />
                        </figure>
                        <div className="book-selected-description">
                            <h2 className="book-selected-title">{book.title}</h2>
                            <Rating rating={book.rating}/>
                            <div className="book-selected-price">
                            <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                            </div>
                            <div className="book-summary">
                            <h3 className="book-summary-title">Summary</h3>
                            <p className="book-summary-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.
                            </p>
                            <p className="book-summary-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.
                            </p>
                        </div>
                        {bookExistsOnCart() ? (
                        <Link to={`/cart`}>
                        <button className="btn">Checkout</button>
                        </Link>
                        ) : (
                        <button className="btn" onClick={() => addBookToCart(book)}>
                            Add to cart
                            </button>
                            )}
                        </div>
                    </div>
            </div>
        </div>
        <div className="books-container">
            <div className="row">
                <div className="book-selected-top">
                    <h2 className="book-selected-title-top">
                        Reccomended Books
                    </h2>
                </div>
                <div className="books">
                {
                    books
                    .filter((book) => book.rating === 5 && +book.id!== +id)
                    .slice(0,4)
                    .map(book => <Book book={book} key={book.id}/>)
                }
                </div>
            </div>
        </div>
    </main>
   </div>
  )
}

export default BooksInfo