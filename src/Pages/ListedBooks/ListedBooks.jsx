import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishList } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const data = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [whishList, setWishList] = useState([]);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const intStoredBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => intStoredBookData.includes(book.bookId));
        setReadList(myReadList);


        const wishedListData = getWishList();
        const intwishedListData = wishedListData.map(id => parseInt(id));
        const myWishedList = data.filter(book => intwishedListData.includes(book.bookId));
        setWishList(myWishedList);
    }, []);


    return (
        <div>
            <Tabs className='text-left'>
                <TabList >
                    <Tab>Read Books</Tab>
                    <Tab>WhishList Books</Tab>
                </TabList>

                <TabPanel>
                    <h1 className='underline py-7'>My Total Readlist is : {readList.length}</h1>
                    {
                        readList.map(b => <Book book={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h1 className='underline py-7'>My Total Readlist is : {whishList.length}</h1>
                    {
                        whishList.map(b => <Book book={b}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;