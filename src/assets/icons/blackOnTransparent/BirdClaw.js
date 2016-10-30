import React from 'react';

export default function BirdClaw({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M16.313 14.53v69.5c56.5 26.487 139.512 124.756 121.718 153.626-19.937 9.72-41.66 17.936-66.28 26-2.74.592-5.4 1.456-7.938 2.563-.2.063-.393.122-.593.186l.06.063c-16.915 7.643-28.78 25.936-29.53 44.436-1.172 1.432-2.247 2.977-3.22 4.656-12.052 20.84-19.215 46.52-11.31 70.313 7.903 23.793 31.383 43.1 73.28 50.344l30.438 5.28-22.407-21.25c-20.598-19.52-23.79-44.37-15.655-63.563 18.564-2.293 33.263-17.314 38.72-34.906.024-.082.036-.166.06-.25 8.305-21.175 21.293-40.217 41.876-46.686 22.197-6.978 89.432 19.79 122.907 75.75 3.1 9.693 9.968 18.606 21.594 25.03 6.867 3.795 13.592 5.702 19.97 6.126 8.03 7.63 16.105 17.703 22 28.75 8.26 15.478 12.246 32.53 8.22 48.22l-7.69 29.936L375.5 468c31.637-28.45 41.573-57.794 37.438-83.563-3.873-24.125-18.826-44.065-34.813-59.562-1.898-12.118-8.972-23.538-22.813-31.188-8.148-4.503-16.148-6.32-23.656-6.062-1.087.037-2.153.128-3.22.25-15.68.117-33.815-2.788-50.155-8.656-22.188-15.804-20.717-30.904-2.405-40.72 27.434-2.626 54.565 6.108 76 17.22 1.972 1.488 4.116 2.886 6.47 4.186 22.067 12.198 42.575 5.148 55.31-9.344 7.79 1.084 15.55 4.598 23.126 10.188 11.023 8.13 21.213 20.634 28.75 34.78l10.314 19.376 6.812-20.875c13.164-40.43 7.03-70.206-10.312-88.31-15.176-15.843-37.005-22.188-58.344-22.907-1.065-.036-2.126-.026-3.188-.032-2.17-1.725-4.56-3.342-7.218-4.81-8.15-4.505-16.15-6.32-23.656-6.064-5.92.203-11.534 1.71-16.657 4.188v-.063c-31.524 15.287-62.228 22.54-93.155 28.032-8.008-3.035-10.557-9.02-5.03-19.437 18.92-18.164 41.107-32.81 63.53-40.375 14.174-1.885 26.066-11.202 33.25-23.375 8.486-2.544 18.056-4.173 27.375-4.094 15.366.133 29.59 4.525 39.406 15.19l21.25 23.093-5.156-30.938C437.927 83.1 420.128 60.11 397.812 51.22c-8.368-3.336-17.006-4.73-25.625-4.782-12.06-.075-24.05 2.494-35.125 6.093-4.27-1.392-8.473-2.1-12.53-2.186-19.13-.41-35.312 12.694-42.876 29.437-.007.023-.023.042-.03.064-1.04 2.307-1.898 4.674-2.595 7.094-5.9 15.37-13 29.872-21.217 43.5-34.96 31.232-68.095 19.003-93.688-15.5C144.333 86.56 126.908 49.45 116.97 14.53H16.312zm355.562 50.72c6.738 0 13.2 1.02 19.03 3.344 11.852 4.722 22.592 14.762 29.783 35.687-9.974-4.213-20.77-6.096-31.282-6.186-13.213-.113-26.044 2.423-37.344 6.375-7.2 2.276-11.68 4.717-13.687 5.78-1.934 1.022-1.256 1.004-3.313-.97-2.056-1.972-4.744-6.765-5.968-12.28-1.225-5.515-1.122-11.635.344-16.094 1.465-4.458 3.59-7.103 7.812-8.656h.03v-.03c11.348-4.18 23.366-6.97 34.595-6.97zm37.594 136.22c19.194-.013 38.09 5.407 49.374 17.186 9.58 10.002 15.108 25.212 11.03 49.344-6.486-8.54-13.78-16.22-22-22.28-13.878-10.24-30.478-16.22-47.687-13.595-3.116.475-4.042-.14-5.78-2.375-1.74-2.234-3.21-6.56-3.22-11.094-.01-4.532 1.365-9.054 3.657-12.03 2.292-2.978 5.123-4.878 10.78-5.095 1.28-.048 2.565-.06 3.845-.06zM59.22 317.624c3.08.093 6.475 1.018 9.5 2.625 4.03 2.143 7.17 5.456 8.31 8 1.142 2.544 1.28 3.574-.624 6.063-16 20.908-19.083 50.772-5.78 76.843-20.013-7.685-29.596-18.962-33.657-31.187-5.486-16.512-.514-37.32 9.75-55.064 2.824-4.885 5.83-6.467 9.56-7.094.934-.156 1.912-.218 2.94-.187zm294.56 14.28c2.927-.057 5.47.902 8.376 3.595 15.526 14.38 29.208 32.532 32.313 51.875 2.357 14.692-.622 30.766-14.658 48.875-1.51-12.203-5.664-23.978-11.312-34.563-9.762-18.294-23.688-33.48-37.156-43.062-2.18-1.55-2.332-2.312-1.656-5.78.675-3.47 3.433-8.554 7.468-12.626 4.035-4.074 9.182-7.07 13.53-7.94 1.09-.216 2.12-.354 3.095-.374z" />
</svg>

  );
}

BirdClaw.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
