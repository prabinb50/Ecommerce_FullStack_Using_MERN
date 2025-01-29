import React from 'react'
import iconOneImage from "../../public/icon_1.svg"
import bannerImageOne from "../../public/ad-banner-1.jpg"
import bannerImageTwo from "../../public/ad-banner-2.jpg"
import bannerImageThree from "../../public/ad-banner-3.jpg"

export default function () {
    return (
        <div className='w-10/12 mx-auto space-y-8 mt-24'>
            {/* first child */}
            <div className='flex items-center justify-between bg-gray-100 rounded-md mx-auto pl-10 pr-10 h-35'>
                {/* first child - left */}
                <div className='flex items-center justify-between gap-6'>
                    <img src={iconOneImage} alt="" />
                    <div>
                        <p className='font-semibold text-3xl opacity-80'>Welcome to FreshCart</p>
                        <p className='font-semibold opacity-50'>Download the app get free food & <span className='text-green-600'>$30</span> off on your first order.</p>
                    </div>
                </div>

                {/* first child - right*/}
                <button className='bg-black text-white px-6 py-2 font-semibold rounded-md hover:bg-gray-700 cursor-pointer'>Download FreshCart App</button>
            </div>

            {/* second child */}
            <div className='flex items-center justify-between gap-8'>
                <div className='relative rounded-md overflow-hidden'>
                    <img src={bannerImageOne} alt="" className='h-60 object-cover' />
                    <div className='absolute top-8 left-8 space-y-4'>
                        <p className='text-2xl font-semibold'>10% cashback on <br />personal care</p>
                        <p className='font-semibold opacity-70'>Max cashback: $12 <br />Code: <span className='font-bold opacity-100'>CARE12</span></p>
                        <button className='bg-black text-white px-4 py-2 font-semibold rounded-md'>Shop </button>
                    </div>
                </div>

                <div className='relative rounded-md overflow-hidden'>
                    <img src={bannerImageTwo} alt="" className='h-60 object-cover' />
                    <div className='absolute top-8 left-8 space-y-4'>
                        <p className='text-2xl font-semibold'>Say yes to <br />season’s fresh</p>
                        <p className='font-semibold opacity-70'>Refresh your day <br />the fruity way</p>
                        <button className='bg-black text-white px-4 py-2 font-semibold rounded-md'>Shop </button>
                    </div>
                </div>

                <div className='relative rounded-md overflow-hidden'>
                    <img src={bannerImageThree} alt="" className='h-60 object-cover' />
                    <div className='absolute top-8 left-8 space-y-4'>
                        <p className='text-2xl font-semibold'>When in doubt, <br />eat ice cream</p>
                        <p className='font-semibold opacity-70'>Enjoy a scoop of <br />summer today</p>
                        <button className='bg-black text-white px-4 py-2 font-semibold rounded-md'>Shop </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
