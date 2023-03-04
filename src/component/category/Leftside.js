import React from 'react';
import "./leftside.css";
import { useDispatch,useSelector } from 'react-redux';
import { changeCategory } from '../../store/reducers/ListItemsSlice';

const Leftside = () => {

    const distpach = useDispatch();
    const categoryList = (item) => {
        distpach(changeCategory(item))
    }


    return (
        <div className='leftside shadow-2xl'>
            <span className='flex relative justify-start font-bold text-lg inset-x-1'>Categories:</span>
            <div className='category' type='button'  onClick={(e) => categoryList("men's clothing") }>Mens</div>
            <div className='category' onClick={(e) => categoryList("women's clothing") }>Womens</div>
            <div className='category' onClick={(e) => categoryList("electronics") }>Electronics</div>
            <div className='category' onClick={(e) => categoryList("jewelery") }>Jewelery</div>
            
        </div>
    );
}

export default Leftside;