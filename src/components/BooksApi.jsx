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
            <h1 className="text-4xl font-bold mt-20 mb-5 text-center">
                Categories
            </h1>

            <div className="border border-b-2 mb-5 border-purple-100 w-6xl mx-auto"></div>


            <div className="flex justify-center gap-3 mb-10">
                {["Recommend", "Story", "Tech", "Science"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded ${category === cat
                            ? "bg-black text-white"
                            : "bg-gray-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {filteredBooks.slice(0, 4).map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksApi;