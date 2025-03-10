import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { ShoppingBag } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';
import { Heart } from 'lucide-react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import ChildComponent from '../components/child-component';
import { useLocation } from "react-router"
import axios from "axios";

export default function ProductDescerption() {

    // State in react with hooks
    const [count, setCount] = useState(0);

    const location = useLocation();
    const product_id = (location.pathname.split("/")[2]);

    const [isFetching, setIsFetching] = useState(false);

    // fetch a single product by id
    const [singleProduct, setSingleProduct] = useState();

    const fetchSingleProduct = async () => {
        try {
            setIsFetching(true);
            const response = await axios.get(`http://localhost:3000/products/${product_id}`)
            setSingleProduct(response.data.data)
            setIsFetching(false);
        } catch (error) {
            setIsFetching(false)
            console.log("Something went wrong while fetching the single product", error);
        }
    }

    useEffect(() => {
        fetchSingleProduct();
    }, [product_id]);

    return (
        <div>
            {isFetching ?
                <p>Loading...</p>
                :
                <div className='w-10/12 mx-auto grid grid-cols-2 gap-15 mt-8'>
                    {/* Left child */}
                    <div>
                        {/* <img src="/product-1.jpg" alt="" className='rounded-md' /> */}
                        <InnerImageZoom src={singleProduct?.imageUrl} />

                        <div className='flex justify-between mt-4'>
                            <img src='/product-1.jpg' alt='' className=' h-20 border border-green-500 rounded-md ' />
                            <img src='/product-1.jpg' alt='' className=' h-20 rounded-md ' />
                            <img src='/product-1.jpg' alt='' className=' h-20 rounded-md ' />
                            <img src='/product-1.jpg' alt='' className=' h-20 rounded-md' />
                        </div>
                    </div>

                    {/* right child */}
                    <div className='space-y-2'>
                        <p className='text-sm text-green-500 font-semibold cursor-pointer'>{singleProduct?.category}</p>
                        <p className='text-3xl font-semibold'>{singleProduct?.name}</p>
                        <p className='font-semibold'>{singleProduct?.price} <span className='text-gray-500 line-through'>{singleProduct?.previousPrice}</span> <span className='text-red-500 text-sm'>10% Off</span></p>

                        <div className='flex items-center gap-2'>
                            <ReactStars
                                count={5}
                                size={18}
                                value={4.5}
                                color2={'#ffd700'}
                                className='cursor-pointer'
                            />
                            <p className='text-green-500 text-xs font-semibold cursor-pointer'>(4 reviews)</p>
                        </div>
                        <hr className='text-gray-200 mt-4' />

                        <div className='mt-6 flex space-x-2 '>
                            <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer'>250g</span>
                            <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer'>500g</span>
                            <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer'>1kg</span>
                        </div>

                        <div className='mt-6 '>
                            <span className='border border-gray-200  hover:bg-gray-200 px-2 cursor-pointer' onClick={(event) => setCount(count - 1)}>-</span>
                            <span className='border border-gray-200 hover:bg-gray-200 px-5'>{count}</span>
                            <span className='border border-gray-200 hover:bg-gray-200 px-2 cursor-pointer' onClick={(event) => setCount(count + 1)} >+</span>
                        </div>

                        <div className='flex items-center gap-2 mt-6'>
                            <button className='bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 flex gap-2 cursor-pointer'><ShoppingBag color="white" />Add to cart</button>
                            <ArrowRightLeft color="black" className='rounded-md w-10 h-9.5 p-2.5 opacity-70 bg-gray-200 hover:bg-gray-300 cursor-pointer' />
                            <Heart className='rounded-md w-10 h-9.5 p-2.5 opacity-70 bg-gray-200 hover:bg-gray-300 cursor-pointer' />
                        </div>
                        <hr className='text-gray-200 mt-6' />

                        <div className='grid grid-cols-2 opacity-60 text-sm space-y-4 font-semibold pl-6'>
                            <p>Product Code:</p>
                            <p>Availability:</p>
                            <p>Type:</p>
                            <p>Shipping</p>

                            <p>FBB00255</p>
                            <p>In Stock</p>
                            <p>Fruits</p>
                            <p>01 day shipping. (Free pickup today)</p>
                        </div>

                        <button className='font-semibold border px-4 py-2 rounded-md text-gray-400 text-sm mt-6 cursor-pointer hover:bg-gray-400 hover:text-white'>Share</button>

                        <ChildComponent name={name}></ChildComponent>
                    </div>
                </div>
            }
        </div>
    )
}
