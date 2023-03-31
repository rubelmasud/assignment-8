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
            <div className="cart-details lg:w-9/12 bg-yellow-400">
                {
                    blogs.map(blog => <SingleCart blog={blog}></SingleCart>)
                }
            </div>
            <div className="add-cart lg:w-3/12 bg-red-200">
                w55jye5wy
            </div>
        </div>
    );
};

export default Main;