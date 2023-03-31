import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar pl-12 w-11/12 mx-auto shadow-lg justify-around">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <a href="\home">Home</a>
                            <a href="\blog">Blog</a>
                            <a href="\contact">Contact</a>
                        </ul>
                    </div>
                    <a className=" text-xl font-mono font-semibold hover:text-orange-500"> My Assignment</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="">
                        < a className='mx-4 font-semibold font-mono text-gray-400 hover:text-orange-500' href="\home">Home</a>
                        < a className='mx-4 font-semibold font-mono text-gray-400 hover:text-orange-500' href="\blog">Blog</a>
                        < a className='mx-4 font-semibold font-mono text-gray-400 hover:text-orange-500' href="\contact">Contact</a>
                    </ul>
                </div>
                <div className="w-2/12 ml-12">
                    <img className='lg:w-4/12 rounded-full ' src="https://media.istockphoto.com/id/1299733036/photo/one-spanish-senior-man-headshot-portrait-smiling-at-the-camera.webp?s=1024x1024&w=is&k=20&c=X-_yZaA1zFkp6kCVfhJFYhuNAtk_cdPv540Pqloy3iI=" alt="" />
                </div>
            </div>
            <hr className='w-11/12 mx-auto' />
        </div>
    );
};

export default Nav;