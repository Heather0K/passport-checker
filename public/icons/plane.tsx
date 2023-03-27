import * as React from 'react';
import { SVGProps } from 'react';

const PlaneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em" {...props}>
        <path d="M482.3 192c34.2 0 93.7 29 93.7 64 0 36-59.5 64-93.7 64H365.7L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49-171.6H112l-43.2 57.6c-3 4-7.8 6.4-12.8 6.4H14c-7.8 0-14-6.3-14-14 0-1.3.2-2.6.5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9 0-7.8 6.3-14 14-14h42c5 0 9.8 2.4 12.8 6.4L112 192h102.9l-49-171.6c-3-10.2 4.7-20.4 15.3-20.4h56.2c11.5 0 22.1 6.2 27.8 16.1L365.7 192h116.6z" />
    </svg>
);

export default PlaneIcon;
