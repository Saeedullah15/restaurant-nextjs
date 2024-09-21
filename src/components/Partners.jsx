import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="mt-20">
            <div className="text-center mb-8">
                <h4 className="text-redHighlighter1 font-miniver text-sm font-bold italic">Partners & Clients</h4>
                <h2 className="text-center text-[#2D2D2D] font-bold text-3xl mb-10">We work with the best pepole</h2>
            </div>

            <div>
                <Marquee>
                    <img src="/images/p1.png" className="mr-20" alt="" />
                    <img src="/images/p2.png" className="mr-20" alt="" />
                    <img src="/images/p3.png" className="mr-20" alt="" />
                    <img src="/images/p4.png" className="mr-20" alt="" />
                    <img src="/images/p5.png" className="mr-20" alt="" />
                    <img src="/images/p6.png" className="mr-20" alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;