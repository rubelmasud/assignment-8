import React from 'react';

const SideCart = (props) => {
    const time = props.time
    const bookMark = props.bookMark
    const quantity = props.quantity


    return (
        <div className=' sticky top-0'>
            <div className="total-min-container my-4 bg-gray-50 h-12 rounded text-center">
                <h4 className='text-2xl font-semibold text-blue-700'>Spent time on read:{time}min</h4>
            </div>
            <div className="total-min-container rounded px-4">
                <div className="blogs-quantity bg-gray-50">
                    <h4 className='text-2xl font-semibold'>Bookmarked Blogs :{quantity} </h4>
                </div>
                <div className="title-cart p-3 rounded text-xl font-semibold">
                    {bookMark}
                </div>
            </div>
        </div>
    );
};

export default SideCart;