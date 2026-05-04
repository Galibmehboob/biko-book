import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="bg-gray-100 py-16 mt-20 rounded-lg">
                <div className="w-11/12 mx-auto text-center">
                    <h2 className="text-3xl font-bold">Stay Updated</h2>
                    <p className="mt-2 text-gray-600">
                        Get latest book updates and offers
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md border w-full md:w-96"
                        />
                        <button className="bg-[#b90050] text-white px-6 py-2 rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;