import React from 'react';

export default function BurningRoundShot({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M51 24.656c-66.505 105.062 49.65 121.762 116.97 130.563 84.404 11.032 37.33 166.2-71.814 84.405.045 58.045 58.398 82.567 95.063 94.625 40.878 13.43-3.76 79.175-83.25 61.22 327.925 246.796 476.227-18.285 340.905-223-22.38-33.857-73.925-67.47-126.72-63.47 126.32 83.08-47.533 116.238-80.436-6.563-20.76-77.47-143.593 17.79-190.72-77.78zm309.188 218.47l24.968 47.124-20.906 42.47-82.5-58.626c20.543-19.186 48.118-30.937 78.438-30.97zm22.25 2.155c52.99 10.323 93 56.96 93 112.97 0 3.995-.197 7.953-.594 11.844l-50.938 28.25 12.25-46.5.938-3.53-1.72-3.22-52.937-99.813zM269.125 288l35.75 25.406-59.375 53.28c-.202-2.783-.313-5.6-.313-8.436 0-26.456 8.937-50.81 23.938-70.25zm126.813 22.625l21.218 40-15.875 60.25-18.655 10.344L350 403.936l45.938-93.312zm-75.47 13.875l35.407 25.188-22.406 45.5-14.94-7.907-8.436-4.5-4.28 8.564-25.064 50.125c-14.917-14.267-26.003-32.49-31.563-53l71.282-63.97zm149.188 69.844c-15.138 45.91-58.363 79.03-109.344 79.03-26.287 0-50.495-8.827-69.875-23.655l5.657 2.842 22.156-44.28 60.094 31.843 4.47 2.375 4.436-2.47 82.406-45.686z"  fillRule="evenodd"/>
</svg>

  );
}

BurningRoundShot.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
