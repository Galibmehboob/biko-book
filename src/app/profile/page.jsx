"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        authClient.getSession().then((res) => {
            setSession(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!session) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-red-500">Not logged in</p>
            </div>
        );
    }

    const user = session.user;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">


                <div className="w-20 h-20 mx-auto bg-[#b90050] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {user?.name?.charAt(0)}
                </div>


                <h1 className="mt-4 text-xl font-semibold text-black">
                    {user?.name}
                </h1>


                <p className="text-gray-500 text-sm">
                    {user?.email}
                </p>

                <div className="mt-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                        Active User
                    </span>
                </div>


                <div className="mt-5 text-sm text-gray-600 space-y-2">

                    <p>
                        Email Verified:{" "}
                        <span className={user?.emailVerified ? "text-green-600" : "text-red-500"}>
                            {user?.emailVerified ? "Yes" : "No"}
                        </span>
                    </p>

                    <p>
                        Joined:{" "}
                        {new Date(user?.createdAt).toLocaleDateString()}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default ProfilePage; 