import React from 'react'
import ReactStars from 'react-stars'

export default function SingleProductCard({ eachItem }) {
    return (
        <div>
            <div className='border border-gray-300 rounded-md flex flex-col items-center p-4 space-y-1.5'>
                <img src={eachItem.image} alt="" />
                <p className='font-semibold opacity-50 text-xs'>{eachItem.categoryName}</p>
                <p className='font-semibold text-sm'>{eachItem.productName}</p>

                <div className='flex items-center gap-2'>
                    <ReactStars
                        count={5}
                        size={18}
                        value={4.5}
                        color2={'#ffd700'} />

                    <p className='font-semibold opacity-70 text-sm'>{eachItem.rating} ({eachItem.review})</p>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <p className='font-semibold'>${eachItem.price} <span className='opacity-70 '>${eachItem.previousPrice}</span></p>
                    <button className='bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-sm'> + Add</button>
                </div>
            </div>
            {/* <div className=" border border-gray-300 rounded-md flex  flex-col items-center justify-center  p-4 space-y-1.5  ">
                <img
                    src={myImage}
                    alt=""
                />
                <p className=" font-semibold opacity-50 text-xs">Snack & Munchies</p>
                <p className=" font-semibold text-sm">Haldirams Sev Bhujia</p>
                <div className=" flex items-center gap-2">
                    <ReactStars
                        count={5}
                        size={16}
                        value={4.5}
                        color2={"#ffd700"}
                    />
                    <p className=" font-semibold opacity-70 text-sm">4.3 (4)</p>
                </div>

                <div className=" flex items-center justify-between w-full">
                    <p className=" font-semibold">
                        $21.6 <span className=" opacity-70">$24</span>{" "}
                    </p>
                    <button className=" bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs">Add</button>
                </div>
            </div> */}
        </div>

    )
}
