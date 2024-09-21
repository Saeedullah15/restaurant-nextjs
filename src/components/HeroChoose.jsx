"use client"
import { Slide } from "react-awesome-reveal";

const HeroChoose = () => {
    const cardArr = [
        {
            id: 1,
            image: "/images/delivery.png",
            name: "Convenient and Reliable",
            details: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free."
        },
        {
            id: 2,
            image: "/images/option.png",
            name: "Variety of Options",
            details: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving."
        },
        {
            id: 3,
            image: "/images/burger.png",
            name: "Eat Burger",
            details: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience."
        }
    ]

    return (
        <div className="mb-20 flex md:flex-row flex-col items-center gap-20">
            <div className="md:w-1/2">
                <img src="/images/choose.png" alt="" />
            </div>

            <div className="md:w-1/2">
                <Slide>
                    <h3 className="text-[#2D2D2D] font-semibold text-3xl mb-10">Why People Choose us?</h3>
                    <div className="space-y-10">
                        {
                            cardArr.map(each => <div
                                key={each.id}
                                className="flex gap-4 shadow-md rounded-lg p-4"
                            >
                                <img className="w-14 h-14" src={each.image} alt="" />
                                <div>
                                    <h4 className="text-[#000000] font-semibold mb-2 text-xl">{each.name}</h4>
                                    <p className="text-xs text-[#404040] font-semibold">{each.details}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default HeroChoose;