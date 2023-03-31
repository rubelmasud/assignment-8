import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import SideCart from '../sideCart/SideCart';

const Main = () => {

    const [blogs, setBlogs] = useState([])
    const [time, setTime] = useState(0)

    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    const addMinHandler = (min) => {
        const previesMin = parseFloat(min) + parseFloat(time)
        setTime(previesMin)
        console.log(previesMin);
    }


    return (
        <div className='w-11/12 mx-auto lg:flex my-12 gap-3'>
            <div className="cart-details lg:w-9/12 ">
                {
                    blogs.map(blog => <SingleCart
                        blog={blog}
                        key={blog.id}
                        addMinHandler={addMinHandler}
                    ></SingleCart>)
                }
            </div>
            <div className="add-cart lg:w-3/12 bg-gray-50 ">
                <SideCart time={time}></SideCart>
            </div>
        </div>
    );
};

export default Main;