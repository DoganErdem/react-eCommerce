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
                ...state, cartList : [action.payload]}
            
        },

        deleteCart(state,action){
                return{
                    ...state,
                    cartList: [...state.cartList].filter((item) => item.id !== action.payload)
                }
            
            
            
        },

        selectItem(state, action){
            return{
                ...state, selectedItem : state.selectedItem.find((item) => item.id === action.payload)
            }
            
        }
    }
})

export const { addCart, deleteCart,selectItem} = cartItemSlice.actions

export default cartItemSlice;