import React, { useRef } from "react";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='container my-20 mx-auto relative'>
      <p className='text-center mb-8 text-xl text-gray-100 '>Experiences</p>
      <div className=' text-zinc-900 font-bold z-20 '>
        <div
          ref={prevRef}
          className='cursor-pointer absolute right-6 md:left-16 flex justify-center items-center w-8 h-8 bg-[#febf35] rounded-2xl top-0'
        >
          <Image alt="arrow" src='/next.png' width={20} height={20} />
        </div>
        <div
          ref={nextRef}
          className='cursor-pointer absolute right-16 md:left-6 flex justify-center items-center w-8 h-8 bg-[#febf35] rounded-2xl top-0'
        >
          <Image
            src='/next.png'
            alt="arrow"
            className='rotate-180'
            width={20}
            height={20}
          />
        </div>
      </div>

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
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
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
                  <h4 className='font-bold text-2xl tracking-tight text-white'>
                    {work["job-title"]}
                  </h4>
                  <a
                  target="_blank"
                    href={work["company-url"]}
                    className='text-xs text-[#febf35] font-semibold text-center'
                  >
                    <h5>{work.company}</h5>
                  </a>

                  <p className='font-normal mb-3 mt-2 text-gray-300'>
                    {work.description} {work.descriptionAfter}
                  </p>

                  <div className='flex flex-col-reverse items:center lg:flex-row lg:justify-between lg:items-end'>
                    <a
                    target="_blank"
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
