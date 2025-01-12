import React from "react";
import SkillCard1 from "../icons/skillcard_icon1";
import SkillCard2 from "../icons/skillcard_icon2";
import SkillCard3 from "../icons/skillcard_icon3";

const skills = [
    {
        id: 1,
        Icon: SkillCard1,
        title: "Product Design",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
        id: 2,
        Icon: SkillCard2,
        title: "Visual Design",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
        id: 3,
        Icon: SkillCard3,
        title: "Art Direction",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
];

const SkillSection: React.FC = () => {
    return (
        <div className="h-[513px] px-6 py-[42px] bg-white flex-col items-center gap-[42px] inline-flex overflow-hidden">
            <div className="items-start gap-6 inline-flex">
                {skills.map(({ id, Icon, title, description }) => (
                    <div
                        key={id}
                        className="h-[429px] px-[42px] py-16 bg-white flex-col justify-center items-center gap-[42px] inline-flex"
                    >
                        <Icon />
                        <div className="h-[135px] flex-col items-center gap-3 flex">
                            <div className="h-[42px] text-center text-[#2d2d2d] text-[27px] font-semibold leading-[42px]">
                                {title}
                            </div>
                            <div className="text-center text-[#2d2d2d] text-[17px] font-normal leading-[27px]">
                                {description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
