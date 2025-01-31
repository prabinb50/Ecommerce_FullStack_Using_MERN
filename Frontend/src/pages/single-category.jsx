import React from 'react'
import SingleProductCard from '../components/single-product-card'
import myImage from "../../public/f1.jpg"

export default function SingleCategory() {
    const products = [
        {
            image: myImage,
            categoryName: "Snack & Munchies 1",
            productName: "Haldirams Sev Bhujia 1",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 2 ",
            productName: "Haldirams Sev Bhujia 2",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 3",
            productName: "Haldirams Sev Bhujia 3",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 4",
            productName: "Haldirams Sev Bhujia 4",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 5",
            productName: "Haldirams Sev Bhujia 5",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 6",
            productName: "Haldirams Sev Bhujian 6",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 7",
            productName: "Haldirams Sev Bhujia 7",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 8",
            productName: "Haldirams Sev Bhujia 8",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 9",
            productName: "Haldirams Sev Bhujia 9",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 10",
            productName: "Haldirams Sev Bhujia 10",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 10",
            productName: "Haldirams Sev Bhujia 10",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        },
        {
            image: myImage,
            categoryName: "Snack & Munchies 10",
            productName: "Haldirams Sev Bhujia 10",
            rating: 4.5,
            review: 4,
            price: 200,
            previousPrice: 250
        }
    ]
    return (

        <div className='w-10/12 mx-auto'>
            <div className='bg-gray-300 py-24 text-5xl font-semibold text-center'>
                Snacks & Munchies
            </div>

            {/* List of Products */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                {
                    products.map((eachItem, index) => (
                        <SingleProductCard key={index} eachItem={eachItem}></SingleProductCard>
                    ))
                }
            </div>

        </div>
    )
}
