import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { memo } from "react";
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
SwiperCore.use([Pagination,Navigation]);
const Intrests = () => {
  const items=[
      {img:'/coding.svg',url:'/'},
      {img:'/books.svg',url:'/'},
      {img:'/guitar.svg',url:'/'},
      {img:'/movies.svg',url:'/'},
      {img:'/coffee.svg',url:'/'},
      {img:'/pizza.svg',url:'/'},
  ]    
  return (
    <>
      <p className='text-center mb-8 mt-14 text-gray-200 '>Interests</p>
        <Swiper
          className="swiper2 "
          slidesPerView={3}
          spaceBetween={0}
         
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            120: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
           
          }}
          >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={`h${index}`} className="swiper-slide2 " >
                      <div className='transition ease-in-out hover:scale-125 duration-300 flex justify-center h-20'>
                        <Image
                          src={item.img}
                          alt='interests'
                          width={60}
                          height={60}
                        />
                      </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  );
};

export default memo(Intrests);
