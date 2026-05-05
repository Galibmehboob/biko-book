"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("https://biko-book.vercel.app/data.json");
            const data = await res.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);


    const filteredBooks = books.filter((book) => {
        const matchSearch = book.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "All" || book.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-2xl font-bold text-center my-5 text-white bg-[#830039] rounded-2xl p-3">
                All Books
            </h2>

            <div className="flex flex-col lg:flex-row gap-6">


                <div className="lg:w-1/5 bg-gray-100 p-5 rounded-xl h-fit">
                    <h3 className="text-lg font-semibold mb-4">
                        Categories
                    </h3>

                    {["All", "Story", "Tech", "Science"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`block w-full text-left px-4 py-2 mb-2 rounded cursor-pointer ${category === cat
                                ? "bg-[#830039] text-white"
                                : "bg-white border"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="lg:w-4/5">


                    <div className="flex justify-center mb-6">
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="border p-2 w-full md:w-1/2 rounded-md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;