import { IoPlayOutline } from "react-icons/io5";

const AboutUs = () => {
    return (
        <div className="w-1/2">
            <h3 className="text-redHighlighter1 font-miniver text-sm font-bold italic">About Us _____</h3>
            <h1 className="font-bold text-[#333333] text-3xl mt-1 mb-3">Food is an important part Of a balanced Diet</h1>
            <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </small>
            <div className="flex gap-3 items-center mt-3">
                <button className="bg-redHighlighter2 px-4 py-2 rounded-md font-semibold text-xs text-white">Show More</button>
                <button className="rounded-full w-8 h-8 bg-redHighlighter2">
                    <IoPlayOutline className="text-lg text-white ml-2" />
                </button>
                <span className="text-[#333333] font-bold text-xs">Watch Video</span>
            </div>
        </div>
    );
};

export default AboutUs;