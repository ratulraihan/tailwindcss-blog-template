import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="py-8 container-fluid ">

            <div className="flex flex-col justify-start gap-8 lg:flex-row">
                <div className="w-full lg:w-1/3 ">
                    <a href="">
                        <Image src="/logo.svg" alt="LOGO" width={120} height={60} />
                    </a>
                    <p className="py-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, voluptatum.
                    </p>
                    <div className="flex py-4 gap-4 md:gap- [&_a]:bg-primary-600 [&_a]:text-white [&_a]:rounded-full [&_a]:h-8 [&_a]:w-8 
                        [&_a]:items-center [&_a]:justify-center [&_a]:flex">

                        <Link href="/" >
                            <FaFacebookF className="w-4 h-4" />
                        </Link>
                        <Link href="/">
                            <FaInstagram className="w-4 h-4" />
                        </Link>
                        <Link href="/">
                            <FaLinkedinIn className="w-4 h-4" />
                        </Link>
                        <Link href="/">
                            <FaTwitter className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 ml-auto text-sm gap-x-10 gap-y-8 lg:gap-y-20 md:gap-32 md:gap-y-12" >
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Business</h2>
                        <li><a href="">Startup</a></li>
                        <li><a href="">Employee</a></li>
                        <li><a href="">Success</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Markets</a></li>
                    </div>
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Technology</h2>
                        <li><a href="">Innovate</a></li>
                        <li><a href="">Gadget</a></li>
                        <li><a href="">Innovative Cities</a></li>
                        <li><a href="">Upstarts</a></li>
                        <li><a href="">Future Tech</a></li>
                    </div>
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Travel</h2>
                        <li><a href="">Destination</a></li>
                        <li><a href="">Food & Drink</a></li>
                        <li><a href="">Stay</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Videos</a></li>
                    </div>
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Entertainment</h2>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Artist</a></li>
                        <li><a href="">Television</a></li>
                        <li><a href="">Influencer</a></li>
                        <li><a href="">Viral</a></li>
                    </div>
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Features</h2>
                        <li><a href="">As Equals</a></li>
                        <li><a href="">Call to Earth</a></li>
                        <li><a href="">Freedom Project</a></li>
                        <li><a href="">Inside Asia</a></li>
                        <li><a href="">2 Degress</a></li>
                    </div>
                    <div className="items-center list-none">
                        <h2 className="font-bold lg:text-xl">Weather</h2>
                        <li><a href="">Climate</a></li>
                        <li><a href="">Strom Tracker</a></li>
                        <li><a href="">Wildfire Tracker</a></li>
                        <li><a href="">Earthquake</a></li>
                        <li><a href="">Video</a></li>
                    </div>

                </div>
            </div >
        </div >
    );
}