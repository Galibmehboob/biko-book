import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const BooksDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://biko-book.vercel.app/data.json')
    const books = await res.json()

    const book = books.find(p => p.id == id)

    return (
        <div className="max-w-4xl flex flex-col md:flex-row items-center justify-center border mt-10 mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 gap-6 md:gap-12">


            <div className="relative w-full md:w-1/3 h-72 md:h-auto flex justify-center">
                <div className="relative w-60 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[30rem]">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>


            <div className="flex-1 mt-4 md:mt-0 w-full">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center md:text-left">
                    {book.title}
                </h1>

                <p className="text-gray-500 mt-1 text-center md:text-left">
                    by <span className="font-medium">{book.author}</span>
                </p>


                <div className="flex justify-center md:justify-start">
                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                        {book.category}
                    </span>
                </div>


                <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
                    {book.description}
                </p>


                <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
                    Available:{" "}
                    <span className="font-semibold">
                        {book.available_quantity}
                    </span>
                </p>


                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-around items-center">
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Button className="px-5 py-2 bg-[#b90050] text-white rounded-lg hover:bg-purple-200 hover:text-black transition w-full sm:w-auto">
                            Borrow now
                        </Button>

                        <Button className="px-5 py-2 border bg-[#b90050] border-gray-300 rounded-lg hover:bg-purple-200 hover:text-black transition w-full sm:w-auto">
                            Wishlist <CiHeart className=" animate-pulse font-bold " />
                        </Button>
                    </div>

                    <div className="w-full sm:w-auto flex justify-center">
                        <Link href="/allBooks">
                            <Button className="rounded-xl bg-[#b90050] hover:bg-purple-200 hover:text-black w-full sm:w-auto">
                                Back
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;