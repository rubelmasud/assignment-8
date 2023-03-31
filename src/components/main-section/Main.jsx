import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';

const Main = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto lg:flex my-12 gap-3'>
            <div className="cart-details lg:w-9/12 ">
                {
                    blogs.map(blog => <SingleCart blog={blog}></SingleCart>)
                }
            </div>
            <div className="add-cart lg:w-3/12 bg-gray-50 ">
                <div className="total-min-container my-4 bg-gray-50 h-12 rounded text-center">
                    <h4 className='text-2xl font-semibold text-blue-700'>Spent time on read:min</h4>
                </div>
                <div className="total-min-container bg-gray-50 rounded px-4">
                    <div className="blogs-quantity ">
                        <h4 className='text-2xl font-semibold'>Bookmarked Blogs : </h4>
                    </div>
                    <div className="title-cart m-6 p-3 rounded bg-white">
                        jteyje6
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;