import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/service/home/slide1.jpg';
import slide2 from '../../../assets/service/home/slide2.jpg';
import slide3 from '../../../assets/service/home/slide3.jpg';
import slide4 from '../../../assets/service/home/slide4.jpg';
import slide5 from '../../../assets/service/home/slide5.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const Category = ({heading,subHeading}) => {
    return (
        <section>
            <SectionTitle
                     heading={'Order Online'}
                     subHeading={'10.am to 11 pm'}
            >
          
            </SectionTitle>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1}/>
            <h3 className='text-3xl -mt-16 text-center text-white uppercase'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>    
            <img src={slide2}/>
            <h3 className='text-3xl -mt-16 text-center text-white uppercase'>Pizzas</h3>
            </SwiperSlide>
        <SwiperSlide>
        <img src={slide3}/>
        <h3 className='text-3xl -mt-16 text-center text-white uppercase'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4}/>
        <h3 className='text-3xl -mt-16 text-center text-white uppercase'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5}/></SwiperSlide>
      
       
      </Swiper>
      </section>
    );
};

export default Category;