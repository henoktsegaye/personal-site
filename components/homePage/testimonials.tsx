import React, { FC } from "react";
import TestimonialCard from "../basic/testimonialCard";

type propTypes = {
  testimonails: Array<{
    name: string;
    title: string;
    image: string;
    location: string;
    testimonial: string;
  }> | null;
  title: string;
  description: string;
};

const TestimonialsSection: FC<propTypes> = ({
  testimonails,
  title,
  description,
}) => {
  return (
    <div className=" mx-auto bg-white dark:bg-black " id="blogTeaser">
      <div className="2xl:max-w-screen-xl max-w-sm xl:max-w-screen-lg lg:max-w-screen-md mx-auto pt-6 pb-10">
        <div className="text-left mb-12 mt-6  ">
          <h1 className="dark:text-gray-50 text-gray-900 font-bold capitalize text-3xl">
            {title}
          </h1>

          <p className="text-md font-normal text-gray-400 dark:text-gray-400 mt-2">
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {testimonails &&
            testimonails.map((testimonail) => (
              <TestimonialCard {...testimonail} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
