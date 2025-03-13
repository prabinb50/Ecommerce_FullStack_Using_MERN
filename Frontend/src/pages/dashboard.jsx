import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import CategoryCreate from '../components/category-create';

export default function Dashboard() {

    const [name, setname] = useState("");
    const [descrption, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [previousPrice, setPreviousPrice] = useState(null);
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [IsSubmitting, setIsSubmitting] = useState(false);

    // console.log(name, descrption, price, previousPrice, category, image)

    const createProduct = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", descrption);
            formData.append("price", price);
            formData.append("previousPrice", previousPrice);
            formData.append("category", category);
            formData.append("imageUrl", image);

            const response = await axios.post("http://localhost:3000/products", formData);
            console.log(response);
            setIsSubmitting(false);
            setname("");
            setDescription("");
            setPrice("");
            setPreviousPrice("");
            setCategory("");
            setImage("");

        } catch (error) {
            console.log("Something went wrong", error);
            setIsSubmitting(false);
        }
    }

    // Fetch All Products
    const [allProducts, setAllProducts] = useState();
    const fetchedAllProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setAllProducts(response.data.data);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }

    useEffect(() => {
        fetchedAllProducts();
    }, [])

    const [isDeleting, setIsDeleting] = useState(false);
    const handleDeleteProduct = async (_id) => {
        try {
            setIsDeleting(true);
            const response = await axios.delete(`http://localhost:3000/products/${_id}`)
            setIsDeleting(false);
            fetchedAllProducts();
        } catch (error) {
            setIsDeleting(false);
            console.log("Something went wrong", error);
        }
    }

    return (
        <div className='w-10/12 mx-auto'>

            <form className=' flex flex-col gap-4 border p-6 shadow-xl' onSubmit={createProduct} >
                <input type="text" placeholder='Enter Product Name' className='border border-gray-400 p-2 rounded-md' value={name} onChange={(e) => setname(e.target.value)} required />

                <textarea placeholder='Enter Product Description ' className='border border-gray-400 p-2 rounded-md' value={descrption} onChange={(e) => setDescription(e.target.value)} ></textarea>

                <input type="number" placeholder='Enter Price' className='border border-gray-400 p-2 rounded-md' value={price} onChange={(e) => setPrice(e.target.value)} required />

                <input type="number" placeholder='Enter Previous Price' className='border border-gray-400 p-2 rounded-md' value={previousPrice} onChange={(e) => setPreviousPrice(e.target.value)} required />

                <input type="text" placeholder='Enter Category' className='border border-gray-400 p-2 rounded-md' value={category} onChange={(e) => setCategory(e.target.value)} required />

                <input type="file" className='border border-gray-400 p-2 rounded-md' onChange={(e) => setImage(e.target.files[0])} required />

                <button className='bg-green-500 border-none text-white px-6 py-3 flex items-center justify-center gap-1' type='submit' disabled={IsSubmitting}>{IsSubmitting && <LoaderCircle className='animate-spin' size={20}></LoaderCircle>}<span>Create Product</span></button>
            </form>

            <div className='space-y-4'>
                {allProducts?.map((item) => (
                    <div key={item._id}>{item.name} <button className='text-white bg-red-500 px-4 py-2 border-none rounded-md' onClick={() => handleDeleteProduct(item._id)}>{isDeleting ? "Deleting" : "Delete"}</button></div>
                ))}
            </div>

            <CategoryCreate></CategoryCreate>
        </div>
    )
}
