"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button, Drawer } from "@heroui/react";

import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [session, setSession] = useState(null);

    const handleSignOut = async () => {
        await authClient.signOut();

    };

    useEffect(() => {
        authClient.getSession().then((res) => {
            setSession(res.data);
        });
    }, []);

    return (
        <nav className="sticky top-0 z-50 px-4 md:px-6 py-2 text-white bg-white/70 backdrop-blur-md">
            <div className="flex items-center justify-between">

                <Link href="/">
                    <div className="flex justify-center items-center">
                        <Image
                            src={'/biko.png'}
                            alt="logo"
                            width={50}
                            height={50}
                            className="md:w-[60px] md:h-[60px]"
                        />
                        <h3 className="text-sm md:text-md text-red-500 font-bold leading-tight">
                            Biko <br /> Book
                        </h3>
                    </div>
                </Link>

                <div className="hidden md:flex gap-8 text-black">
                    <Link href="/" className={`px-3 py-1 rounded-md ${pathname === "/" ? "border-b-2 border-t-2 border-[#b90050]" : ""}`}>
                        Home
                    </Link>

                    <Link href="/allBooks" className={`px-3 py-1 rounded-md ${pathname === "/allBooks" ? "border-b-2 border-t-2 border-[#b90050]" : ""}`}>
                        All Books
                    </Link>

                    <Link href="/profile" className={`px-3 py-1 rounded-md ${pathname === "/profile" ? "border-b-2 border-t-2 border-[#b90050]" : ""}`}>
                        Profile
                    </Link>
                </div>

                <div className="hidden md:block">
                    {session ? (
                        <div className="flex gap-3">
                            <Link href="/profile">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt="John Doe"
                                        referrerPolicy="no-referrer"
                                        src={session.user?.image}
                                    />
                                    <Avatar.Fallback>
                                        {session.user?.name?.slice(0, 2).toUpperCase()}
                                    </Avatar.Fallback>
                                </Avatar>
                            </Link>

                            <Button
                                onClick={handleSignOut}
                                size="sm"
                            >
                                Sign Out
                            </Button>
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
                    <Drawer open={menuOpen} onOpenChange={setMenuOpen}>

                        <Drawer.Trigger asChild>
                            <FaBars />
                        </Drawer.Trigger>

                        <Drawer.Backdrop>
                            <Drawer.Content placement="left">
                                <Drawer.Dialog>

                                    <Drawer.CloseTrigger />

                                    <Drawer.Header>
                                        <Drawer.Heading>Menu</Drawer.Heading>
                                    </Drawer.Header>

                                    <Drawer.Body>
                                        <nav className="flex flex-col gap-3">

                                            <Link href="/">Home</Link>
                                            <Link href="/allBooks">All Books</Link>
                                            <Link href="/profile">Profile</Link>

                                            {session ? (
                                                <div className="flex flex-col gap-3 mt-3">
                                                    <Link href="/profile">
                                                        <div className="flex items-center gap-3">
                                                            <Avatar size="sm">
                                                                <Avatar.Image
                                                                    alt="John Doe"
                                                                    referrerPolicy="no-referrer"
                                                                    src={session.user?.image}
                                                                />
                                                                <Avatar.Fallback>
                                                                    {session.user?.name?.slice(0, 2).toUpperCase()}
                                                                </Avatar.Fallback>
                                                            </Avatar>

                                                            <span>{session.user?.name}</span>
                                                        </div>
                                                    </Link>

                                                    <Button
                                                        size="sm"
                                                        variant="danger"
                                                        onClick={handleSignOut}
                                                    >
                                                        Sign Out
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-3 mt-3">
                                                    <Link href="/signin">
                                                        <Button className="bg-[#b90050] w-full">
                                                            Sign In
                                                        </Button>
                                                    </Link>

                                                    <Link href="/signup">
                                                        <Button className="bg-[#b90050] w-full">
                                                            Sign Up
                                                        </Button>
                                                    </Link>
                                                </div>
                                            )}

                                        </nav>
                                    </Drawer.Body>

                                </Drawer.Dialog>
                            </Drawer.Content>
                        </Drawer.Backdrop>
                    </Drawer>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;