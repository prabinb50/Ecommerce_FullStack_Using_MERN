import React from 'react'
import bannerImageOne from "../../public/banner1.png"
import bannerImageTwo from "../../public/banner2.jpg"
import { Link } from "react-router-dom";
import { ShoppingBag } from 'lucide-react';

export default function BannerSection() {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* left child */}
      <div className='relative '>
        <img src={bannerImageOne} alt="" className='h-56 md:h-64 rounded-md' />
        <div className='absolute top-8 left-8 space-y-1'>
          <p className='text-lg md:text-2xl font-semibold opacity-80'>Fruits & Vegetables</p>
          <p className='font-semibold opacity-70'>Get Upto <span className='text-[#0aad0a]'>30%</span> Off</p>
        </div>

        <Link to="/" className="inline-block mt-6 absolute top-24 left-8">
          <div className="relative group inline-flex items-center gap-2 py-3 px-4 rounded-lg cursor-pointer text-white bg-black shadow-md overflow-hidden">
            {/* hover background overlay */}
            <span className="absolute inset-0 bg-[#0aad0a] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg z-0" />

            <div className="flex items-center gap-2 relative z-10 transition-all duration-300 group-hover:text-white">
              <span className="font-semibold text-sm md:text-base">
                Shop Now
              </span>
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      </div>

      {/* right child */}
      <div className='relative '>
        <img src={bannerImageTwo} alt="" className=' h-56 md:h-64 object-cover rounded-md' />
        <div className='absolute top-8 left-8 space-y-1'>
          <p className='text-lg md:text-2xl font-semibold opacity-80'>Freshly Baked Buns</p>
          <p className='font-semibold opacity-70'>Get Upto <span className='text-[#0aad0a]'>25%</span> Off</p>
        </div>

        <Link to="/" className="inline-block mt-6 absolute top-24 left-8">
          <div className="relative group inline-flex items-center gap-2 py-3 px-4 rounded-lg cursor-pointer text-white bg-black shadow-md overflow-hidden">
            {/* hover background overlay */}
            <span className="absolute inset-0 bg-[#0aad0a] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg z-0" />

            <div className="flex items-center gap-2 relative z-10 transition-all duration-300 group-hover:text-white">
              <span className="font-semibold text-sm md:text-base">
                Shop Now
              </span>
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
