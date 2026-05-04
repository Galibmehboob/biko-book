"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button } from "@heroui/react";

import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const [session, setSession] = useState(null);

    const handleSignOut = async () => {
        await authClient.signOut()
    }

    useEffect(() => {
        authClient.getSession().then((res) => {
            setSession(res.data);
        });
    }, []);

    console.log(session);


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
                    <Link
                        href="/"
                        className={`px-3 py-1 rounded-md ${pathname === "/" ? "border-b-2 border-t-2 border-[#b90050] " : ""
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="/allBooks"
                        className={`px-3 py-1 rounded-md ${pathname === "/allBooks" ? "border-b-2 border-t-2 border-[#b90050] " : ""
                            }`}
                    >
                        All Books
                    </Link>

                    <Link
                        href="/profile"
                        className={`px-3 py-1 rounded-md ${pathname === "/profile" ? "border-b-2 border-t-2 border-[#b90050] " : ""
                            }`}
                    >
                        Profile
                    </Link>
                </div>

                <div className="hidden md:block">
                    {session ? (
                        <div className="flex gap-3">
                            <Link href="/profile">
                                <Avatar size="sm">
                                    {/* <p className="text-black flex items-center gap-3">Hey,<span className="bg-blue-200 p-3 rounded-full flex "> </span></p> */}
                                    <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={session.user?.image} />
                                    <Avatar.Fallback>{session.user?.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                                </Avatar></Link>
                            <Link href="/signin">
                                <Button onClick={handleSignOut} size="sm" variant="danger" className="">Sign Out</Button>
                            </Link>

                        </div>


                    ) : (
                        <div className="flex gap-3">
                            <Link href="/signin">
                                <Button className="bg-[#b90050]">Sign In</Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="bg-[#b90050]">Sign Up</Button>
                            </Link>
                        </div>
                    )}
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