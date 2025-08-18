import React, { useEffect, useState } from 'react'
import myImage from "../../public/f1.jpg"
import ReactStars from 'react-stars'
import SingleProductCard from './single-product-card'
import axios from "axios";

export default function PopulaeProductSection() {

    // const products = [
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 1",
    //         productName: "Haldirams Sev Bhujia 1",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 2 ",
    //         productName: "Haldirams Sev Bhujia 2",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 3",
    //         productName: "Haldirams Sev Bhujia 3",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 4",
    //         productName: "Haldirams Sev Bhujia 4",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 5",
    //         productName: "Haldirams Sev Bhujia 5",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 6",
    //         productName: "Haldirams Sev Bhujian 6",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 7",
    //         productName: "Haldirams Sev Bhujia 7",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 8",
    //         productName: "Haldirams Sev Bhujia 8",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 9",
    //         productName: "Haldirams Sev Bhujia 9",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 10",
    //         productName: "Haldirams Sev Bhujia 10",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 10",
    //         productName: "Haldirams Sev Bhujia 10",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     },
    //     {
    //         image: myImage,
    //         categoryName: "Snack & Munchies 10",
    //         productName: "Haldirams Sev Bhujia 10",
    //         rating: 4.5,
    //         review: 4,
    //         price: 200,
    //         previousPrice: 250
    //     }
    // ]

    // Hooks (useState, useEffect, useRef, useContext)
    // 1) useState Hook
    // const [variable, setterFunction] = useState(initialValue)    
    // const [name, setName] = useState("Pabin Joshi");
    // console.log(name);

    // 2) useEffect Hook -> program kati khera ra kun bela run hunxa vaneyra determine garxa
    // useEffect runs when the page reload or its dependency chnages.
    // [] -> dependency array
    // const a = 5;
    // useEffect(() => {
    //     console.log("I am useEffect");
    // }, [a]);

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
            {/* <button onClick={() => setName("Prabin Updated")}>Chnage Name</button> */}
            {/* First child */}
            <p className='text-3xl font-semibold'>Popular Products</p>

            {/* second child */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                {
                    allProducts?.map((eachItem, index) => (
                        <SingleProductCard key={index} eachItem={eachItem}></SingleProductCard>

                        // <div key={index} className='border border-gray-300 rounded-md flex flex-col items-center p-4 space-y-1.5'>
                        //     <img src={eachItem.image} alt="" />
                        //     <p className='font-semibold opacity-50 text-xs'>{eachItem.categoryName}</p>
                        //     <p className='font-semibold text-sm'>{eachItem.productName}</p>

                        //     <div className='flex items-center gap-2'>
                        //         <ReactStars
                        //             count={5}
                        //             size={18}
                        //             value={4.5}
                        //             color2={'#ffd700'} />

                        //         <p className='font-semibold opacity-70 text-sm'>{eachItem.rating} ({eachItem.review})</p>
                        //     </div>

                        //     <div className='flex items-center justify-between w-full'>
                        //         <p className='font-semibold'>${eachItem.price} <span className='opacity-70 '>${eachItem.previousPrice}</span></p>
                        //         <button className='bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-sm'> + Add</button>
                        //     </div>
                        // </div>
                    ))
                }
            </div>
        </div>
    )
}
