import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cartList: [],
    selectedItem: {},
    showCart: false,
}


const cartItemSlice = createSlice({
    name: 'cartList',

    initialState,

    reducers:{
        addCart(state,action){
            return{
                ...state, 
                cartList : [action.payload]
            }
        },

        deleteCart(state,action){
                return{
                    ...state,
                    cartList: [...state.cartList].filter((item) => item.id !== action.payload)
                }      
        },

        selectItem(state, action){
            return{
                ...state, 
                selectedItem : state.selectedItem.find((item) => item.id === action.payload)
            }
        },

        showCart(state, action){
            return{
                ...state,
                showCart: !state.showCart
            }
        }
    }
})

export const { addCart, deleteCart,selectItem,showCart} = cartItemSlice.actions

export default cartItemSlice;