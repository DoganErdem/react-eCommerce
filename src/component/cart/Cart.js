import React, { useEffect,useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from "../../store/reducers/CartListSlice";
import CartList from './CartList';
import { BiLira } from 'react-icons/bi';


const Cart = () => {

    const [totalPrice, setTotalPrice] =  useState(0);

    const dispatch = useDispatch();
    const show = useSelector(state => state.cartList.showCart);
    const cartList = useSelector(state => state.cartList.cartList);

    const showCartList = () => {
        dispatch(showCart());
    };

    
    
    useEffect(() =>{
        let sums =0;
        for(let i = 0; i<cartList.length; i++){
            sums += (cartList[i].price)*(cartList[i].quantity)
        }
        setTotalPrice(sums.toFixed(2)); 
    }, [cartList])
    

    return (
        <div className='flex flex-row fixed right-0 box-border mob:top-0  '>
            <div className='flex w-12 h-12  justify-center items-center rounded-l bg-slate-800 hover:cursor-pointer' onClick={() => showCartList()}>
                <TiShoppingCart size={20} color='orange' />
            </div>


            <div className={`flex flex-col ${show ? `w-96` : "w-0" } mob:${show ? `w-72` : "w-0" }  duration-300 h-screen box-border bg-slate-800 `} >
                <div className='flex  mt-16 h-12 justify-center  '>
                    <TiShoppingCart size={45} color='white' />
                    {show && <span className='flex relative right-7 bottom-1 rounded-full justify-center items-center 
                                    text-xs font-semibold font-mono bg-amber-500 w-min h-min px-1'>{cartList.length}</span>}
                </div>

                <div className='flex flex-col overflow-y-auto scrollbar-hide h-3/5'>
                    {cartList.map((item) =>{
                        return(
                        <CartList key={item.id} item={item} />
                        )
                    })}   
                </div>

                <div className='flex flex-col fixed items-center w-96 mob:w-72 box-border bottom-0 h-48 border-t-2 bg-slate-800 border-black'>
                    <div className='flex flex-row justify-between items-center w-11/12  h-24'>
                        <div className='text-lg text-slate-400'>SUBTOTAL</div>
                        <div className='flex text-xl font-semibold text-lime-500 items-center'><BiLira />{totalPrice}</div>
                    </div>
                    <button className='flex justify-center h-12 w-11/12 items-center text-white text-lg bg-slate-700 
                                        hover:bg-slate-900 hover:duration-150 ' onClick={() => alert("Shopping is success")}>CHECKOUT</button>
                </div>
            </div>

        </div>
    );
}

export default Cart;