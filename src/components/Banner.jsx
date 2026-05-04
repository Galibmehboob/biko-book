import Link from "next/link";
import BanIm from "@/assets/book-banner.png"
import BanImr from "@/assets/fall-book.png"

import Image from "next/image";

const Banner = () => {
    return (
        <section
            className="relative min-h-[500px] md:h-[500px] w-full rounded-2xl mt-5 flex items-center justify-center bg-[url('/library-bg.png')] bg-cover bg-center overflow-hidden px-4 py-10"
        >
            <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl" />

            <Image
                src={BanIm}
                alt="banner"
                className="w-[180px] md:w-[400px] absolute bottom-0 md:-bottom-3 right-[-40px] md:right-[-100px] z-10"
            />

            <Image
                src={BanImr}
                alt="banner"
                className="w-[180px] md:w-[400px] absolute bottom-0 md:bottom-[-64px] left-[-20px] md:-left-2 z-10"
            />

            <div className="relative z-20 max-w-6xl mx-auto text-center space-y-20 md:space-y-44">
                <div>
                    <h1 className="text-3xl md:text-6xl font-bold text-white">
                        Find Your Next Read
                    </h1>

                    <p className="mt-4 text-gray-200 text-base md:text-xl px-2">
                        Discover thousands of books from different genres and authors.
                    </p>
                </div>

                <div className="mt-8">
                    <Link href="/allBooks">
                        <button className="bg-[#b90050] text-white px-5 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-[#cc0058] transition">
                            Browse Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;