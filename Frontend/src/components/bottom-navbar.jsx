import React from 'react'
import { LayoutDashboard, Menu } from 'lucide-react';
import { NavLink } from "react-router";

export default function BottomNavbar() {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-between'>

            {/* left child */}
            <div className='flex items-center gap-8'>
                <button className='flex items-center gap-2 border-2 bg-green-500 p  px-4 py-2 text-white rounded-md font-medion whitespace-nowrap'> <LayoutDashboard size={20} /> All Departments</button>

                <div className='hidden lg:block'>
                    <div className='flex items-center gap-8'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/stores">Stores</NavLink>
                        <NavLink to="/mega-menu" className='whitespace-nowrap'>Mega menu</NavLink>
                        <NavLink to="/blog">Pages</NavLink>
                        <NavLink to="/dashboard">Dashborad</NavLink>
                        <NavLink to="/docs">Docs</NavLink>
                        <NavLink to="/sign_in">Sign In</NavLink>
                        <NavLink to="/sign_up">Sign Up</NavLink>
                    </div>
                </div>
            </div>

            {/* right child */}
            <Menu className='block lg:hidden' />
        </div>
    )
}
