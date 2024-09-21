import { FaArrowRight } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

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
                <h3 className="text-center text-[#2D2D2D] font-bold text-3xl mb-2">Latest news & Blog</h3>
                <p className="text-[#828282] w-1/2 mx-auto text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum est perspiciatis iusto iste quidem repellendus odio dolorum quam possimus voluptates!</p>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {
                    newsData.map(each =>
                        <div key={each.id} className="p-2 shadow">
                            <img src={each.image} alt="" />
                            <div className="p-2">
                                <div className="flex gap-6 my-2">
                                    <p className="text-[#333333] flex items-center gap-1 font-semibold text-xs">
                                        <span className="text-redHighlighter1"><IoCalendarNumber /></span>
                                        <span className="opacity-40">{each.date}</span>
                                    </p>
                                    <p className="text-[#333333] flex items-center gap-1 font-semibold text-xs">
                                        <span className="text-redHighlighter1"><TiMessages /></span>
                                        <span className="opacity-40">Comments ({each.comment})</span>
                                    </p>
                                </div>
                                <h3 className="text-[#333333] font-bold">{each.title}</h3>
                                <p className="mt-2 mb-5 text-xs">{each.subTitle}</p>
                                <a href="" className="flex items-center gap-2 text-[#4F4F4F] text-xs font-semibold opacity-60">Read More <span><FaArrowRight /></span></a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default LatestNews;