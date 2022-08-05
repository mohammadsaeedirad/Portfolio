import React from "react";
import workHistory from "../data/workHistory.json";
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
    <div className='container my-20 mx-auto'>
      <p className='text-center mb-8 text-xl text-gray-100 '>
        Experiences
      </p>
      <Swiper
        style={{
          "--swiper-navigation-color": "#febf35",
          "--swiper-pagination-color": "#febf35",
        }}
        breakpoints={{
          120: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {workHistory.map((work, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='w-full rounded-lg max-w-full  bg-slate-900'>
                <div className='relative w-full h-64'>
                <a href={work["company-url"]}>
                  <div className='absolute z-20 bg-slate-800 bg-opacity-40 hover:bg-opacity-10 transition duration-500  h-full top-0 left-0 right-0 rounded-t-lg '></div>
                  <Image
                    src={work.image}
                    alt={work.company}
                    layout='fill'
                    className='rounded-t-lg min-w-20 min-h-20'
                    objectFit='cover'
                    quality={100}
                  />
                   </a>

                </div>
                <div className='p-5 w-full '>
                  <h5 className='font-bold text-2xl tracking-tight text-white'>
                    {work["job-title"]}
                  </h5>
                  <a
                    href={work["company-url"]}
                    className='text-xs text-[#febf35] font-semibold text-center'
                  >
                    {work.company}
                  </a>

                  <p className='font-normal mb-3 mt-2 text-gray-300'>
                    {work.description} {work.descriptionAfter}
                  </p>

                  <div className='flex flex-col-reverse items:center lg:flex-row lg:justify-between lg:items-end'>
                    <a
                      href={work["company-url"]}
                      className='text-white self-center text-center max-w-40 transition duration-300  bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-skyblue-300 font-medium rounded-lg text-sm px-3 py-2  inline-flex items-center'
                    >
                      visit website
                    </a>
                    <p className='font-normal text-xs  mb-3 text-gray-100'>            
                      {work.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default WorkHistory;
