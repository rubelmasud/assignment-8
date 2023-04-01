import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import SideCart from '../sideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';


const Main = () => {

    const [blogs, setBlogs] = useState([])
    const [time, setTime] = useState(0)
    const [bookMark, setBookMark] = useState([])
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const addMinHandler = (min) => {
        const sum = parseFloat(min) + parseFloat(time)
        setTime(sum)
    }

    const addBookMarkHandler = (title, id) => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity)

        const newBookmark = [...bookMark, title, <br />]
        setBookMark(newBookmark)
    }



    return (
        <div className='w-11/12 mx-auto lg:flex my-12 gap-3'>
            <div className="cart-details lg:w-9/12 ">
                {
                    blogs.map(blog => <SingleCart
                        blog={blog}
                        key={blog.id}
                        addMinHandler={addMinHandler}
                        addBookMarkHandler={addBookMarkHandler}
                    ></SingleCart>)
                }
            </div>
            <div className="add-cart lg:w-3/12 bg-slate-100 ">
                <SideCart
                    time={time}
                    bookMark={bookMark}
                    quantity={quantity}
                ></SideCart>
            </div>
        </div>
    );
};

export default Main;