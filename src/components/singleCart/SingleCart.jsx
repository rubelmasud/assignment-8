import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCart = (props) => {

    const { title, coverUrl, parsonName, parsonImg, min, date } = props.blog
    const addMinHandler = props.addMinHandler
    const addBookMarkHandler = props.addBookMarkHandler




    return (
        <div className=' cart-section border px-6 my-10 rounded bg-gray-50'>
            <img className='m-6 rounded-lg mx-auto ' src={coverUrl} alt="" />
            <div className="cart-info ">
                <div className="author-info flex justify-between">
                    <div className="author-img-name flex items-center">
                        <article className='w-2/12 '>
                            <img className='lg:h-16 lg:w-full w-12/12 rounded-full' src={parsonImg} alt="" />
                        </article>
                        <article className='px-2'>
                            <h5 className='font-semibold mb-2'>{parsonName}</h5>
                            <p className='text-gray-500'>{date} <span className='font-semibold'>(10 Day age)</span></p>
                        </article>
                    </div>
                    <div className="blog-min-time">
                        <p className='font-semibold'>
                            {min} min read
                            <FontAwesomeIcon onClick={() => addBookMarkHandler(title)} className='pl-2' icon={faBookmark} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="title lg:w-9/12 my-4">
                <h3 className='text-4xl font-sans font-semibold'>{title}</h3>
            </div>
            <p className='text-gray-500'>#beginners #programming</p>
            <button onClick={() => addMinHandler(min)} className='text-blue-400 underline mb-10 mt-5'>Mark as read</button>
        </div>
    );
};

export default SingleCart;