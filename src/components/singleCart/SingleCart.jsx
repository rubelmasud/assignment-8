import React from 'react';

const SingleCart = (props) => {
    console.log(props.blog);
    const { title, coverUrl, parsonName, parsonImg, min, date } = props.blog
    return (
        <div className='border'>
            <img className='m-6 rounded-lg mx-auto' src={coverUrl} alt="" />
            <div className="cart-info "></div>

        </div>
    );
};

export default SingleCart;