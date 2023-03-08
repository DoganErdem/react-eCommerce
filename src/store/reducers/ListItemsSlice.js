import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    list: [],
    categoryList:[]
}


const ListItemsSlice = createSlice({

    name: 'listItems',

    initialState,

    reducers:{
        addList(state,action){
            const quantity = 1
            const newArray = action.payload.map((item) => item ={...item,quantity})
           
            return{
                ...state, 
                list: newArray
            }
        },

        changeCategory(state,action){
            const newList = [...state.list].filter((item) => item.category === action.payload)

            return{
                ...state, 
                categoryList: newList
            }   
        }
    }
})

export const { addList,changeCategory } = ListItemsSlice.actions;
export default ListItemsSlice;