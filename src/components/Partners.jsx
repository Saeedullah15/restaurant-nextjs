import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="mt-20">
            <div className="text-center mb-8">
                <h4>Partners & Clients</h4>
                <h2>We work with the best pepole</h2>
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