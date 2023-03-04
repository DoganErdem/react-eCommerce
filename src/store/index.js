import {  configureStore } from "@reduxjs/toolkit";

import ListItemsSlice from "./reducers/ListItemsSlice";
import cartItemSlice from "./reducers/CartListSlice";


const store = configureStore({
    reducer:{
        list: ListItemsSlice.reducer,
        cartList: cartItemSlice.reducer
    }
})

export default store;


