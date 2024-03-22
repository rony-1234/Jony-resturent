import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import { Navigation } from 'swiper/modules';

import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews,setReviews] = useState([])
    // const [rating, setRating] = useState(0)
     useEffect(()=>{
         fetch('./review.json')
         .then(res => res.json())
         .then(data => setReviews(data))
     }, [])
    return (
        <div>
            <SectionTitle 
              subHeading='What Our Client Says' 
               heading='Testimonials'>

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        {
            reviews.map(review =><SwiperSlide key={review._id}>
                <div className="m-24 ">
                <Rating className="mx-48 my-12 items-center justify-center text-center" style={{ maxWidth: 250 }} value={review.rating} readOnly /> 
                 <p>{review.details}</p>
                 <h3 className="text-3xl font-semibold text-center">{review.name}</h3>
                </div>
            </SwiperSlide> )
        }
      </Swiper>
        </div>
    );
};

export default Testimonial;