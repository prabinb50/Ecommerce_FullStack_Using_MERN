import React from 'react'

export default function Blog() {
    const data = [
        {
            image: "/blog-img-1.jpg",
            category: 'Recipes',
            title: 'Harissa Chickpeas with Whipped Feta',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '22 April 2023',
            readTime: '12 min',
        },
        {
            image: "/blog-img-2.jpg",
            category: 'Retailer',
            title: 'Almond Butter Chocolate Chip Zucchini Bars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '20 April 2023',
            readTime: '8 min',
        },
        {
            image: "/blog-img-3.jpg",
            category: 'Recipes',
            title: 'Spicy Shrimp Tacos Garlic Cilantro Lime Slaw',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '18 April 2023',
            readTime: '5 min',
        },
        {
            image: "/blog-img-4.jpg",
            category: 'Retailer',
            title: 'Red Chile Chicken Tacos with Creamy Corn',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '16 April 2023',
            readTime: '9 min',
        },
        {
            image: "/blog-img-5.jpg",
            category: 'Company',
            title: 'Basic + Awesome Broccoli Cheese Soup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '12 April 2023',
            readTime: '12 min',
        },
        {
            image: "/blog-img-6.jpg",
            category: 'Retailer',
            title: 'No-Boil Baked Penne with Meatballs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '14 April 2023',
            readTime: '6 min',
        },
        {
            image: "/blog-img-7.jpg",
            category: 'Recipes',
            title: 'Simple Homemade Tomato Soup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '14 April 2023',
            readTime: '6 min',
        },
        {
            image: "/blog-img-8.jpg",
            category: 'Company',
            title: 'Garlic Cream Bucatini with Peas and Asparagus',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '25 April 2023',
            readTime: '6 min',
        },
        {
            image: "/blog-img-9.jpg",
            category: 'Recipes',
            title: 'Cheese Garlic Cream Soup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...',
            date: '25 April 2023',
            readTime: '6 min',
        },
    ];

    return (
        <div className='w-10/12 mx-auto mt-8 space-y-8 '>
            {/* first child */}
            <p className='text-3xl font-semibold'>FreshCart Blog</p>

            {/* second child */}
            <div className='flex items-center justify-between gap-10 overflow-hidden'>
                {/* second child: left */}
                <img src="/blog-img-1.jpg" alt="" className='rounded-md h-90 w-170 transition-transform duration-300 ease-in-out object-cover hover:scale-110 cursor-pointer' />

                {/* second child: right */}
                <div className='space-y-2'>
                    <p className='text-2xl font-semibold hover:text-green-500 cursor-pointer '>Harissa Chickpeas with Whipped Feta</p>
                    <p className='opacity-60 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque bibendum egestas sed quis justo. Integer non rhoncus diam. Nullam eget dapibus lectus, vitae condimentum sem.</p>
                    <div className='flex justify-between items-center opacity-65 text-sm'>
                        <p>22 April 2023</p>
                        <p>Read time:<span className='font-bold'>12min</span></p>
                    </div>

                </div>
            </div>

            {/* third child */}
            <div className='grid grid-cols-3 gap-8'>
                {
                    data.map((eachItem, index) => (
                        <div className='space-y-2 overflow-hidden' key={index}>
                            <img src={eachItem.image} alt="" className='rounded-md cursor-pointer transition-transform duration-300 ease-in-out object-cover hover:scale-110' />
                            <p className='text-sm font-semibold text-green-500 hover:text-green-700 cursor-pointer'>{eachItem.category}</p>
                            <p className='text-lg font-semibold hover:text-green-500 cursor-pointer'>{eachItem.title}</p>
                            <p className='text-sm opacity-60 font-semibold'>{eachItem.description}</p>
                            <div className='flex justify-between items-center opacity-65 text-sm'>
                                <p>{eachItem.date}</p>
                                <p>Read time: <span className='font-bold'>{eachItem.readTime}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
