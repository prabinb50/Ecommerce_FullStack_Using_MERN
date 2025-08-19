import React from 'react'
import ReactStars from 'react-stars'
import { NavLink } from "react-router"

export default function SingleProductCard({ eachItem }) {
    return (
        <NavLink to={`/shop/${eachItem._id}`}>
            <div className='border border-gray-300 rounded-md flex flex-col items-center p-4 space-y-1 cursor-pointer'>
                <img src={eachItem.imageUrl} className='h-44' alt="" loading='lazy' />
                <p className='font-semibold opacity-50 text-sm'>{eachItem.category}</p>
                <p className='font-semibold text-base opacity-80 text-nowrap'>{eachItem.name}</p>

                <div className='flex items-center gap-2'>
                    <ReactStars
                        count={5}
                        size={18}
                        value={4.5}
                        color2={'#ffd700'} />

                    <p className='font-semibold opacity-50 text-sm'>4.5 (5)</p>
                </div>

                <div className='flex items-center justify-between w-full mt-3'>
                    <p className='font-semibold opacity-70'>${eachItem.price} <span className='opacity-50 line-through'>${eachItem.previousPrice}</span></p>
                    <button className='bg-green-500 text-white font-semibold rounded px-3 py-2 text-sm cursor-pointer'> + Add</button>
                </div>
            </div>
        </NavLink>
    )
}
