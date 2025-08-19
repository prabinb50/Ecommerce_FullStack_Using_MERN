import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';

export default function FeaturesCategoriesSection() {

    // fetch all categories
    const [allCategories, setAllCategories] = useState();

    const fetchAllCategories = async () => {
        try {
            const response = await axios.get("http://localhost:3000/categories");
            // console.log(response.data.data);
            setAllCategories(response.data.data);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    useEffect(() => {
        fetchAllCategories();
    }, []);

    return (
        <div className='w-11/12 mx-auto space-y-6 py-10 md:py-12'>
            {/* left child */}
            <p className='text-3xl font-semibold opacity-80'>Featured Categories</p>

            {/* right child */}
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
            >
                {
                    allCategories?.map((eachItem, index) => (
                        <SwiperSlide key={index}>
                            <div className='space-y-2 overflow-hidden border border-gray-300 rounded-md flex flex-col  items-center justify-center hover:border-green-500 h-50 cursor-pointer hover:shadow-xl duration-500'>
                                <img
                                    src={eachItem.imageUrl}
                                    alt=""
                                    draggable="false"
                                    loading='lazy'
                                    className='object-cover'
                                />
                                <p className='text-sm font-semibold opacity-60'>{eachItem.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}
