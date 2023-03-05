import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from "../../store/reducers/CartListSlice";
import { BiLira } from 'react-icons/bi';

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

            {show &&
                <div className='flex flex-col w-96 h-screen box-border bg-slate-800 transition-all ease-out duration-500' >
                    <div className='flex  mt-16 h-12 justify-center  '>
                        <TiShoppingCart size={45} color='white' />
                        <span className='flex relative right-7 bottom-1 rounded-full justify-center items-center 
                                    text-xs font-semibold font-mono bg-amber-500 w-min h-min px-1'>9</span>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <hr className='border-slate-600'></hr>
                        <div className='flex flex-row w-full h-30 mt-1 '>
                            <div className='flex w-16 h-20 ml-3'>
                                <img className='flex w-full h-full object-contain'></img>
                            </div>
                            <div className='flex flex-col flex-1 justify-around h-20 ml-1 gap-2'>
                                <div className='flex text-white'>title asdsa sasc</div>
                                <div className='flex text-slate-500'>Quantity: </div>
                            </div>
                            <div className='flex flex-col w-14 h-20 mr-3 gap-1'>
                                <button className='flex text-white justify-end hover:scale-110 hover:duration-150'> X </button>
                                <div className='flex text-lime-500 justify-center items-center'><BiLira /> 14.00 </div>
                                <div className='flex bg-black flex-row w-full h-6 '>
                                    <button className='flex w-1/2 text-white justify-center items-center hover:bg-slate-900'>-</button>
                                    <button className='flex w-1/2 right-0 text-white justify-center items-center hover:bg-slate-900'>+</button>
                                 </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className='flex flex-col fixed items-center w-96 box-border bottom-0 h-48 border-t-2 border-black'>
                        <div className='flex flex-row justify-between items-center w-11/12  h-24'>
                            <div className='text-lg text-slate-400'>SUBTOTAL</div>
                            <div className='flex text-xl font-semibold text-lime-500 items-center'><BiLira />15,15</div>
                        </div>
                        <button className='flex justify-center h-12 w-11/12 items-center text-white text-lg bg-slate-700 
                                        hover:bg-slate-900 hover:duration-150 '>CHECKOUT</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;