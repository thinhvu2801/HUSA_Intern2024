import React from "react";
import DiscordIcon from "../icons/discord_icon";
import FacebookIcon from "../icons/facebook_icon";
import DribbleIcon from "../icons/dribble_icon";
import InsIcon from "../icons/instagram_icon";
import BehanceIcon from "../icons/behance_icon";

const Contact: React.FC = () => {
  const socialLinks = [
    { href: "https://discord.com", Icon: DiscordIcon },
    { href: "https://facebook.com", Icon: FacebookIcon },
    { href: "https://dribbble.com", Icon: DribbleIcon },
    { href: "https://instagram.com", Icon: InsIcon },
    { href: "https://behance.net", Icon: BehanceIcon },
  ];

  return (
    <div className="h-[426px] px-6 pt-[42px] pb-[86px] bg-white flex-col justify-start items-start gap-6 inline-flex">
      <div className="w-[626px] text-[#2d2d2d] text-[32px] font-semibold leading-[42px]">
        Let&apos;s work together
      </div>
      <div className="self-stretch justify-start items-start gap-[142px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[42px] inline-flex">
          <p className="self-stretch text-[#2d2d2d] text-[17px] font-normal leading-[27px]">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com. This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 relative overflow-hidden"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="self-stretch px-6 py-4 bg-[#f3f3f3] text-[#2d2d2d] text-[17px] font-normal leading-[27px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
            />
            <input
              type="email"
              placeholder="Email"
              className="self-stretch px-6 py-4 bg-[#f3f3f3] text-[#2d2d2d] text-[17px] font-normal leading-[27px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
            />
          </div>
          <button
            type="submit"
            className="px-16 py-6 bg-[#2d2d2d] text-white text-xl font-semibold leading-[30px] rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
