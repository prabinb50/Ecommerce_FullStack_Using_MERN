import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import sliderImageOne from "../../public/slide-1.jpg"
import sliderImageTwo from "../../public/slide-2.jpg"

export default function HeroSectionSlider() {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="w-11/12 mx-auto rounded-md mt-8">
            <SwiperSlide>
                <img className='md:h-[70vh] object-cover' src={sliderImageOne} alt="" loading='lazy' draggable='false' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:h-[70vh] object-cover' src={sliderImageTwo} alt="" loading='lazy' draggable='false' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:h-[70vh] object-cover' src={sliderImageOne} alt="" loading='lazy' draggable='false' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='md:h-[70vh] object-cover' src={sliderImageTwo} alt="" loading='lazy' draggable='false' />
            </SwiperSlide>
        </Swiper>
    )
}
