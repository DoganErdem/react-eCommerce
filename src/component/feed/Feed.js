import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./feed.css";
import { addList } from '../../store/reducers/ListItemsSlice';
import { useDispatch, useSelector } from 'react-redux';
import FeedList from './feedlist/FeedList';



const Feed = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => dispatch(addList(res.data)))
    }, []);

    const list = useSelector(state => state.list.list);

    const categoryList = useSelector(state => state.list.categoryList);

    const listCategory = () => {

        if (categoryList.length === 0) {
            return list
        } else return categoryList
    }


    return (
        <div className='feeder gap-0.5'>
            {listCategory().map((item) => {
                return (
                    <FeedList item={item} key={item.id} />
                )
            })}
        </div>
    );
}

export default Feed;