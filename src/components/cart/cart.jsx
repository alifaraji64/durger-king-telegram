import React from 'react';
import './cart.css'
import Button from '../button/button';
const Cart = ({cartItems, onCheckout}) => {
    console.log(cartItems);
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    return (
        <div className='cart_container'>
            {cartItems.length === 0 ? 'no tiems in cart' : ''}
            <br/>
            <span className=''>TotalPrice: ${totalPrice.toFixed(2)}</span>
            <Button
            title={`${cartItems.length === 0 ? 'Order':'Checkout'}`}
            type={'checkout'}
            disable={cartItems.length === 0 ? true:false}
            onClick={onCheckout}
            ></Button>
        </div>
    );
}

export default Cart;
