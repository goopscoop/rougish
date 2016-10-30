import React from 'react';

export default function Swallow({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M139.563 22.156L68.156 385.53l98.063 105.314h161.936L425.97 385.53 353.75 22.157H139.562zm23.125 25.063c25.85 13.91 48.97 31.3 54.656 70.874l-72.03-18.625 17.374-52.25zm164.718 0l17.344 52.25-72 18.624c5.69-39.575 28.804-56.963 54.656-70.875zM159.626 151.5l12.343 72.5 33-72.5 22.655 64.22 23.313-64.22 20.156 65.594 20.78-65.594 32.72 71.656 10.72-71.656c-.002 0 54.78 100.043 54.78 154.156s-54.78 154.188-54.78 154.188l-12.19-73.625-31.25 73.624-19.062-58.72-21.875 58.72-27.718-58.563-18.25 58.564L170 379.438l-10.375 80.406s-54.78-100.075-54.78-154.188c0-54.113 54.78-154.156 54.78-154.156zm29.124 84.344l-11.375 28.125 47.22 10.03-35.845-38.156zm114.78 0L267.72 274l47.186-10.03-11.375-28.126zm-97.436 53.72c0-.002-19.22 29.87-19.22 46.123 0 16.254 19.22 46.157 19.22 46.157l12.812-31.53 15.25 31.53 13.188-25.78 13.187 25.78 15.283-31.53 12.78 31.53s19.22-29.905 19.22-46.156c0-16.252-19.22-46.125-19.22-46.125l-12.78 31.53-15.97-31.53-12.5 28.25-13.187-28.25-15.25 31.53-12.812-31.53z" />
</svg>

  );
}

Swallow.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
