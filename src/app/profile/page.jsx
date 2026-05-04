"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { UpdateUser } from "@/components/UpdateUser";


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
        <div className="min-h-screen flex items-center justify-center">

            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl space-y-3 p-6 text-center">


                <div className="w-20 h-20 mx-auto bg-[#b90050] text-white rounded-full flex items-center justify-center text-2xl font-bold">

                    <Avatar >

                        <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0).toUpperCase()}</Avatar.Fallback>
                    </Avatar>
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
                        Email :{" "}
                        <span className={user?.emailVerified ? "text-green-600" : "text-red-500"}>
                            {user?.emailVerified ? `Verified ` : "Not Verified"}
                        </span>
                    </p>

                    <p>
                        Joined:{" "}
                        {new Date(user?.createdAt).toLocaleDateString()}
                    </p>

                </div>

                <UpdateUser user={user} setSession={setSession}></UpdateUser>
            </div>

        </div>
    );
};

export default ProfilePage; 