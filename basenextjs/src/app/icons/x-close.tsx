import React from 'react';

export type IconProps = {
    fill?: string;
    className?: string;
    stroke?: string;
    width?: number;
    height?: number;
}
const XCloseIcon: React.FC<IconProps> = ({
    fill = "white",
  }) => (
<svg width="16" height="42" viewBox="0 0 16 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.52861 7.52861C3.78896 7.26826 4.21107 7.26826 4.47141 7.52861L8.00001 11.0572L11.5286 7.52861C11.789 7.26826 12.2111 7.26826 12.4714 7.52861C12.7318 7.78896 12.7318 8.21107 12.4714 8.47141L8.94282 12L12.4714 15.5286C12.7318 15.789 12.7318 16.2111 12.4714 16.4714C12.2111 16.7318 11.789 16.7318 11.5286 16.4714L8.00001 12.9428L4.47141 16.4714C4.21107 16.7318 3.78896 16.7318 3.52861 16.4714C3.26826 16.2111 3.26826 15.789 3.52861 15.5286L7.0572 12L3.52861 8.47141C3.26826 8.21107 3.26826 7.78896 3.52861 7.52861Z" fill={fill}/>
</svg>


);

export default XCloseIcon;
