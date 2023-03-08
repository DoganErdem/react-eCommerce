import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartList: [],
    selectedItem: {},
    showCart: false,

}


const cartItemSlice = createSlice({
    name: 'cartList',

    initialState,

    reducers: {
        addCart(state, action) {

            const newItem = state.cartList.findIndex((item) => item.id === action.payload.id) 
            let newQuantity=1
            let aaa={};

            if(newItem >= 0){
                newQuantity = state.cartList[newItem].quantity
                newQuantity +=1;
                aaa = {...state.cartList[newItem], quantity : newQuantity}
            }

            if (newItem === -1) {
                return {
                    ...state,
                    cartList: [...state.cartList, action.payload]
                }
            } 
            else {
                let bbb = state.cartList.filter((item) => item.id !== action.payload.id)
                let newList = [...bbb, aaa]
                return {
                    ...state,
                    cartList: newList
                }
            }
        },

        deleteCart(state, action) {
            return {
                ...state,
                cartList: [...state.cartList].filter((item) => item.id !== action.payload)
            }
        },

        selectItem(state, action) {
            return {
                ...state,
                selectedItem: action.payload
            }
        },

        showCart(state, action) {
            if (action.payload === true) {
                return {
                    ...state,
                    showCart: action.payload
                }
            } else {
                return {
                    ...state,
                    showCart: !state.showCart
                }
            }
        }

    }
})

export const { addCart, deleteCart, selectItem, showCart } = cartItemSlice.actions

export default cartItemSlice;