"use client"
import { Fade } from "react-awesome-reveal";

const PizzaDelivery = () => {
    return (
        <div className="md:w-1/2">
            <Fade>
                <h2 className="uppercase text-redHighlighter1 text-sm font-bold">pizza delivery</h2>
                <h2 className="text-black text-3xl font-bold my-2">Get Started Today!</h2>
                <hr className="w-20 border-2 border-redHighlighter1" />
                <p className="text-[#231900] font-bold my-2">Everything you need to build an amazing food restaurant responsive website.</p>
                <small>
                    Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.
                </small>


                <div className="flex gap-5 mt-8">
                    <div className="shadow-md md:shadow-none p-2">
                        <img src="/images/Simplification.png" className="w-16 mb-3" alt="" />
                        <p className="text-[#231900] font-semibold">Food Order</p>
                        <small className="md:text-base text-xs">
                            Food is the necessity of life. It provides nutrition, sustenance growth to human body.
                        </small>
                    </div>
                    <div className="shadow-md md:shadow-none p-2">
                        <img src="/images/Simplification.png" className="w-16 mb-3" alt="" />
                        <p className="text-[#231900] font-semibold">Promote Restaurant</p>
                        <small className="md:text-base text-xs">
                            Food is the necessity of life. It provides nutrition, sustenance growth to human body.
                        </small>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PizzaDelivery;