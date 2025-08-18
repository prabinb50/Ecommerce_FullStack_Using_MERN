import React from 'react'

export default function TopNavbar() {
    return (
        <div className='bg-[#f0f3f2]' >
            <div className='flex justify-between py-1 w-11/12 mx-auto font-medium opacity-70'>
                <span>Super Value Deals - Save more with coupons</span>

                <div className='flex items-center justify-between gap-2'>
                    <img src="/english-flag.png" alt="English" className='w-4 h-4' draggable="false" loading='lazy' />
                    <span>English</span>
                </div>
            </div>
        </div>
    )
}


