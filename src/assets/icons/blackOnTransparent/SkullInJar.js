import React from 'react';

export default function SkullInJar({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M217.52 21.156c-93.055 0-168.78 72.96-168.78 164.108v303.898h18.69V185.264c0-80.827 66.75-145.42 150.09-145.42h71.25c83.34 0 150.093 64.595 150.093 145.42v303.898h18.688V185.264c0-91.148-75.724-164.108-168.78-164.108h-71.25zm19.62 34.04c56.03 0 104.005 36.303 124.708 88.574-14.244-20.102-30.517-35.992-48.744-46.51-16.218-9.36-34.036-14.79-53.91-15.29-1.243-.03-2.492-.042-3.75-.034-18.876.113-39.584 4.615-62.497 14.334-49.19 20.864-73.53 52.007-82.297 88.996-8.424 35.547-1.668 77.248 15.307 119.214 61.164 5.752 96.5 32.692 113.772 72.282 5.473.378 14.337-.324 24.46-2.664 13.03-3.012 28.268-8.193 42.947-14.41 14.678-6.218 28.843-13.492 39.797-20.51 7.806-5.002 13.795-10.203 17.164-13.813-9.516-17.723-13.562-37.703-10.108-59.293 2.474-15.46 8.65-31.653 18.764-48.795v271.885h42.44V201.63c0-81.356-60.592-146.433-135.612-146.433h-42.44zm81.13 108.822c7.336-.09 14.554 2.238 20.482 6.625-10.03 1.383-17.756 9.984-17.756 20.394 0 11.374 9.222 20.594 20.596 20.594 3.054 0 5.942-.68 8.55-1.872-2.723 7.1-7.85 13.325-15.005 17.326-16.232 9.074-36.745 3.27-45.82-12.96-9.073-16.233-3.273-36.747 12.96-45.82 5.073-2.837 10.563-4.22 15.993-4.286zm-113.207 63.287c8.4-.102 16.644 2.96 22.972 8.664-9.93 1.47-17.55 10.03-17.55 20.368 0 11.374 9.22 20.596 20.595 20.596 1.48 0 2.92-.16 4.31-.457-2.926 5.658-7.484 10.553-13.46 13.894-16.232 9.075-36.747 3.272-45.82-12.96-9.075-16.232-3.273-36.746 12.96-45.82 5.073-2.836 10.563-4.22 15.993-4.285zm70.04 25.408c22.993 16.156 42.062 34.51 59.997 53.494-18.48 2.83-33.388 12.047-45.852 25.633-8.228-24.412-12.27-51.165-14.144-79.127zm63.815 117.14c-30.556 55.978-94.277 59.308-130.27 5.184-1.953 16.323-9.14 20.637-19.21 38.234 40.692 78.895 144.492 68.458 170.052-6.358-11.648-17.158-18.91-18.622-20.572-37.058z" />
</svg>

  );
}

SkullInJar.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
