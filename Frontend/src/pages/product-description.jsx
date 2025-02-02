import React from 'react'
import ReactStars from 'react-stars'

export default function ProductDescerption() {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-2'>
            {/* Left child */}
            <div>
                <img src="/product-1.jpg" alt="" />
            </div>

            {/* right child */}
            <div className='space-y-2'>
                <p className='text-sm text-green-500 font-semibold'>Snack & Munchies</p>
                <p className='text-3xl font-semibold'>Haldiram's Sev Bhujia</p>

                <div className='flex items-center gap-2'>
                    <ReactStars
                        count={5}
                        size={18}
                        value={4.5}
                        color2={'#ffd700'}
                    />
                    <p className='text-green-500 text-xs font-semibold'>(4 reviews)</p>
                </div>
                <hr className='text-gray-300' />

                <div className='mt-8 flex space-x-4'>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>250g</span>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>500g</span>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>1kg</span>
                </div>
            </div>
        </div>
    )
}
