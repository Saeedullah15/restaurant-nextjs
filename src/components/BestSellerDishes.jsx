
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
                <h3>Our best seller dishes</h3>
                <p>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</p>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {
                    dishArr.map(each => <div
                        key={each.id}
                    >
                        <img src={each.image} alt="" />
                        <div className="flex justify-between p-4">
                            <div>
                                <h4>{each.name}</h4>
                                <h3>rating</h3>
                            </div>
                            <div>
                                <button className="bg-redHighlighter3 text-white rounded-full text-sm px-3 py-1">Buy Now</button>
                                <h3>${each.price}</h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BestSellerDishes;