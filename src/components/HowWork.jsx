"use client"
import { JackInTheBox } from "react-awesome-reveal";

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
            <h4 className="text-center text-[#2D2D2D] font-bold text-3xl mb-8">How does it work</h4>

            <div className="grid grid-cols-4 gap-5">
                {
                    worksData.map(each =>
                        <JackInTheBox>
                            <div key={each.id} className="flex flex-col justify-center items-center text-center border rounded-lg shadow p-4">
                                <img className="w-16 h-16" src={each.image} alt="" />
                                <h5 className="text-xl font-semibold mt-3">{each.title}</h5>
                                <p className="text-[#666666] my-2 text-xs font-semibold">{each.subTitle}</p>
                                <a href="" className="font-semibold hover:text-[#F03328]">Learn More</a>
                            </div>
                        </JackInTheBox>
                    )
                }
            </div>
        </div>
    );
};

export default HowWork;