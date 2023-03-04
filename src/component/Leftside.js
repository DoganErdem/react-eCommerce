import React from 'react';
import "./leftside.css";

function Leftside() {
    return (
        <div className='leftside'>
            <span className='flex relative justify-start font-bold text-lg inset-x-1'>Categories:</span>
            <div className='category'>Mens</div>
            <div className='category'>Womens</div>
            <div className='category'>Electronics</div>
            <div className='category'>Kids</div>
            
        </div>
    );
}

export default Leftside;