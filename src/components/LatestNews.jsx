
const LatestNews = () => {
    const newsData = [
        {
            id: 1,
            image: "/images/news1.png",
            date: "02 Jan 2024",
            comment: "05",
            title: "Chocolate Truffle Cake With Honey Flavor",
            subTitle: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est."
        },
        {
            id: 2,
            image: "/images/news1.png",
            date: "08 March 2024",
            comment: "28",
            title: "Chocolate Truffle Cake With Honey Flavor",
            subTitle: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est."
        },
        {
            id: 3,
            image: "/images/news1.png",
            date: "29 July 2024",
            comment: "15",
            title: "Chocolate Truffle Cake With Honey Flavor",
            subTitle: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est."
        }
    ]

    return (
        <div>
            <div className="mb-8 text-center">
                <h3>Latest news & Blog</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum est perspiciatis iusto iste quidem repellendus odio dolorum quam possimus voluptates!</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {
                    newsData.map(each =>
                        <div key={each.id} className="p-2 shadow">
                            <img src={each.image} alt="" />
                            <div className="flex gap-6">
                                <p>{each.date}</p>
                                <p>Comments ({each.comment})</p>
                            </div>
                            <h3>{each.title}</h3>
                            <p>{each.subTitle}</p>
                            <a href="">Read More</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LatestNews;