import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {



    return (
        <div className="border  rounded-xl shadow-md w-70 bg-white p-4 hover:shadow-xl transition space-y-2">
            <div className=" flex justify-center items-center">
                <div className="  relative  w-40 h-60">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        loading="eager"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=" object-cover rounded-xl shadow-lg"
                    />
                    <Chip
                        size="sm"
                        className="absolute right-2 top-1 bg-black/30 backdrop-blur-md border border-white/20 text-white"
                    >
                        {book.category}
                    </Chip>
                </div>
            </div>

            <h2 className="text-xl font-semibold mt-3">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="text-sm mt-2 line-clamp-2">
                {book.description}
            </p>

            <Link href={`/allBooks/${book.id}`}><Button variant="outline" className="mt-4 w-full font-bold   py-2 rounded-lg hover:bg-[#cc0058] hover:text-white">
                View Details
            </Button></Link>
        </div>
    );
};

export default BookCard;