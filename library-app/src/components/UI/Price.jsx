import React from 'react'

function Price({originalPrice, salePrice}) {
  return (
        <div className="book-price">
                {salePrice ?(
                        <><span className="book-price-normal">
                            ${originalPrice.toFixed(2)}
                        </span>
                            ${salePrice.toFixed(2)}</>
                ) : (
                    <>${originalPrice.toFixed(2)}</>
                    )
                }
            </div>
  )
}

export default Price