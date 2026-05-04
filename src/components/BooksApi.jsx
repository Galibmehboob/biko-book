"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksApi = () => {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState("Recommend");

    useEffect(() => {
        fetch("https://biko-book.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const filteredBooks =
        category === "Recommend"
            ? books
            : books.filter((b) => b.category === category);

    return (
        <div className="w-11/12 mx-auto">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-12 sm:mt-16 md:mt-20 mb-4 sm:mb-5 text-center">
                Categories
            </h1>

            <div className="border border-b-2 mb-4 sm:mb-5 border-purple-100 w-full sm:w-3/4 md:w-6xl mx-auto"></div>

            {/* category buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                {["Recommend", "Story", "Tech", "Science"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-3 sm:px-4 py-2 rounded cursor-pointer text-sm sm:text-base ${category === cat
                                ? "bg-black text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* books grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
                {filteredBooks.slice(0, 4).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default BooksApi;