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
            return{
                ...state, list: action.payload
            }
        },

        changeCategory(state,action){
            const newList = [...state.list].filter((item) => item.category === action.payload)
            console.log(newList);
            return{
                ...state, categoryList: newList
            }
            
        }
   
    }


})

export const { addList,changeCategory } = ListItemsSlice.actions


export default ListItemsSlice;