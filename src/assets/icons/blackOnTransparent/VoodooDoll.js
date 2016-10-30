import React from 'react';

export default function VoodooDoll({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M323.28 19.97c-60.38.635-112.34 52.183-108.936 119.155L228.5 125.75l12.844 13.594-23.813 22.53c2.144 9.237 5.356 18.665 9.72 28.22-53.554-22.796-66.972-40.137-111.875-94.094-9.347-11.232-18.9-15.48-27.47-16.125-1.07-.08-2.136-.097-3.186-.063-7.355.24-14.127 3.22-19.345 8.032-5.964 5.5-9.72 13.217-9.78 21.656-.064 8.44 3.366 17.974 13.56 27.72 24.537 23.45 52.7 47.2 74.157 71.218 11.654 13.045 21.673 26.464 27.563 40.28l43.03 11.407 5.032 1.313 1.5 5c4.288 14.202 2.314 31.67-12.28 45.78l-3.813 3.657-5.094-1.344-31.72-8.405c-4.518 8.075-10.335 14.956-16.655 21-11.34 10.844-24.32 19.41-36.156 28.97-23.676 19.116-43.444 40.29-41.595 92.155 1.15 32.252 25.42 45.802 46 44.594 10.29-.604 18.976-4.947 24-12.688 5.024-7.74 7.178-19.855.906-38.5-5.565-16.545 2.843-33.48 15.314-45.156 12.47-11.675 30.34-19.41 48.53-15.344 10.053 2.248 16.206 10.77 19.44 19.156 3.23 8.387 4.823 17.816 6.874 27.5 4.1 19.37 9.476 38.69 25.25 49.97 30.32 21.68 61.273 18.168 74.843 6.593 6.787-5.787 9.753-12.75 8.033-22.03-1.72-9.28-9.1-21.564-26.344-34.564-19.716-14.862-24.02-41.538-22.158-67.06 1.864-25.525 9.933-51 20.313-67.783 6.262-10.125 17.31-13.693 29.344-16.875 12.033-3.18 26.08-5.56 40.53-9.25 28.9-7.378 58.494-19.322 76.28-50.656 8.747-15.406 10.772-27.98 9.345-37.094-1.427-9.113-5.998-15.082-12.5-18.656-13.003-7.148-35.813-4.177-54.656 21-13.622 18.2-39.5 26.57-69.158 28.594-9.042.617-18.498.56-28.156-.125 2.49-1.505 4.96-3.118 7.406-4.813l.094-31.187 18.688.03-.03 15.907c31.506-29.7 55.06-74.37 53.123-119.812 18.06 11.88 30.535 27.127 41.97 47.72 3.354-16.526-.232-32.554-8.094-47.97 16.145 6.698 28.583 17.107 41.437 27.094-4.812-20.107-14.792-33.164-29.594-43.28 16.717 1.346 26.148 5.245 40.813 12.748-10.997-24.936-55.215-50.355-98.314-35.218-16.463-7.804-33.215-11.296-49.375-11.125zm-34.56 54.343c10.942 0 19.81 8.867 19.81 19.812s-8.868 19.844-19.81 19.844c-10.945 0-19.814-8.902-19.814-19.845s8.87-19.813 19.813-19.813zm44.655 33.093c10.943 0 19.813 8.868 19.813 19.813 0 10.943-8.87 19.81-19.813 19.81s-19.813-8.868-19.813-19.81c0-10.945 8.87-19.814 19.813-19.814zm-80.03 40.72l14.905 11.28-20.938 27.656-14.906-11.28 20.938-27.657zm28.06 16.78l17.783 5.688-10.094 31.625-17.813-5.69 10.126-31.624zM42.314 204.562c-16.928 20.222-19.804 44.558-18 72.094l30.375-17.062L58 257.75l3.656.97 137 36.31c5.497-6.524 6.25-11.95 5.03-18.28L66.72 240.437l-3.69-.968-1.936-3.282-18.782-31.625zm283.906 105.282c-2.502 5.156-4.897 11.194-6.97 17.75l95.906 25.437c1.933.03 3.623-.02 5.22-.092l52.5 5.937-51.72-22.75c-.725-.647-1.48-1.31-1.812-1.594l-93.125-24.686z" />
</svg>

  );
}

VoodooDoll.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
