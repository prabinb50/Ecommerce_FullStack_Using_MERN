import React from 'react'
import { Clock } from 'lucide-react';
import { Gift } from 'lucide-react';
import { Package } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';

export default function ServiceHighlights() {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between gap-6 py-10 md:py-15'>
            {/* first child */}
            <div className='space-y-2'>
                <div>
                    <Clock size={40} color="green" strokeWidth={1.8} absoluteStrokeWidth />
                </div>
                <p className='font-semibold text-lg'>10 minute grocery now</p>
                <p className='font-semibold opacity-50'>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
            </div>

            {/* second child */}
            <div className='space-y-2'>
                <div>
                    <Gift size={40} color="green" strokeWidth={1.8} absoluteStrokeWidth />
                </div>
                <p className='font-semibold text-lg'>Best Prices & Offers</p>
                <p className='font-semibold opacity-50'>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
            </div>

            {/* third child */}
            <div className='space-y-2'>
                <div>
                    <Package size={40} color="green" strokeWidth={1.8} absoluteStrokeWidth />
                </div>
                <p className='font-semibold text-lg'>Wide Assortment</p>
                <p className='font-semibold opacity-50'>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
            </div>

            {/* fourth child */}
            <div className='space-y-2'>
                <div>
                    <RefreshCcw size={40} color="green" strokeWidth={1.8} absoluteStrokeWidth />
                </div>
                <p className='font-semibold text-lg'>Easy Returns</p>
                <p className='font-semibold opacity-50'>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.</p>
            </div>
        </div>
    )
}
