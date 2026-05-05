"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksApi = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://biko-book.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="grid mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mt-14 md:mt-20 mb-5 text-center">
                Featured Books
            </h1>

            <div className="border border-b-2 mb-10 border-purple-100 w-full max-w-6xl mx-auto"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
                {books.slice(0, 4).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksApi;