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
                        <p>Home</p>
                        <p>Shop</p>
                        <p>Store</p>
                        <p className='whitespace-nowrap'>Mega menu</p>
                        <p>Pages</p>
                        <NavLink to="/dashboard">Dashborad</NavLink>
                        <NavLink to="/docs">Docs</NavLink>
                    </div>
                </div>
            </div>

            {/* right child */}
            <Menu className='block lg:hidden' />
        </div>
    )
}
