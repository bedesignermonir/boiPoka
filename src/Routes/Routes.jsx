import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import SignInUp from '../Pages/SignInUp/SignInUp';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/booksData.json'),
                path: "/",
                Component: Home
            },
            {
                path: "/bookDetails/:id",
                loader: () => fetch('/booksData.json'),
                Component: BookDetails
            },
            {
                path: "listedbooks",
                loader: () => fetch('/booksData.json'),
                Component: ListedBooks
            },
            {
                path: "signinup",
                Component: SignInUp
            }
        ]
    },
]);