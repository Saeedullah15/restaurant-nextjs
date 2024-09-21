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
        <div className="mb-20 flex items-center gap-20">
            <div className="w-1/2">
                <img src="/images/choose.png" alt="" />
            </div>

            <div className="w-1/2">
                <h3 className="text-black font-semibold text-3xl mb-14">Why People Choose us?</h3>
                <div className="space-y-14">
                    {
                        cardArr.map(each => <div
                            key={each.id}
                            className="flex gap-4 shadow-md rounded-lg"
                        >
                            <img className="w-20 h-20" src={each.image} alt="" />
                            <div>
                                <h4>{each.name}</h4>
                                <p>{each.details}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroChoose;