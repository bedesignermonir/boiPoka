import React from 'react';
import heroBook from "../../../public/Hero-Book-1.png"

const Hero = () => {
    return (
        <div className="hero bg-base-100  bg-gray-300 rounded-2xl h-[554px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroBook}
                    className="max-w-sm rounded-lg "
                />
                <div className='w-2xl text-left px-8'>
                    <h1 className="text-5xl font-bold text-black">Books to freshen up your bookshelf</h1>
                    <br />
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;