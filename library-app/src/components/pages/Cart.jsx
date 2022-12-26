import React from 'react'
import { Link } from 'react-router-dom';
import EmptyCart from "../../assets/empty_cart.svg"

function Cart({cart, changeQuantity, removeItem}) {
    const total = () =>{
        let tot = 0;
        cart.forEach((item) => {
            tot += +((item.salePrice || item.originalPrice).toFixed(2) * item.quantity).toFixed(2)
        });
        return tot
    }
  return (
    <div className="books-body">
        <main id="books-main">
            <div className="books-container">
                <div className="row">
                    <div className="book-selected-top">
                        <h2 className="cart-title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart-header">
                            <div className="cart-book">Book</div>
                            <div className="cart-quantity">Quantity</div>
                            <div className="cart-total">Price</div>
                        </div>
                        <div className="cart-body">
                            {
                                cart.map(book =>{
                                    return(
                                        <div className="cart-item">
                                <div className="cart-book">
                                    <img src={book.url} className='cart-book-img' alt="" />
                                    <div className="cart-book-info">
                                        <span className="cart-book-title">
                                            {book.title}
                                        </span>
                                        <div className="cart-book-price">
                                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                                        </div>
                                        <button className='cart-book-remove' onClick={() => removeItem(book)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-quantity">
                                    <input type="number" value={book.quantity} min={0} max={99} onChange={(e) => changeQuantity(book,e.target.value)} className="cart-input"/>
                                </div>
                                <div className="cart-total">
                                    ${
                                        ((book.salePrice || book.originalPrice).toFixed(2) * book.quantity).toFixed(2)
                                    }
                                </div>
                            </div>
                                    )
                                })
                            }
                        </div>
                        {
                            cart.length === 0 && (<div className="cart-empty">
                            <img src={EmptyCart} alt="" className="cart-empty-img" />
                            <h2>You don't have any books in your cart!</h2>
                            <Link to="/books">
                            <button className="btn">Browse books</button>
                            </Link>
                        </div>)
                        }
                    </div>
                    {cart.length > 0 && (
                    <div className="total">
                        <div className="total-item total-sub-total">
                            <span>Subtotal</span>
                            <span>${(total() * 0.9).toFixed(2)}</span>
                        </div>
                        <div className="total-item total-tax">
                            <span>Tax</span>
                            <span>${(total() * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="total-item total-price">
                            <span>Total</span>
                            <span>${total()}</span>
                        </div>
                        <button onClick={() => alert("Haven't got around to doing this :(")} className="btn btn-checkout no-cursor">Proceed to checkout</button>
                    </div>
                    )}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart