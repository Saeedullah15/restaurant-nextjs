import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import BestSellerDishes from "@/components/BestSellerDishes";
import CustomerFeedback from "@/components/CustomerFeedback";
import Footer from "@/components/Footer";
import HeroChoose from "@/components/HeroChoose";
import HowWork from "@/components/HowWork";
import LatestNews from "@/components/LatestNews";
import Partners from "@/components/Partners";
import PizzaDelivery from "@/components/PizzaDelivery";
import TeamMember from "@/components/TeamMember";

export default function Home() {
    return (
        <>
            <Banner></Banner>

            <section className="flex md:flex-row flex-col-reverse gap-20 justify-between p-2 md:p-0 mt-20 md:max-w-4xl mx-auto">
                <PizzaDelivery></PizzaDelivery>
                <AboutUs></AboutUs>
            </section>

            <div className="md:max-w-5xl mx-auto p-2 md:p-7 my-10">
                <section>
                    <HeroChoose></HeroChoose>
                </section>

                <section>
                    <BestSellerDishes></BestSellerDishes>
                </section>
            </div>

            <section className="md:max-w-5xl mx-auto">
                <CustomerFeedback></CustomerFeedback>
            </section>

            <TeamMember></TeamMember>

            <div className="md:max-w-5xl mx-auto p-2 md:p-7 mt-20 md:mt-52">
                <section>
                    <HowWork></HowWork>
                </section>

                <section>
                    <LatestNews></LatestNews>
                </section>

                <section>
                    <Partners></Partners>
                </section>
            </div>

            <Footer></Footer>
        </>
    );
}
