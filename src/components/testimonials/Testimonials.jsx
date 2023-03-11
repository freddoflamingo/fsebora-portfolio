import React from "react";
import classes from "./Testimonials.module.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const testimonialList = [
  {
    id: 1,
    image: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint enim recusandae vel odio esse, cum fugiat accusamus delectus pariatur perspiciatis totam obcaecati. Saepe rerum quaerat aliquid nihil excepturi odio?",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint enim recusandae vel odio esse, cum fugiat accusamus delectus pariatur perspiciatis totam obcaecati. Saepe rerum quaerat aliquid nihil excepturi odio?",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Kweme Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint enim recusandae vel odio esse, cum fugiat accusamus delectus pariatur perspiciatis totam obcaecati. Saepe rerum quaerat aliquid nihil excepturi odio?",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint enim recusandae vel odio esse, cum fugiat accusamus delectus pariatur perspiciatis totam obcaecati. Saepe rerum quaerat aliquid nihil excepturi odio?",
  },
];

function UpdateTestimonials(list) {
  return list.map((testimonial) => (
    <SwiperSlide className={classes.testimonial} key={testimonial.id}>
      <div className={classes.client__avatar}>
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div>
        <h5 className={classes.client__name}>{testimonial.name}</h5>
        <small className={classes.client__review}>{testimonial.review}</small>
      </div>
    </SwiperSlide>
  ));
}
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={`mySwiper ${classes.testimonials__container}`}
        spaceBetween={40}
      >
        {UpdateTestimonials(testimonialList)}
      </Swiper>
    </section>
  );
};

export default Testimonials;
