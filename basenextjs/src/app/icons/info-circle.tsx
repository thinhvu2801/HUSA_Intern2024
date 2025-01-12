import React from 'react';

export type IconProps = {
    fill?: string;
    className?: string;
    stroke?: string;
    width?: number;
    height?: number;
}
const InfoCircle: React.FC<IconProps> = ({
    fill = "white",
  }) => (
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3879_2503)">
<path fillRule="evenodd" clipRule="evenodd" d="M8 1.99999C4.68629 1.99999 2 4.68628 2 7.99999C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 7.99999C14 4.68628 11.3137 1.99999 8 1.99999ZM0.666664 7.99999C0.666664 3.9499 3.94991 0.666656 8 0.666656C12.0501 0.666656 15.3333 3.9499 15.3333 7.99999C15.3333 12.0501 12.0501 15.3333 8 15.3333C3.94991 15.3333 0.666664 12.0501 0.666664 7.99999ZM7.33333 5.33332C7.33333 4.96513 7.63181 4.66666 8 4.66666H8.00666C8.37485 4.66666 8.67333 4.96513 8.67333 5.33332C8.67333 5.70151 8.37485 5.99999 8.00666 5.99999H8C7.63181 5.99999 7.33333 5.70151 7.33333 5.33332ZM8 7.33332C8.36819 7.33332 8.66666 7.6318 8.66666 7.99999V10.6667C8.66666 11.0348 8.36819 11.3333 8 11.3333C7.63181 11.3333 7.33333 11.0348 7.33333 10.6667V7.99999C7.33333 7.6318 7.63181 7.33332 8 7.33332Z" fill={fill}/>
</g>
<defs>
<clipPath id="clip0_3879_2503">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default InfoCircle;
