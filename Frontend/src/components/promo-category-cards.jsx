import React from 'react'
import bannerImageOne from "../../public/ad-banner-1.jpg"
import bannerImageTwo from "../../public/ad-banner-2.jpg"
import bannerImageThree from "../../public/ad-banner-3.jpg"

export default function PromoCategoryCards() {
    return (
        <div className='w-11/12 mx-auto'>
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
