import React, { useEffect, useState } from 'react';
import { BiLira } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteCart, incrementQuantity } from '../../store/reducers/CartListSlice';


const CartList = ({item}) => {

    const [count, setCount] = useState(item.quantity);
    const dispatch = useDispatch();
    
    
    const deleteItem = () => {
        dispatch(deleteCart(item.id))
    };
    
    const incrementCount = () => {
        dispatch(incrementQuantity(item))
        
    };

    const decrementCount = () => {
        if(item.quantity > 1) dispatch(decrementQuantity(item))
    };


    return (
        <div className='flex flex-col mt-5 '>
            <hr className='border-slate-600'></hr>
            <div className='flex flex-row w-full h-30 mt-1 '>
                
                <div className='flex w-16 h-20 ml-3'>
                    <img className='flex w-full h-full object-contain' src={item.image} alt=''></img>
                </div>
               
                <div className='flex flex-col flex-1 justify-around h-20 ml-1 gap-2'>
                    <div className='flex text-white text-xs'>{item.title}</div>
                    <div className='flex text-slate-500'>Quantity: {item.quantity}</div>
                </div>
                
                <div className='flex flex-col w-16 h-20 mr-3 gap-1'>
                    <button className='flex text-black justify-end hover:scale-110 hover:duration-150 hover:text-white' 
                                       onClick={() =>deleteItem()} > X </button>
                    <div className='flex text-lime-500 justify-center items-center'><BiLira /> {item.price.toFixed(2)} </div>
                    <div className='flex bg-black flex-row w-full h-6 '>
                        <button className={`flex w-1/2 text-white justify-center items-center ${item.quantity == 1 ? "bg-slate-900" : "bg-black"} hover:bg-slate-900`}
                                         onClick={() => decrementCount()} >-</button>
                        <button className='flex w-1/2 right-0 text-white justify-center items-center hover:bg-slate-900'
                                           onClick={() => incrementCount()} >+</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartList;