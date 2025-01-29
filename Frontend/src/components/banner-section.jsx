import React from 'react'
import bannerImageOne from "../../public/banner1.png"
import bannerImageTwo from "../../public/banner2.jpg"

export default function BannerSection() {
  return (
    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-24'>
      {/* left child */}
      <div className='relative rounded-md object-cover'>
        <img src={bannerImageOne} alt="" className='h-56 md:h-64' />
        <div className='absolute top-8 left-8 space-y-2 md:space-y-4'>
          <p className='text-lg md:text-2xl font-semibold'>Fruits & Vegetables</p>
          <p className='font-semibold opacity-70'>Get Upto 30% Off</p>
          <button className='bg-black text-white px-6 py-2 font-semibold rounded-md'>Shop Now</button>
        </div>
      </div>

      {/* right child */}
      <div className='relative'>
        <img src={bannerImageTwo} alt="" className=' h-56 md:h-64 object-cover' />
        <div className='absolute top-8 left-8 space-y-2 md:space-y-4'>
          <p className='text-lg md:text-2xl font-semibold'>Freshly Baked Buns</p>
          <p className='font-semibold opacity-70'>Get Upto 25% Off</p>
          <button className='bg-black text-white px-6 py-2 font-semibold rounded-md'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
