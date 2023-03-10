import React from 'react';
import { BiLira } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addCart, selectItem, showCart } from '../../../store/reducers/CartListSlice';

function FeedList({ item }) {

    const dispatch = useDispatch();

    const addCartList = () => {
        dispatch(addCart(item));
        dispatch(selectItem(item))
        dispatch(showCart(true))
    }

    return (
        <div className='flex flex-col relative mt-5 mr-3 w-56 h-96 bg-slate-100 mob:w-36 mob:h-68'>
            <div className='flex w-48 h-48 mob:w-32 mob:h-32 justify-center items-center m-2 hover:scale-105 hover:duration-500'>
                <img src={item.image} alt='' className='flex w-full h-full object-contain '></img>
            </div>
            <hr className='border-slate-400 mt-1'></hr>
            <div className='flex h-20 mob:h-36 relative inset-x-2 justify-center font-semibold items-center w-11/12 text-sm text-center'>{item.title}</div>
            <div className='flex flex-row gap-1 justify-center items-center text-center'>
                <BiLira size={18} />
                <div className='flex justify-center items-center text-center font-bold text-xl'>{item.price}</div>
            </div>
            <button className='flex absolute w-full bg-slate-500 border-none hover:bg-orange-400 hover:duration-200 border-black 
                                border-2 rounded text-white font-semibold border-collapse bottom-0 h-8 justify-center items-center'
                onClick={() => addCartList()} >ADD CART</button>
        </div>
    );
}

export default FeedList;