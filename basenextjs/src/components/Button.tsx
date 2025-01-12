import InfoCircle from "@/app/icons/info-circle";
import XCloseIcon from "@/app/icons/x-close";
import classNames from "classnames";
import React from "react";

type TAlertProps = {
  hierarchy?: "primary" | "secondary" | "tertiary";
  color?: "default" | "error" | "warning" | "gray" | "success";
  title?: string;
  description?: string;
};

export const Alert: React.FC<TAlertProps> = ({
  hierarchy = "primary",
  color = "default",
  title = "",
  description = "",
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const bindClassname = classNames([
    "w-[588px] flex items-center py-2 px-3 gap-3  rounded-[4px] border-[1px]",
    {
      "bg-[#175CD3] border-[#175CD3]":
        hierarchy === "primary" && color === "default",
      "bg-[#84CAFF] border-[#EFF8FF]":
        hierarchy === "secondary" && color === "default",
      "bg-white border-none":
        hierarchy === "tertiary" && color === "default",
      "bg-[#D92D20] border-[#D92D20]":
        hierarchy === "primary" && color === "error",
      "bg-[#FEF3F2] border-[#FDA29B]":
        hierarchy === "secondary" && color === "error",
      "bg-[#ffffff] border-none":
        hierarchy === "tertiary" && color === "error",      
      "bg-[#DC6803] border-[#DC6803]":
        hierarchy === "primary" && color === "warning",
      "bg-[#fffaeb] border-[#fec84b]":
        hierarchy === "secondary" && color === "warning",
      "border-none":
        hierarchy === "tertiary" && color === "warning",
      "bg-[#4b5565] border-[#cdd5df]":
        hierarchy === "primary" && color === "gray",
      "bg-[#f6f8fb] border-[#e3e8ef]":
        hierarchy === "secondary" && color === "gray",
      "bg-[#fffff] border-none":
        hierarchy === "tertiary" && color === "gray",
      "bg-[#079455] border-none":
        hierarchy === "primary" && color === "success",
      "bg-[#ecfdf3] border-[#75e0a7]":
        hierarchy === "secondary" && color === "success",
      "bg-[#FFFFF] border-none":
        hierarchy === "tertiary" && color === "success",
    },
  ]);

  const bindTitleClassname = classNames([
    {
      "text-white": hierarchy === "primary" && color === "default",
      "text-[#175CD3]": hierarchy === "secondary" && color === "default", 
      "text-[#175cd3]": hierarchy === "tertiary" && color === "default", 
    },
    {
      "text-white": hierarchy === "primary" && color === "error",
      "text-[#D92D20]": hierarchy === "secondary" && color === "error",
      "text-[#D92d20]": hierarchy === "tertiary" && color === "error",
    },
    {
      "text-white": hierarchy === "primary" && color === "warning",
      "text-[#dc6803]": hierarchy === "secondary" && color === "warning",
      "text-[#Dc6803]": hierarchy === "tertiary" && color === "warning",
    },
    {
      "text-white": hierarchy === "primary" && color === "gray",
      "text-[#0c111B]": hierarchy === "secondary" && color === "gray",
      "text-[#0c111b]": hierarchy === "tertiary" && color === "gray",
    },
    {
      "text-white": hierarchy === "primary" && color === "success",
      "text-[#079455]": hierarchy === "secondary" && color === "success",
      // "text-[#079455]": hierarchy === "tertiary" && color === "success",
    },
  ]);

  const bindDescriptionClassname = classNames([
    {
      "text-white": hierarchy === "primary" && color === "default",
      "text-[#175CD3]": hierarchy === "secondary" && color === "default", 
      "text-[#175cd3]": hierarchy === "tertiary" && color === "default", 
    },
    {
      "text-white": hierarchy === "primary" && color === "error",
      "text-[#D92D20]": hierarchy === "secondary" && color === "error",
      "text-[#D92d20]": hierarchy === "tertiary" && color === "error",
    },
    {
      "text-white": hierarchy === "primary" && color === "warning",
      "text-[#dc6803]": hierarchy === "secondary" && color === "warning",
      "text-[#Dc6803]": hierarchy === "tertiary" && color === "warning",
    },
    {
      "text-white": hierarchy === "primary" && color === "gray",
      "text-[#0c111B]": hierarchy === "secondary" && color === "gray",
      "text-[#0c111b]": hierarchy === "tertiary" && color === "gray",
    },
    {
      "text-white": hierarchy === "primary" && color === "success",
      "text-[#079455]": hierarchy === "secondary" && color === "success",
      // "text-[#079455]": hierarchy === "tertiary" && color === "success",
    },
  ]);

  const bindIconClassname = classNames([ //ko bind màu của icon /_\
    "w-4 h-4",
    {
      "text-white": hierarchy === "primary" && color === "default",
      "text-[#2E6FFF]": hierarchy === "secondary" && color === "default", 
      "text-[#175CD3]": hierarchy === "tertiary" && color === "default", 
    },
    {
      "text-white": hierarchy === "primary" && color === "error",
      "text-[#F04438]": hierarchy === "secondary" && color === "error",
    },
  ]);
  

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className={ "flex " + bindClassname} >
          <div className={`mt-[-16px] ${bindIconClassname}`}>
            <InfoCircle />
          </div>
          <div className="flex flex-col gap-1">
            <span className={"text-[14px] font-medium " + bindTitleClassname}>
              {title}
            </span>
            <span className={"text-[12px] " + bindDescriptionClassname}>
              {description}
            </span>
          </div>
          <div onClick={onClose} className={`cursor-pointer ${bindIconClassname}`}>
            <XCloseIcon />
          </div>
        </div>
      )}
    </>
  );
};
