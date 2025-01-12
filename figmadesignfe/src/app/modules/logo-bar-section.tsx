import React from 'react';
import GoogleIcon from '../icons/google_icon';
import AdidasIcon from '../icons/adidas_icon';
import SamsungIcon from '../icons/samsung_icon';
import AppleIcon from '../icons/apple_icon';
import NikeIcon from '../icons/nike_icon';

const LogoBar: React.FC = () => {
    return (
    <div className="h-[130.83px] px-[68px] py-[42px] bg-white flex justify-between items-center">
        <GoogleIcon />
        <NikeIcon />
        <SamsungIcon />
        <AppleIcon />
        <AdidasIcon />
    </div>
    );
};

export default LogoBar;
