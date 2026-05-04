"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button } from "@heroui/react";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="sticky top-0 z-50 px-6 text-white bg-white/70 backdrop-blur-md">
            <div className="flex items-center justify-between">

                <Link href="/">
                    <div className="flex justify-center items-center">
                        <Image
                            src={'/biko.png'}
                            alt="logo"
                            width={60}
                            height={60}
                        />
                        <h3 className="text-md text-red-500 font-bold">
                            Biko <br /> Book
                        </h3>
                    </div>
                </Link>

                <div className="hidden md:flex gap-8 text-black">
                    <Link href="/">Home</Link>
                    <Link href="/allBooks">All Books</Link>
                    <Link href="/profile">Profile</Link>
                </div>

                <div className="hidden md:block">

                    <div className="flex gap-3">
                        <Link href="/signin">
                            <Button className="bg-[#b90050]">Sign In</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="bg-[#b90050]">Sign Up</Button>
                        </Link>
                    </div>

                </div>

                <div className="md:hidden text-black">
                    <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                </div>
            </div>

            {menuOpen && (
                <div className="mt-4 flex flex-col text-black gap-4 md:hidden">
                    <Link href="/">Home</Link>
                    <Link href="/books">All Books</Link>
                    <Link href="/profile">Profile</Link>
                    <div className="flex gap-3">
                        <Link href="/signin">
                            <Button className="bg-[#b90050]">Sign In</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="bg-[#b90050]">Sign Up</Button>
                        </Link>
                    </div>
                </div>

            )}
        </nav>
    );
};

export default Navbar;