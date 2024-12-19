import React from "react";
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className="px-6 py-[42px] bg-white flex justify-between items-center">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
                <div className="self-stretch h-[202px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-[#2d2d2d] text-xl font-semibold leading-[30px]">Branding | Image making </div>
                    <div className="text-[#2d2d2d] text-[68px] font-semibold">Visual Designer</div>
                    <div className="text-[#2d2d2d] text-[17px] font-normal leading-[27px]">This is a template Figma file, turned into code using Anima. <br/>Learn more at AnimaApp.com</div>
                </div>
                <div className="px-16 py-6 bg-[#2d2d2d] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-xl font-semibold leading-[30px]">Contact</div>
                </div>
            </div>
            <div className="header-image">
                <Image
                    src="/imgheader.png"
                    alt="Header Image"
                    width={486}
                    height={565}
                    className="h-[360px] w-auto"
                />
            </div>    
        </div>

    );
};

export default Header;
