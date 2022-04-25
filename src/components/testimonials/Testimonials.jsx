import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
    {
        id:0,
        name: 'Franccesca Buitoni',
        photo: Avatar1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit fugit excepturi, blanditiis aperiam animi?',
    },
    {
        id:1,
        name: 'Antonio Polio',
        photo: Avatar2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed culpa, vero explicabo voluptate ab blanditiis animi officia veritatis sapiente, exercitationem dolorem vel temporibus quaerat.',

    }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container">
            {
                data.map(({id, name, photo, review}) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={photo} alt={name} />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials