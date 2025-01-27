import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import sliderImageOne from "../../public/slide-1.jpg"
import sliderImageTwo from "../../public/slide-2.jpg"

export default function HeroSectionSlider() {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-10/12 mx-auto rounded-md mt-8">
            <SwiperSlide>
                <img className='h-[70vh] object-cover' src={sliderImageOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[70vh] object-cover' src={sliderImageTwo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[70vh] object-cover' src={sliderImageOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[70vh] object-cover' src={sliderImageTwo} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
