import React from 'react'
import { LayoutDashboard, Menu } from 'lucide-react';
import { NavLink } from "react-router";

export default function BottomNavbar() {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between'>

            {/* left child */}
            <div className='flex items-center gap-8'>
                <button className='flex items-center gap-2 border-2 bg-[#0aad0a] px-4 py-2 text-white rounded-lg font-medion whitespace-nowrap'> <LayoutDashboard size={20} /> All Departments</button>

                <div className='hidden lg:block'>
                    <div className='flex items-center gap-8'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/blog">Pages</NavLink>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                        <NavLink to="/sign_in">Account</NavLink>
                    </div>
                </div>
            </div>

            {/* right child */}
            <Menu className='block lg:hidden' />
        </div>
    )
}
