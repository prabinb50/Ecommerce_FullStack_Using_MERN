import React, { useEffect, useState } from 'react'
import SingleProductCard from './single-product-card'
import axios from "axios";

export default function PopularProductSection() {
    const [allProducts, setAllProducts] = useState();

    const fetchedAllProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            // console.log(response.data.data);
            setAllProducts(response.data.data);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    useEffect(() => {
        fetchedAllProducts();
    }, [])

    return (
        <div className='w-11/12 mx-auto space-y-6 py-10 md:py-12'>
            {/* First child */}
            <p className='text-3xl font-semibold opacity-80'>Popular Products</p>

            {/* second child */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allProducts?.map((eachItem, index) => (
                        <SingleProductCard key={index} eachItem={eachItem}></SingleProductCard>
                    ))
                }
            </div>
        </div>
    )
}
