import React from 'react';
import BookCard from './BookCard';

const BooksApi = async () => {
    const res = await fetch('https://biko-book.vercel.app/data.json')
    const data = await res.json()

    const topBooks = data.slice(0, 4)



    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold mt-20 mb-5 text-center'>Recommended For You</h1>
            <div className='border border-b-2 mb-5 border-purple-100 w-6xl mx-auto'></div>

            <div className='grid grid-cols-4 gap-10 max-w-6xl  mx-auto'>
                {
                    topBooks.map(book =>
                        <BookCard key={book.id} book={book}></BookCard>
                    )
                }
            </div>

        </div>
    );
};

export default BooksApi;