import React from 'react';

export default function CaveEntrance({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M346.951 24.582L299.193 72.34l-101.136-7.024-40.97 80.737 68.688 25.35 37.153-19.936 8.511 15.861-44.293 23.768-79.7-29.416-70.19 55.341 35.117 58.995-.375.2 13.014 21.585 29.134 2.361 55.06-35.123 9.679 15.176-60.16 38.377-44.364-3.596-18.23-30.234-56.8 30.586 33.712 61.804-33.713 40.735L18 444.177V494h170.62l-5.6-45.592a260.658 260.658 0 0 1-5.147-4.512c-4.186-3.761-5.89-5.444-8.027-7.484l-73.13 21.797-21.339-20.484 12.467-12.985 13.777 13.225 73.068-21.78 3.784 3.667s4.24 4.09 9.216 8.636l37.797-37.248 8.133 79.54 6.3-93.444 10.364 28.387 6.281-45.112 3.14-3.091-.29-.233 22.486-27.974.465-.907.188.096 11.453-14.248 14.03 11.277-9.122 11.348 67.803 34.715 27.008-9.489 22.478 17.71 22.924-12.036 8.367 15.938-33.262 17.46-23.875-18.81-24.964 8.772-9.584-4.907 39.04 87.842L383.923 494H494v-28.512L462.713 478.2l-6.776-16.678L494 446.06V211.176l-23.438-26.463-21.654-67.371-33.547 32.666-107.77-13.873-28.019-29.096 12.967-12.486 23.629 24.539 92.867 11.953 31.442-30.615-52.79-61.801zm27.53 177.74l34.177 41.428 28.863-6.56-4.136-13.59 17.22-5.243 9.77 32.098-58.543 13.307-31.377-38.033-33.086 19.853-9.262-15.436z" />
</svg>


  );
}

CaveEntrance.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
