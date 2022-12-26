import React from 'react'

function Cart() {
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
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart