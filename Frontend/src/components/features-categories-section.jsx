import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import myImage from "../../public/f5.jpg";
import axios from 'axios';

export default function FeaturesCategoriesSection() {

    // const categories = [
    //     {
    //         images: myImage,
    //         name: "Lays 1"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 2"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 3"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 4"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 5"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 6"
    //     },
    //     {
    //         images: myImage,
    //         name: "Lays 7"
    //     }
    // ]

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
        <div className='w-10/12 mx-auto space-y-8  mt-24'>
            {/* left child */}
            <p className='text-3xl font-semibold'>Featured Categories</p>

            {/* right child */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        allCategories?.map((eachItem, index) => (
                            <SwiperSlide key={index}>
                                <div className='space-y-2 overflow-hidden border border-gray-300 rounded-md flex flex-col  items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500'>
                                    <img src={eachItem.imageUrl} alt="" />
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
