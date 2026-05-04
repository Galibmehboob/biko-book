"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("https://biko-book.vercel.app/data.json");
            const data = await res.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);


    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5 text-white bg-[#830039] rounded-2xl p-3">
                All Books
            </h2>


            <div className="flex justify-center my-5">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="border p-2 w-1/2 rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            <div className="mx-auto grid w-7xl lg:grid-cols-4 gap-14">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default AllBooks;