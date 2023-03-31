import React from 'react';

const SideCart = (props) => {
    const time = props.time


    return (
        <div className=' sticky top-0'>
            <div className="total-min-container my-4 bg-gray-50 h-12 rounded text-center">
                <h4 className='text-2xl font-semibold text-blue-700'>Spent time on read:{time}min</h4>
            </div>
            <div className="total-min-container bg-gray-50 rounded px-4">
                <div className="blogs-quantity ">
                    <h4 className='text-2xl font-semibold'>Bookmarked Blogs : </h4>
                </div>
                <div className="title-cart m-6 p-3 rounded bg-white">
                    grjnytsyye
                </div>


            </div>
        </div>
    );
};

export default SideCart;