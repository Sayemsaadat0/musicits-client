import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from '../../../../assets/home/slider(1).png'



const PopularClasses = () => {
    return (
        <div className='mb-10'>
            <SectionTitle title1={'Popular Classes: Learn What the'} title2={'Pros Play'} subtitle={'Explore our popular classes section and gain access to the lessons that are in high demand among aspiring musicians. These carefully curated courses are designed to teach you the techniques and styles favored by professional musicians across various genres.'}></SectionTitle>
            <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper p-5 mt-10"
      >
        <SwiperSlide><img src='https://i.pinimg.com/564x/d2/8f/44/d28f440e2bdb78c3c50fb24eb4f02897.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/9e/85/b8/9e85b8673139d952521973586dfdf4ab.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/d7/82/6f/d7826f30c292c1f0ec5dc0c43cf3f82c.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/8b/24/03/8b24038ff83ff27aa7dd2e2e5281b3d5.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/87/af/5d/87af5db1259275314a4aaa933e7c1517.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/7b/60/40/7b6040d53506ca2f330f4ba9b562a7b2.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/45/b2/67/45b2674e1aeb70b866e246d5e4d68334.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/dd/30/88/dd3088c7e2f077e2a68687af1f7491d1.jpg' alt="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.pinimg.com/564x/7f/c4/e6/7fc4e69606e21bf36712cc7b955dbd59.jpg' alt="" /></SwiperSlide>
       
      
      </Swiper>
    </>
        </div>
    );
};

export default PopularClasses;