import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const {cartValue} = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Cart Value: £{cartValue}</span>
        </div>
    )};

export default CartValue;
