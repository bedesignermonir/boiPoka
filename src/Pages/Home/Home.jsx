import React from 'react';
import Hero from './Hero';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <h1 className='text-3xl font-bold p-5'>Books</h1>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;