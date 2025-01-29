import React from 'react'
import { Heart, MapPin } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
// import myLogo from "../../public/logo.svg"

export default function MiddleNavbar() {
    return (
        <div className="flex justify-between w-10/12 mx-auto " >
            <div>
                <img
                    src="/logo.svg"
                    alt="logo"
                />
            </div>
            <div className='hidden lg:block'>
                <div className="flex space-x-8 ">
                    <input className=" border border-gray rounded-md w-96 pl-2 " type="text" placeholder="Search for product" />
                    <button className="flex gap-2 items-center border border-gray px-4 rounded-md hover:bg-gray-300 hover:cursor-pointer "> <MapPin size={16} /> Location</button>
                </div>
            </div>


            <div className="flex gap-4">
                <Heart />
                <User />
                <ShoppingBag />
            </div>
        </div >
    )
}
