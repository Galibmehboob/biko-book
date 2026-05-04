import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (
        <div className='flex justify-between gap-4 item-center bg-gray-100 rounded-xl p-2 mt-10'>
            <Button className='rounded-lg bg-[#b90050] text-sm text-white '> New Arrivals</Button>
            <Marquee pauseOnHover>
                Atomic Habits |  Deep Work  |  The Alchemist  |  Zero to One  |  The Lean Startup  |  Think and Grow Rich  |  Cant Hurt Me  | The 7 Habits of Highly Effective People |   Special Discount on Memberships!
            </Marquee>
        </div>
    );
};

export default MarqueePage;