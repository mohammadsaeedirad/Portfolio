import React from "react";
import workHistory from "../data/workHistory.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper";

const WorkHistory = () => {
    return (
    <div className="container mx-auto">
    <p className='text-center mb-8 mt-14 text-gray-200 '>my work history</p>
    <Swiper
      style={{
        "--swiper-navigation-color": "#f59e0b",
        "--swiper-pagination-color": "#f59e0b",
      }}
      breakpoints={{
        120: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      
    }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {workHistory.map((work,index)=>{
            return(
            <SwiperSlide key={index} >
                <div className="w-full h-80 relative rounded-lg">
                    <Image src={work.image}
                    alt={work.company}
                    layout="fill"
                    className="rounded-lg min-w-20 min-h-20"
                    objectFit="cover"
                    quality={100} />
                </div>    
                <div className="absolute bg-[#2a465c] bg-opacity-80 hover:bg-opacity-50 transition duration-500  h-full left-0 right-0 rounded-lg" >
                    <p className="text-md mt-4 ml-10 text-start text-white flex" >{work["job-title"]}</p>
                    <a href={work["company-url"]} className="text-xs mt-2 ml-10 text-start text-yellow-400 font-semibold flex" >{work.company}</a>
                    <p className="text-xs mt-2 ml-10 text-start text-white flex" >{work.date}</p>
                    <p className="text-xs mt-2 ml-10 text-start text-white flex" >working on <a className='mx-2 font-semibold text-sky-400' href={work.projectUrl} >{work.description}</a>{work.descriptionAfter}</p>
                </div>
            </SwiperSlide>
            )
        })}
         </Swiper>
    </div>
  );
}
export default WorkHistory;
