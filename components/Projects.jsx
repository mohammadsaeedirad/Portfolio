import React, {useRef} from "react";
import sampleProjects from "../data/sampleProjects.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper";

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='container my-20  mx-auto relative'>
      <p className='text-center mb-8 text-xl text-gray-100  '>
        Top Projects
      </p>
      <div className=" text-zinc-900 font-bold z-20 " >
      <div
        ref={prevRef}
        className='cursor-pointer absolute right-6 md:left-16 flex justify-center items-center w-8 h-8 bg-[#febf35] rounded-2xl top-0'>
        {">"}
      </div>
      <div
        ref={nextRef}
        className='cursor-pointer absolute right-16 md:left-6 flex justify-center items-center w-8 h-8 bg-[#febf35] rounded-2xl top-0'
        >
        {"<"}
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
            spaceBetween: 15,
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
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {sampleProjects.map((work, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='w-full h-80 relative rounded-lg'>
                <Image
                  src={work.image}
                  alt={work.name}
                  layout='fill'
                  className='rounded-lg'
                  objectFit='cover'
                  quality={100}
                />
              </div>
              <div className='absolute bg-slate-800 bg-opacity-40 hover:bg-opacity-10 transition duration-500  h-full left-0 right-0 rounded-lg'>
                <p className='text-md mt-4 ml-10 text-center font-semibold text-white flex'>
                  {work.title}
                </p>
                <p className='text-xs mt-2 ml-10 text-start text-white flex'>
                  {work.descriptionBefore}
                  <a
                    className='mx-2 font-semibold text-[#febf35]'
                    href={work.projectUrl}
                  >
                    {work.name}
                  </a>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Projects;
