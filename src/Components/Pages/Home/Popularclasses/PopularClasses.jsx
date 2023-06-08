import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Fade from 'react-reveal/Fade';
import slider1 from '../../../../assets/home/slider(1).png'
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';



const PopularClasses = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('popularClass.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
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

            {
              items.map((item) =>
                <SwiperSlide key={item.total_student}>
                <LazyLoad threshold={0.95}>
                <img className='hover:scale-110 duration-500 ' style={{ borderRadius: '100px 0 100px 0' }} src={item.picture} alt="" />
                </LazyLoad>
                  <h2 className='text-3xl text-right mr-10'>{item.total_student}</h2>
                </SwiperSlide>)
            }

          </Swiper>
        </Fade>
      </>
    </div>
  );
};

export default PopularClasses;









