import React from 'react';

export default function Gems({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M303.2 19.338l-161.966 93.51 93.512 161.966 161.967-93.51-4.674-8.093-4.874-8.44-4.127-7.54-.188.07-79.65-137.962zm-20.62 33.486l-50.27 90.14c-19.184-7.687-37.887-17.28-56.165-28.69l106.435-61.45zm19.914 2.664l63.235 109.528c-40.568 2.1-78.993-3.29-115.658-15.536l52.422-93.992zm-251.61 25.68L23.032 167.99l74.302 51.123 27.854-86.822-5.723-3.936-68.578-47.186zm10.118 29.646l32.295 22.22-44.233 14.99 11.938-37.21zm385.836 22.33l-46.143 17.418 9.06 16.557 20.165-7.614 2.992 43.463-39.94 15.077-.878-12.748-18.016 10.4 1.977 28.71 76.457-28.865-5.674-82.402zm-270.55 3.045c31.896 18.617 65.316 32.12 100.267 39.964l-39.52 65.25L176.29 136.19zm-76.604 14.414l-12.467 38.863-33.73-23.207 46.197-15.656zm196.437 29.318c19.028 3.07 38.496 4.478 58.403 4.158l-93.675 54.084 35.273-58.242zM21.187 224.744l1.96 14.336 21.672 158.522 167.026 49.484-1.994-14.59-23.522-12.463L79.99 388.53l59.563-26.098 34.398-54.528 6.943 50.77 16.082-20.33-8.766-64.114-167.024-49.486zm22.435 26.14l121.497 35.997-38.314 60.733-66 28.92-17.182-125.65zm313.064 5.206l-88.914 23.824-1.916 2.395-89.266 111.594 197.365 102.963 118.662-187.66-135.93-53.117zm-13.6 22.988l31.3 55.317-86.09 22.673 2.505-63.978 52.284-14.012zm21.582.193l88.18 34.46-59.778 15.743-28.402-50.202zm-93.035 25.734l-2.232 57.04-54.978 14.48 57.21-71.52zm184.313 27.234l-73.545 116.31 13.94-100.61 59.605-15.7zm-79.185 20.856L362.762 454.11l-67.342-79.594 81.338-21.422zM275.402 379.79l67.532 79.817-124.325-64.86 56.792-14.958z" />
</svg>

  );
}

Gems.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
