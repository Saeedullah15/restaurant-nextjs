"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const feedbacks = [
    {
        id: 1,
        image: "/images/feedback1.png",
        feedback: "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
        name: "Tayyab Sohail",
        designation: "UI/UX Designer"
    },
    {
        id: 2,
        image: "/images/feedback1.png",
        feedback: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cum repellendus recusandae quidem eligendi, voluptas, laboriosam commodi, inventore explicabo delectus nulla placeat amet eos nobis maiores facilis vel modi aliquam enim est praesentium iure? Consectetur asperiores pariatur nesciunt excepturi. Illum?",
        name: "Abraham Jordan",
        designation: "Frontend Developer"
    },
    {
        id: 3,
        image: "/images/feedback1.png",
        feedback: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae maxime facere vitae quo, sit enim animi aliquam beatae explicabo quisquam asperiores labore eius similique magni possimus suscipit! Maiores dolore minima saepe repellat ea iusto ab excepturi eaque suscipit quam.",
        name: "Rewis Lohan",
        designation: "Backend Developer"
    },
]

const CustomerFeedback = () => {
    return (
        <div className="mt-32 flex items-center gap-20">
            <div className="w-2/3">
                <h3>Customer <span className='text-redHighlighter4'>Feedback</span></h3>

                <div>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            feedbacks.map(each => <SwiperSlide
                                key={each.id}
                            >
                                <div>
                                    <p className='my-6'>{each.feedback}</p>
                                    <div className='flex items-center gap-4'>
                                        <img src={each.image} alt="" />
                                        <div>
                                            <h6 className='text-redHighlighter1'>{each.name}</h6>
                                            <p>{each.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>

            <div className="w-1/3 bg-[url('/images/chefBG.png')]">
                <img src="/images/chef.png" alt="" />
            </div>
        </div>
    );
};

export default CustomerFeedback;