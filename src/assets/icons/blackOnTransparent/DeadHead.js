import React from 'react';

export default function DeadHead({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M256 19.313c-44.404 0-85.098 25.433-115.248 68.123C110.6 130.126 91.594 189.846 91.594 256c0 66.152 19.005 125.87 49.156 168.563 30.15 42.69 70.845 68.125 115.25 68.125 44.402 0 85.07-25.435 115.22-68.125 30.15-42.69 49.186-102.41 49.186-168.563 0-66.152-19.037-125.87-49.19-168.564-30.15-42.69-70.812-68.124-115.214-68.124H256zM204.23 213.88l14.99 9.966-20.074 30.19 30.192 20.073-9.965 14.99-30.19-20.073-20.074 30.192-14.99-9.966 20.07-30.192L144 238.99l9.965-14.99 30.19 20.072 20.074-30.19zm103.54 0l20.074 30.192L358.034 224 368 238.99l-30.19 20.072 20.07 30.192-14.99 9.965-20.072-30.193-30.19 20.073-9.966-14.99 30.192-20.073-20.073-30.19 14.99-9.966zM256 367c26 0 52.242 8.515 70.363 26.637l-12.726 12.726c-3.28-3.28-7.006-6.198-11.067-8.75-.06 1.55-.142 3.128-.27 4.737-.46 5.693-1.33 11.654-3.568 17.257-2.236 5.603-6.655 11.875-14.228 13.487-8.496 1.807-15.982-2.58-21.13-7.59-5.146-5.01-9.12-11.24-12.495-17.422-4.78-8.754-8.213-17.494-9.83-21.902-16.58 2.595-31.98 9.477-42.687 20.183l-12.726-12.726C203.757 375.515 230 367 256 367zm3.945 18.084c1.67 4.095 3.972 9.312 6.735 14.373 2.885 5.286 6.303 10.28 9.25 13.147 2.8 2.724 4.114 2.98 4.728 2.896.056-.07.543-.523 1.358-2.564 1.098-2.752 1.965-7.354 2.34-12.032.333-4.114.343-8.192.257-11.523-7.827-2.495-16.192-3.952-24.668-4.296z"/>
</svg>

  );
}

DeadHead.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
