import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from "../../store/reducers/CartListSlice";

function Cart() {

    const dispatch = useDispatch();

    const showCartList = () => {
        dispatch(showCart());
    }

    const show = useSelector(state => state.cartList.showCart)

    return (
        <div className='flex flex-row relative z-10 box-border '>
            <div className='flex w-12 h-12 justify-center items-center rounded-l bg-slate-800 hover:cursor-pointer' onClick={() => showCartList()}>
                <TiShoppingCart size={20} color='orange' />
            </div>
            {show && <div className='flex flex-col w-96 h-screen bg-slate-800 overflow-x-auto transition-all ease-out duration-500' >
                <div className='flex flex-row mt-16 h-14 justify-center items-center '>
                    <TiShoppingCart size={45} color='white' />
                    <div className='flex bottom-0 rounded-full justify-center items-center 
                                    text-xs font-semibold font-mono bg-amber-500 w-min px-1'>9</div>
                </div>
                <div className=''></div>
            </div>}
        </div>
    );
}

export default Cart;