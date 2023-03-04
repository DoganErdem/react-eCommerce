import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
}


const ListItemsSlice = createSlice({

    name: 'listItems',

    initialState,

    reducers:{
        addList(state,action){
            return{
                list: action.payload
            }
        }
   
    }


})

export const { addList } = ListItemsSlice.actions


export default ListItemsSlice;