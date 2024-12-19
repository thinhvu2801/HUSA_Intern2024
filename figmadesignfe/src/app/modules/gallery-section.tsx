/* eslint-disable @next/next/no-img-element */
import React from "react";

const projects = [
  {
    id: 1,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery1.png",
  },
  {
    id: 2,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery2.png",
  },
  {
    id: 3,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery3.png",
  },
  {
    id: 4,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery4.png",
  },
  {
    id: 5,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery5.png",
  },
  {
    id: 6,
    title: "Project title",
    description: "UI, Art direction",
    imgSrc: "ImageGallery6.png",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="py-[42px]">
      <div className="text-center text-[#2d2d2d] text-[32px] font-semibold leading-[42px] mb-8">
        Latest work
      </div>
      <div className="px-6 grid grid-cols-3 gap-6">
        {projects.map(({ id, title, description, imgSrc }) => (
          <div key={id} className="flex flex-col items-start gap-4">
            <img className="w-full h-[330px] object-cover" src={imgSrc} alt={title} />
            <div className="flex flex-col gap-2">
              <div className="text-[#2d2d2d] text-xl font-semibold leading-[30px]">
                {title}
              </div>
              <div className="text-[#2d2d2d] text-[17px] font-normal leading-[27px]">
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
