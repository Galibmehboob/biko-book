import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 items-center w-full bg-gray-100 rounded-xl p-2 mt-6 sm:mt-10'>

            <Button className='rounded-lg bg-[#b90050] text-xs sm:text-sm text-white w-full sm:w-auto'>
                New Arrivals
            </Button>

            <div className='w-full sm:flex-1'>
                <Marquee pauseOnHover>
                    Atomic Habits |  Deep Work  |  The Alchemist  |  Zero to One  |  The Lean Startup  |  Think and Grow Rich  |  Cant Hurt Me  | The 7 Habits of Highly Effective People |   Special Discount on Memberships!
                </Marquee>
            </div>

        </div>
    );
};

export default MarqueePage;