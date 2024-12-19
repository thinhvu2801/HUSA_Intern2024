import React from "react";
import StarIcon from "../icons/star-icon";

const testimonials = [
  {
    id: 1,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
  {
    id: 2,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
  {
    id: 3,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
  {
    id: 4,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
  {
    id: 5,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
  {
    id: 6,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "ClientImage.png",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="py-[42px]">
      <div className="text-center text-[#2d2d2d] text-[32px] font-semibold leading-[42px] mb-8">
        Testimonial
      </div>
      <div className="px-6 grid grid-cols-3 gap-6">
        {testimonials.map(({ id, text, name, company, image, rating }) => (
          <div
            key={id}
            className="p-[42px] bg-[#f3f3f3] flex flex-col gap-[20px] rounded-lg"
          >
            <div className="text-[#2d2d2d] text-xl font-semibold leading-[30px]">
              {text}
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={image}
                alt={name}
              />
              <div className="flex flex-col">
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <div className="text-[#2d2d2d] text-xl font-semibold leading-[30px]">
                  {name}
                </div>
                <div className="text-[#2d2d2d] text-[17px] font-normal leading-[27px]">
                  {company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
