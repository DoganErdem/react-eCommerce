import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
    return (
        <div className='flex flex-row w-96 h-screen box-border bg-slate-800'>
            <div className='flex w-10 h-10 justify-center items-center'>
                <FaShoppingCart size={16} color='orange' />
            </div>
            <div className='flex w-full h-36 justify-center items-center'>
                <FaShoppingCart size={16} color='orange' />
            </div>
        </div>
    );
}

export default Cart;