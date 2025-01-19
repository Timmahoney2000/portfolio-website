/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TestimonialsImg1 from "../assets/profilemen.png";
import TestimonialsImg2 from "../assets/profilewomen.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import google from "../assets/google-logo.png";
import slack from "../assets/slack-logo.png";
import dropbox from "../assets/dropbox-logo.jpg";
import squarespace from "../assets/squarespace-logo.png";

const testimonials = [
  {
    name: "John",
    position: "CEO of Google",
    image: TestimonialsImg1,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum libero eaque similique quaerat consequatur!",
  },
  {
    name: "John",
    position: "CEO of Amazon",
    image: TestimonialsImg1,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum libero eaque similique quaerat consequatur!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonialsCount = testimonials.length;

  const nextTestimonials = () => {
    setCurrent(current === testimonialsCount - 1 ? 0 : current + 1);
  };

  const prevTestimonials = () => {
    setCurrent(current === 0 ? testimonialsCount - 1 : current - 1);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="mb-12">
          <h3 className="text-yellow-500 font-semibold text-lg uppercase mb-2">
            testimonials
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            what people say
          </h2>
          <div className="relative max-w-4x1 mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center items-center mb-4">
              <img
                src={testimonials[current].image}
                className="w-32 h-32 rounded-full border-4 border-orange-500 object-cover"
              />
            </div>
            <p className="text-gray-600 italic mb-6 px-14">
              {testimonials[current].feedback}
            </p>
            <h3 className="font-semibold font-lg">
              {testimonials[current].name}
            </h3>
            <p className="text-gray-500">{testimonials[current].position}</p>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
              <button
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
                onClick={prevTestimonials}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
                onClick={prevTestimonials}
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="mt-16">
              <h4 className="text-xl font-semibold mb-14">
                Who Makes Me Proud
              </h4>
            </div>
            <div className="flex justify-center gap-4 md:gap-16 items-center flex-wrap lg:gap-32">
              <img
                src={google}
                alt="google logo"
                className="h-12 ad:h-14 object-cover"
              />
              <img
                src={slack}
                alt="slack logo"
                className="h-6 ad:h-7 object-cover"
              />
              <img
                src={dropbox}
                alt="dropbox logo"
                className="h-6 ad:h-7 object-cover"
              />
              <img
                src={squarespace}
                alt="squarespace logo"
                className="h-20 ad:h-22 object-cover"
              />
            </div>
          </div>
          1
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
