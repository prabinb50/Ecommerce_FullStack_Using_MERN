import React from 'react'
import { Heart, MapPin } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

export default function MiddleNavbar() {
    return (
        <div className="flex justify-between w-11/12 mx-auto " >
            <img
                src="/logo.svg"
                alt="logo"
            />

            <div className='hidden lg:block'>
                <div className="flex space-x-5">
                    <input className="border border-gray-300 rounded-md w-96 pl-2 py-2 font-medium" type="text" placeholder="Search for products" />
                    <button className="flex gap-1 items-center justify-center border border-gray-300 px-4 rounded-md hover:bg-gray-100 cursor-pointer ">
                        <MapPin size={16} className='opacity-50 ' />
                        <span className='opacity-50 font-medium'>Location</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3">
                <Heart className='opacity-70' />
                {/* <User className='opacity-70' /> */}
                <ShoppingBag className='opacity-70' />
            </div>
        </div >
    )
}
