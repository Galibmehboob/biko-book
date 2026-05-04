import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className=" fixed inset-0  flex flex-col items-center justify-center bg-black text-white ">


            <h1 className="text-7xl md:text-8xl font-extrabold tracking-widest animate-pulse">
                404
            </h1>

            <p className="mt-4 text-lg text-gray-400 text-center max-w-md mb-5">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>


            <Link
                href="/"

            >
                <Button className="hover:bg-purple-600">Go Back Home</Button>
            </Link>

        </div>
    );
}