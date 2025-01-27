import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import myImage from "../../public/f5.jpg";

export default function FeaturesCategoriesSection() {

    const categories = [
        {
            images: myImage,
            name: "Lays 1"
        },
        {
            images: myImage,
            name: "Lays 2"
        },
        {
            images: myImage,
            name: "Lays 3"
        },
        {
            images: myImage,
            name: "Lays 4"
        },
        {
            images: myImage,
            name: "Lays 5"
        },
        {
            images: myImage,
            name: "Lays 6"
        },
        {
            images: myImage,
            name: "Lays 7"
        }
    ]


    return (
        <div className='w-10/12 mx-auto space-y-8  mt-24'>
            {/* left child */}
            <p className='text-3xl font-semibold'>Featured Categories</p>

            {/* right child */}
            <div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        categories.map((eachItem, index) => (
                            <SwiperSlide key={index}>
                                <div className='space-y-2 overflow-hidden border border-gray-300 rounded-md flex flex-col  items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500'>
                                    <img src={eachItem.images} alt="" height={150} width={150} />
                                    <p className='font-semibold'>{eachItem.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
