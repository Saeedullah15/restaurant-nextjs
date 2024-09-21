'use client'

import { motion } from "framer-motion";
import { useState } from "react";

const Banner = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [bgColor, setBgColor] = useState("#880808");

    const images = [
        { large: '/images/bl1.png', small: '/images/bs1.png' },
        { large: '/images/bl2.png', small: '/images/bs2.png' },
        { large: '/images/bl3.png', small: '/images/bs3.png' },
        { large: '/images/bl4.png', small: '/images/bs4.png' },
        // Add more images as needed
    ];

    const colors = ["#880808", "#0A4669", "#953553", "#006666"]; // Colors corresponding to each image

    const handleImageChange = (index) => {
        setActiveImage(index);
        setBgColor(colors[index]);
    };


    return (
        <motion.div animate={{ backgroundColor: bgColor }} className="banner-container p-5 rounded-b-xl">
            <h2 className="uppercase text-2xl text-white font-bold mb-20">Restaurant</h2>
            <div className="flex justify-between items-center">
                <div className="w-1/2 pl-4">
                    <div className="text-white font-semibold">
                        <h1 className="text-5xl uppercase">Breakfast</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quibusdam! Neque repellat nisi in reiciendis aliquid iusto ut nesciunt adipisci accusamus, illo accusantium fuga tenetur, culpa, magnam doloremque ullam molestiae eos veritatis enim? Dolore vitae harum cum repellat? Quisquam architecto dolore dolorem autem quis at, dolores voluptas debitis vel neque?</p>
                    </div>
                    <div className="thumbnails flex gap-4 mt-3">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.small}
                                onClick={() => handleImageChange(index)}
                                className={`thumbnail cursor-pointer w-32 h-32 pb-3 ${activeImage === index ? "border-b-2" : ""}`}
                            />
                        ))}
                    </div>
                    <div className="">
                        <label className="input input-bordered rounded-full flex items-center gap-2 my-16">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow" placeholder="Search..." />
                        </label>
                    </div>
                </div>

                <motion.img
                    key={activeImage}
                    src={images[activeImage].large}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="large-banner w-1/4"
                />
            </div>
        </motion.div>
    );
};

export default Banner;