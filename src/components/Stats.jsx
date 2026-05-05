"use client";

import { useEffect, useState } from "react";

export default function Stats() {
    const [stats, setStats] = useState({
        totalBooks: 0,
        availableBooks: 0,
        borrowedBooks: 0,
        totalUsers: 0,
    });

    useEffect(() => {


        const fetchStats = async () => {
            const data = {
                totalBooks: 128,
                availableBooks: 85,
                borrowedBooks: 43,
                totalUsers: 56,
            };

            setStats(data);
        };

        fetchStats();
    }, []);

    return (
        <div className="grid grid-cols-1 lg:mt-10 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            <div className="bg-white shadow-md rounded-xl p-5 border">
                <h3 className="text-gray-500 text-sm">Total Books</h3>
                <p className="text-2xl font-bold text-[#b90050]">
                    {stats.totalBooks}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border">
                <h3 className="text-gray-500 text-sm">Available Books</h3>
                <p className="text-2xl font-bold text-green-600">
                    {stats.availableBooks}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border">
                <h3 className="text-gray-500 text-sm">Borrowed Books</h3>
                <p className="text-2xl font-bold text-orange-500">
                    {stats.borrowedBooks}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border">
                <h3 className="text-gray-500 text-sm">Total Users</h3>
                <p className="text-2xl font-bold text-blue-600">
                    {stats.totalUsers}
                </p>
            </div>
        </div>
    );
}