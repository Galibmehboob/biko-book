"use client";

import Link from "next/link";
import BanIm from "@/assets/book-banner.png";
import BanImr from "@/assets/fall-book.png";

import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div className="mt-5">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full"
            >

                <SwiperSlide>
                    <section className="relative min-h-[500px] md:h-[500px] w-full rounded-2xl flex items-center justify-center bg-[url('/library-bg.png')] bg-cover bg-center  px-4 py-10">
                        <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl" />

                        <Image
                            src={BanIm}
                            alt="banner"
                            className="w-[180px] md:w-[400px] hidden lg:block absolute bottom-0 md:-bottom-3 right-[-40px] md:right-[-100px] z-20"
                        />

                        <Image
                            src={BanImr}
                            alt="banner"
                            className="w-[180px] md:w-[400px] hidden lg:block absolute bottom-0 md:bottom-[-64px] left-[-20px] md:-left-2 z-20"
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
                                    <button className="bg-[#b90050] cursor-pointer text-white px-5 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-[#cc0058] transition">
                                        Browse Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>


                <SwiperSlide>
                    <section className="relative min-h-[500px] md:h-[500px] w-full rounded-2xl flex items-center justify-center bg-[url('/library-bg2.png')] bg-cover bg-center      px-4 py-10">
                        <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl" />

                        <div className="relative top-32 z-20 text-center text-white space-y-7">
                            <h1 className="text-3xl md:text-6xl font-bold">
                                Explore More Books
                            </h1>
                            <Link href="https://bikoallinone.com/books">
                                <button className="bg-[#b90050] cursor-pointer text-white px-5 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg hover:bg-[#cc0058] transition">
                                    Click Now
                                </button>
                            </Link>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;