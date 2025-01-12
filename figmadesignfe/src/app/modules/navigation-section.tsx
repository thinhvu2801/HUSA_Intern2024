import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="p-6 items-center gap-6 flex-wrap">
            <div className='flex p-[24px_42px] justify-between items-center content-center gap-y-6 self-stretch flex-wrap'>
                <a className="text-black text-[20px] font-epilogue font-semibold leading-[30px]">Logo</a>
                <div className="flex gap-6">
                    <a className="text-black text-[17px] font-normal leading-[27px]">About</a>
                    <a className="text-black text-[17px] font-normal leading-[27px]">Work</a>
                    <a className="text-black text-[17px] font-normal leading-[27px]">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
