import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


                <div>
                    <div className="flex justify-start items-center">
                        <Link href='/'>
                            <Image

                                src={'/biko.png'}
                                loading="eager"
                                alt="logo"
                                width={70}
                                height={70}
                            >

                            </Image>
                        </Link>
                        <h2 className="text-xl font-bold text-white">Biko <br /> Book</h2>
                    </div>
                    <p className="mt-2 text-sm">
                        Discover your next favorite book with us.
                    </p>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/allBooks">All Books</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white">Facebook</Link>
                        <Link href="#" className="hover:text-white">Twitter</Link>
                        <Link href="#" className="hover:text-white">Instagram</Link>
                    </div>
                </div>

            </div>


            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Biko Book. All rights reserved. By <Link className="text-blue-500" href='https://www.facebook.com/heygalib.4U/'>Galib Mehboob</Link>
            </div>
        </footer>
    );
};

export default Footer;