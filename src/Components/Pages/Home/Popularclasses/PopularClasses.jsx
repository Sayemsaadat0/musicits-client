import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Fade from 'react-reveal/Fade';
import slider1 from '../../../../assets/home/slider(1).png'



const PopularClasses = () => {
  return (
    <div className='mb-10'>
      <SectionTitle title1={'Popular Classes: Learn What the'} title2={'Pros Play'} subtitle={'Explore our popular classes section and gain access to the lessons that are in high demand among aspiring musicians. These carefully curated courses are designed to teach you the techniques and styles favored by professional musicians across various genres.'}></SectionTitle>
      <>
      <Fade top>
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
          className="mySwiper p-5 mt-10">

  
            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/YkbzQ7H/1.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/ssKcRMK/2.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/sjqk2pv/3.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/74j0Bp1/4.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/YNdQGSv/5.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/L9j9w0f/6.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/TMmPHNG/7.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/Nx4L0zH/8.png' alt="" /></SwiperSlide>

            <SwiperSlide><img className='hover:scale-110 duration-500' style={{borderRadius: '100px 0 100px 0'}} src='https://i.ibb.co/nPV8bP8/9.png' alt="" /></SwiperSlide>

        </Swiper>
          </Fade>
      </>
    </div>
  );
};

export default PopularClasses;









