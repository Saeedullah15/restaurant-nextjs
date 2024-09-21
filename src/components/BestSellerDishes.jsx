"use client"

import { Bounce } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const BestSellerDishes = () => {
    const dishArr = [
        {
            id: 1,
            image: "/images/dish1.png",
            name: "Breakfast Food",
            price: 230
        },
        {
            id: 2,
            image: "/images/dish2.png",
            name: "Breakfast Food",
            price: 230
        },
        {
            id: 3,
            image: "/images/dish3.png",
            name: "Breakfast Food",
            price: 230
        },
        {
            id: 4,
            image: "/images/dish4.png",
            name: "Breakfast Food",
            price: 230
        },
        {
            id: 5,
            image: "/images/dish5.png",
            name: "Breakfast Food",
            price: 230
        },
        {
            id: 6,
            image: "/images/dish6.png",
            name: "Breakfast Food",
            price: 230
        }
    ]

    return (
        <div>
            <div className="text-center w-2/3 mx-auto">
                <h3 className="text-3xl text-[#1F1F1F] font-semibold">Our best seller dishes</h3>
                <p className="text-[#5C5C5C] my-4 text-sm font-semibold">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</p>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    dishArr.map(each =>

                        <div key={each.id} className="shadow rounded-lg">
                            <Bounce>
                                <img src={each.image} alt="" />
                                <div className="flex justify-between p-4">
                                    <div className="space-y-6">
                                        <h4 className="text-[#000000] font-semibold text-xl">{each.name}</h4>
                                        <div className="flex gap-1">
                                            <FaStar className="text-[#FF9E0C]" />
                                            <FaStar className="text-[#FF9E0C]" />
                                            <FaStar className="text-[#FF9E0C]" />
                                            <FaStar className="text-[#FF9E0C]" />
                                            <FaStar className="text-[#FF9E0C]" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <button className="bg-redHighlighter3 text-white rounded-full text-sm px-3 py-1">Buy Now</button>
                                        <h3 className="text-black font-bold text-2xl ml-5 flex items-center"><FaDollarSign />{each.price}</h3>
                                    </div>
                                </div>
                            </Bounce>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default BestSellerDishes;