// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroOne from '../assets/frontend_assets/nrepro/homeImgOne.JPG';
import heroTow from '../assets/frontend_assets/nrepro/homeImgTow.JPG';
import heroThree from '../assets/frontend_assets/nrepro/homeImgThree.JPG';
import heroFor from '../assets/frontend_assets/nrepro/homeImgFor.JPG';
const Hero = () => {
    const images = [
        heroOne,
        heroTow,
        heroThree,
        heroFor
    ];

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                // scrollbar={{ draggable: true }}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-56 md:h-96 rounded-lg"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            className="w-full h-full object-cover rounded-lg"
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
