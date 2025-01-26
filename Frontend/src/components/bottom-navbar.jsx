import React from 'react'
import { LayoutDashboard } from 'lucide-react';

export default function BottomNavbar() {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-between'>

            {/* left child */}
            <div className='flex items-center gap-8'>
                <button className='flex items-center gap-2 border-2 bg-green-500 p  px-4 py-2 text-white rounded-md font-medion whitespace-nowrap'> <LayoutDashboard size={20} /> All Departments</button>

                <p>Home</p>
                <p>Shop</p>
                <p>Store</p>
                <p>Mega menu</p>
                <p>Pages</p>
                <p>Dashborad</p>
                <p>Docs</p>
            </div>

            {/* right child */}
            <div></div>
        </div>
    )
}
