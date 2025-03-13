import axios from 'axios';
import React, { useState } from 'react'

export default function CategoryCreate() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    // console.log(name)
    // console.log(image)

    const [isCreating, setCreating] = useState(false);
    const createCategory = async () => {
        try {
            setCreating(true);
            const response = await axios.post("http://localhost:3000/categories");
            setCreating(false);

        } catch (error) {
            console.log("Something went wrong", error);
            setCreating(false);
        }
    }
    return (
        <div>
            <form onSubmit={createCategory}>
                <input type="text" placeholder='Enter Category Name' className='border border-gray-400 p-2 rounded-md' value={name} onChange={(e) => setName(e.target.value)} />

                <input type="file" placeholder='Select the File' className='border border-gray-400 p-2 rounded-md' onChange={(e) => setImage(e.target.files[0])} />

                <button type='submit' className='px-12 py-3 bg-green-500 text-white'>Create Category</button>
            </form>
        </div>
    )
}
