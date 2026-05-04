import BookCard from "@/components/BookCard";


const AllBooks = async () => {

    const res = await fetch('');
    const books = await res.json();

    console.log(books);



    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-5 text-white bg-[#830039] rounded-2xl p-3">All Books</h2>


            <div className="mx-auto grid w-7xl lg:grid-cols-4 gap-14">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>



        </div>
    );
};

export default AllBooks;