import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB, addToWishListDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const sBookID = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === sBookID);
    console.log(singleBook);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;

    const handleMarkAsRead = (id) => {
        addToStoreDB(id)
    }

    const handleAddToWishList = (id) => {
        addToWishListDB(id);
    }

    return (
        <div className='mx-96 border grid md:grid-cols-2 gap-20 p-10 mx-auto'>
            <div className='w-[573px] h-[711] bg-gray-50 p-5 rounded-2xl m-5 mx-auto'>
                <img className='w-min mx-auto' src={image} alt="" />
            </div>
            <div className='m-5 text-left'>
                <h1 className='text-4xl font-bold pb-3'>{bookName}</h1>
                <small className='text-2xl'>by: {author}</small>
                <div className="divider"></div>
                <h2>{category}</h2>
                <div className="divider"></div>
                <p> <span className='font-bold'>Review:</span>  {review}</p>
                <div>Tags: #{tags[0]}, #{tags[1]}</div>
                <div className="divider"></div>
                <ul>
                    <li>Number of Pages: {totalPages} </li>
                    <li>Publisher : {publisher} </li>
                    <li>Year of Publishing : {yearOfPublishing}</li>
                    <li>Rating : {rating} </li>
                </ul>
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline mr-5">Read</button>
                <button onClick={() => handleAddToWishList(id)} className="btn btn-info m-5">Wishlist</button>
            </div>

        </div>
    );
};

export default BookDetails;