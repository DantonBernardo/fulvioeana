import { MdStar } from "react-icons/md";
import { feedbacks } from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      className= "h-[35vh] p-4 2xl:h-[40vh]"
      modules={[Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        0:{
          slidesPerView: 1,
        },
        650:{
          slidesPerView: 2,
        },
        1000:{
          slidesPerView: 3,
        },
        1300:{
          slidesPerView: 4,
        },
        1536:{
          slidesPerView: 5,
        }
      }}
    >
      {feedbacks.map((f, i) => (
        <SwiperSlide
          key={i}
          className="flex items-center justify-center rounded-2xl bg-neutral-200"
        >
          <div className="flex flex-col justify-between h-full p-4">
            
            {/* Top */}
            <div className="
              flex items-center 
              w-full max-w-[150px]
              overflow-hidden">
              <img
                src="/assets/images/profileIcon.svg"
                className="w-6 h-6 shrink-0"
              />
              
              <h1 className="ml-2 font-bold text-lg truncate">
                {f.name}
              </h1>
            </div>

            {/* Description */}
            <p className="
              text-[0.9rem]
              my-2
            ">{f.description}</p>

            {/* Bottom */}
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <MdStar key={i} className="text-yellow-400" size={24} />
              ))}
            </div>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
