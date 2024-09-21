
const HowWork = () => {
    const worksData = [
        {
            id: 1,
            image: "/images/work1.png",
            title: "Quality Food",
            subTitle: "Contrary to popular belief, Lorem Ipsum is not simply random text"
        },
        {
            id: 2,
            image: "/images/work2.png",
            title: "Quality Food",
            subTitle: "Contrary to popular belief, Lorem Ipsum is not simply random text"
        },
        {
            id: 3,
            image: "/images/work3.png",
            title: "Quality Food",
            subTitle: "Contrary to popular belief, Lorem Ipsum is not simply random text"
        },
        {
            id: 4,
            image: "/images/work4.png",
            title: "Quality Food",
            subTitle: "Contrary to popular belief, Lorem Ipsum is not simply random text"
        },
    ]


    return (
        <div className="mb-20">
            <h4 className="text-center font-bold text-2xl mb-8">How does it work</h4>

            <div className="grid grid-cols-4 gap-5">
                {
                    worksData.map(each =>
                        <div key={each.id} className="flex flex-col justify-center items-center text-center border rounded-lg shadow p-4">
                            <img className="w-16 h-16" src={each.image} alt="" />
                            <h5>{each.title}</h5>
                            <p>{each.subTitle}</p>
                            <a href="">Learn More</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HowWork;