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
            
            if(newItem >= 0){
                newQuantity = state.cartList[newItem].quantity
                newQuantity +=1;
                const newObject = {...state.cartList[newItem], quantity : newQuantity}
                const newCartList = state.cartList.map((item) => (item.id == action.payload.id) ? newObject : item  )
                return {
                    ...state,
                    cartList: newCartList
                }
            }

            if (newItem === -1) {
                return {
                    ...state,
                    cartList: [...state.cartList, action.payload]
                }
            } 
        },

        incrementQuantity(state, action) {
            let quantity = action.payload.quantity
            quantity +=1
            const newObject = {...action.payload, quantity: quantity}
            const newCartList = state.cartList.map((item) => (item.id == action.payload.id) ? newObject : item  )
            return {
                ...state,
                cartList: newCartList
            }
        },

        decrementQuantity(state, action) {
            let quantity = action.payload.quantity
            quantity -=1
            const newObject = {...action.payload, quantity: quantity}
            const newCartList = state.cartList.map((item) => (item.id == action.payload.id) ? newObject : item  )
            return {
                ...state,
                cartList: newCartList
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

export const { addCart, deleteCart, selectItem, showCart,incrementQuantity,decrementQuantity } = cartItemSlice.actions

export default cartItemSlice;