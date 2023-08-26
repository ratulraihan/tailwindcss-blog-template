"use client"; // This is a client component 
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
import 'swiper/css';

export default function HeroSection() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="container-fluid"
        >
            <SwiperSlide>
                <div className="items-center justify-between mx-4 overflow-hidden bg-white lg:flex lg:py-14">

                    <Image src="/joker2.jpg" alt="LOGO" width={520} height={220} className="rounded-lg" />
                    <div className="lg:pl-8 lg:pr-14 ">

                        <h2 className="py-4 text-4xl font-bold">Where TO Watch Joker: Chapter 2 </h2>
                        <p className="lg:py-4">
                            there a lot of things to do in this world, but watching joker is the best thing to do.there a lot of things to do in this world, but watching joker is the best thing to do.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items-center justify-between p-4 overflow-hidden bg-white lg:flex lg:py-14 ">
                    <Image src="/joker2.jpg" alt="LOGO" width={520} height={220} className="rounded-lg" />
                    <div className="lg:pl-8 lg:pr-14 ">
                        <h2 className="py-4 text-4xl font-bold">Where TO Watch Joker: Chapter 2 </h2>
                        <p className="lg:py-4">
                            there a lot of things to do in this world, but watching joker is the best thing to do.there a lot of things to do in this world, but watching joker is the best thing to do.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="items-center justify-between p-4 overflow-hidden bg-white lg:flex lg:py-14 ">
                    <Image src="/joker2.jpg" alt="LOGO" width={520} height={220} className="rounded-lg" />
                    <div className="lg:pl-8 lg:pr-14 ">
                        <h2 className="py-4 text-4xl font-bold">Where TO Watch Joker: Chapter 2 </h2>
                        <p className="lg:py-4">
                            there a lot of things to do in this world, but watching joker is the best thing to do.there a lot of things to do in this world, but watching joker is the best thing to do.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

