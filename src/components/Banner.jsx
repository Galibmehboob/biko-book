import Link from "next/link";
import BanIm from "@/assets/book-banner.png"
import BanImr from "@/assets/fall-book.png"

import Image from "next/image";

const Banner = () => {
    return (
        <section
            className="relative h-[500px] w-full rounded-2xl  mt-5 flex items-center justify-center bg-[url('/library-bg.png')] bg-cover bg-center"
        >



            <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl" />
            <Image
                src={BanIm}
                alt="banner"
                className="w-[400px] absolute -bottom-3 right-[-100px] z-10"
            />

            <Image
                src={BanImr}
                alt="banner"
                className="w-[400px] absolute bottom-[-64px] -left-2 z-10"
            />


            <div className="relative z-20 max-w-6xl mx-auto text-center space-y-44 ">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Find Your Next Read
                    </h1>

                    <p className="mt-4 text-gray-200 text-lg md:text-xl">
                        Discover thousands of books from different genres and authors.
                    </p>
                </div>

                <div className="mt-8">
                    <Link href="/allBooks">
                        <button className="bg-[#b90050] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#cc0058] transition">
                            Browse Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;