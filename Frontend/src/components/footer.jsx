import React from 'react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


const footerData = {
    "Categories": [
        "Vegetables & Fruits", "Breakfast & instant food", "Bakery & Biscuits", "Atta, rice & dal", "Sauces & spreads",
        "Organic & gourmet", "Baby care", "Cleaning essentials", "Personal care",
        "Dairy, bread & eggs", "Cold drinks & juices", "Tea, coffee & drinks", "Masala, oil & more", "Chicken, meat & fish", "Paan corner",
        "Pharma & wellness", "Home & office", "Pet care"
    ],
    "Get to know us": ["Company", "About", "Blog", "Help Center", "Our Value"],
    "For Consumers": ["Payments", "Shipping", "Product Returns", "FAQ", "Shop Checkout"],
    "Become a Shopper": ["Shopper Opportunities", "Become a Shopper", "Earnings", "Ideas & Guides", "New Retailers"],
    "Freshcart programs": ["Gift Cards", "Promos & Coupons", "Freshcart Ads", "Careers"]
};

export default function Footer() {
    return (
        <div className='bg-gray-100 mt-24'>
            <div className='w-10/12 mx-auto space-y-8 text-sm pt-15'>
                {/* first child */}
                <div className='grid grid-cols-6 gap-6'>
                    {/* Categories Section Split into Two Columns */}
                    <div className='col-span-2 space-y-2'>
                        <p className='font-semibold'>Categories</p>
                        <div className='grid grid-cols-2 gap-2'>
                            {footerData["Categories"].map((item, i) => (
                                <p key={i} className='font-semibold opacity-50 hover:text-green-500 hover:opacity-100 cursor-pointer'>{item}</p>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerData).slice(1).map(([title, items], index) => (
                        <div key={index} className='space-y-2'>
                            <p className='font-semibold'>{title}</p>
                            {items.map((item, i) => (
                                <p key={i} className='font-semibold opacity-50 hover:text-green-500 hover:opacity-100 cursor-pointer'>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <hr className='text-gray-200' />

                {/* second child */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between '>
                        <p className='font-semibold'>Payment Partners</p>
                        <img src="/amazon-2.svg" alt="" className='w-20 pt-2 cursor-pointer' />
                        <img src="/visa-2.png" alt="" className='w-10 pt-1 cursor-pointer' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className='font-semibold'>Get deliveries with FreshCart</p>
                        <img src="/appstore-btn.svg" alt="" className='cursor-pointer' />
                        <img src="/googleplay-btn.svg" alt="" className='cursor-pointer' />
                    </div>
                </div>
                <hr className='text-gray-200' />

                {/* third child */}
                <div className='flex justify-between pb-15'>
                    <p className='font-semibold text-sm opacity-50'>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <br /><span className='text-green-500'>Codescandy</span>.
                    </p>

                    <div className='flex gap-2 items-center'>
                        <p className='font-semibold text-sm opacity-50'>Follow us on</p>
                        <Facebook className='text-gray-400 hover:text-green-500 cursor-pointer' />
                        <Instagram className='text-gray-400 hover:text-green-500 cursor-pointer' />
                        <Twitter className='text-gray-400 hover:text-green-500 cursor-pointer' />
                    </div>

                    {/* Sticky Buy Now Button */}
                    <button className='fixed bottom-1 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-lg flex gap-2 cursor-pointer'>
                        <ShoppingCart color="white" /> Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}


