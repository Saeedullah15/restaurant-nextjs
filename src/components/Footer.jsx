import { BsEnvelopeOpen } from "react-icons/bs";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaPaperPlane, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="mt-20 bg-redHighlighter2 text-white">
                <footer className="footer p-10 max-w-5xl mx-auto">
                    <form>
                        <h2 className="uppercase text-2xl text-white font-semibold">Restaurant</h2>
                        <p className="text-xs my-2">Subscribe our newsletter and <br /> get discount 25%off</p>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input join-item" />
                                <button className="btn bg-redHighlighter1 border-none text-white join-item"><FaPaperPlane /></button>
                            </div>
                        </fieldset>
                        <div className="flex justify-center items-start gap-3 mt-2 text-xl">
                            <FaPinterest className="text-red-500"></FaPinterest>
                            <FaTwitter className="text-blue-600"></FaTwitter>
                            <FaFacebook className="text-blue-800"></FaFacebook>
                            <FaInstagram className="text-red-500"></FaInstagram>
                            <FaYoutube className="text-red-500 text-2xl"></FaYoutube>
                        </div>
                    </form>
                    <nav>
                        <h2 className="font-semibold mb-2">Contact Us</h2>
                        <a className="flex items-center gap-2"><span><CiLocationOn className="text-lg" /></span> 3517 W. Gray St. Utica, Pennsylvania 57867</a>
                        <a className="flex items-center gap-2"><span><CiPhone className="text-lg" /></span>(480) 555-0103</a>
                        <a className="flex items-center gap-2"><span><BsEnvelopeOpen className="text-sm" /></span>M.Alyaqout@4house.Co</a>
                        <a className="flex items-center gap-2"><span><MdOutlineWatchLater className="text-lg" /></span>Sun - Sat / 10:00 AM - 8:00 PM</a>
                    </nav>
                    <nav className="ml-6">
                        <h2 className="font-semibold">Links</h2>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Our Menu</a>
                        <a className="link link-hover">Team</a>
                        <a className="link link-hover">FAQ</a>
                    </nav>
                    <nav className="ml-10">
                        <h2 className="font-semibold mb-2">Instagram Gallery</h2>
                        <div className="grid grid-cols-3 gap-1">
                            <img src="/images/g1.png" alt="" />
                            <img src="/images/g2.png" alt="" />
                            <img src="/images/g3.png" alt="" />
                            <img src="/images/g4.png" alt="" />
                            <img src="/images/g5.png" alt="" />
                            <img src="/images/g6.png" alt="" />
                        </div>
                    </nav>
                </footer>
            </div>

            <div className="bg-redHighlighter1 text-white">
                <footer className="p-4 max-w-5xl mx-auto text-xs">
                    <div className="flex justify-between px-7">
                        <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
                        <div className="flex gap-10">
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>Partner</p>
                        </div>
                    </div>

                    {/* <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </aside> */}
                </footer>
            </div>
        </>
    );
};

export default Footer;