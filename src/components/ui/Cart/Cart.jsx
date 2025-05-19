import React from 'react'
import './Cart.css'

const Cart = ( {onCartClose} ) => {
  return (
    <div className='myCartContainer'>

        <button className="closeCart" onClick={()=> onCartClose()}>
            closeMe
        </button>
        this would be our cart here displayed nicely

        <button>Checkout</button>
    </div>
  )
}

export default Cart
