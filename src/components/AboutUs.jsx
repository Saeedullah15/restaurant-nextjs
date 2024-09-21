import { IoPlayOutline } from "react-icons/io5";

const AboutUs = () => {
    return (
        <div className="w-1/2">
            <h3 className="text-redHighlighter1">About Us _____</h3>
            <h1>Food is an important part Of a balanced Diet</h1>
            <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </small>
            <div className="flex gap-3 items-center">
                <button className="btn btn-sm bg-redHighlighter2 text-white">Show More</button>
                <button className="btn btn-circle bg-redHighlighter2">
                    <IoPlayOutline className="text-2xl text-white ml-1" />
                </button>
                <span>Watch Video</span>
            </div>
        </div>
    );
};

export default AboutUs;