import React from 'react';

export default function BoilingBubbles({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M196.78 78.688c-96.69 0-175.343 78.72-175.343 175.468 0 12.63 6.202 24.213 15.813 33.75 9.61 9.537 22.727 17.488 38.53 24.125 31.61 13.275 74.124 21.158 121 21.158 8.047 0 15.966-.236 23.72-.688 1.125 1.65 2.437 3.157 3.844 4.5 4.3 4.107 9.682 7.19 15.937 9.72 12.512 5.056 28.642 7.874 46.407 7.874 17.766 0 33.865-2.818 46.375-7.875 6.256-2.53 11.67-5.613 15.97-9.72 4.3-4.107 7.656-9.77 7.656-16.28 0-9.865-2.202-19.213-6.125-27.658 2.032-1.67 3.957-3.378 5.75-5.156 3.39-3.363 6.33-6.984 8.75-10.812.988.01 1.974.03 2.968.03 31.826 0 60.67-5.25 82.408-14.28 10.868-4.516 20.016-9.954 26.875-16.688 6.858-6.734 11.562-15.283 11.562-24.72 0-66.047-54.29-119.75-120.844-119.75-22.145 0-42.93 5.945-60.81 16.314-30.172-24.555-68.606-39.313-110.44-39.313zm0 18.687c86.573 0 156.657 70.14 156.657 156.78 0 6.61-3.084 13.33-10.28 20.47-.885.878-1.81 1.783-2.813 2.656-12.89-14.89-32.22-24.342-53.656-24.342-36.025 0-66.126 26.71-69.657 61.03-6.635.352-13.385.532-20.25.532-44.753 0-85.266-7.727-113.75-19.688-14.24-5.98-25.427-13.046-32.624-20.187-7.196-7.14-10.28-13.86-10.28-20.47 0-86.642 70.083-156.78 156.655-156.78zm171.25 23c56.543 0 102.158 45.226 102.158 101.063 0 3.35-1.538 7.024-5.97 11.375-4.43 4.35-11.623 8.88-20.937 12.75-17.818 7.404-43.217 12.42-71.405 12.843.155-1.403.25-2.818.25-4.25 0-31.565-8.36-61.223-23-86.844 13.78-3.103 23.656-11.57 23.656-21.5 0-11.298-12.783-20.666-29.56-22.437 7.942-1.955 16.246-3 24.81-3zm-193.967 5.875c-36.642 0-66.344 18.525-66.344 41.344 0 22.818 29.7 41.312 66.343 41.312 36.64 0 66.343-18.494 66.343-41.312 0-22.82-29.702-41.344-66.344-41.344zm320.312 137c-30.4 23.526-70.607 32.934-110.406 36.53l-12.814 1.158 5.063 11.843c7.44 17.37 4.932 28.445-3.22 38.19-8.152 9.742-23.698 17.64-42.844 21.874-38.29 8.47-89.822 1.9-118.094-17.47l-2.906-1.968-3.47.406c-60.5 7.144-128.014-12.125-186.56-44.968v185.22l118.905-.002c-2.954-8.158-2.075-17.375 2.626-24.906-18.91 7.375-41.197 3.46-56.47-11.812-20.595-20.597-20.595-53.997 0-74.594 10.3-10.298 23.785-15.438 37.283-15.438 13.496 0 26.982 5.14 37.28 15.438 20.2 20.2 20.575 52.7 1.156 73.375 8.9-1.583 18.404 1.03 25.28 7.906 8.12 8.12 10.332 19.903 6.658 30.033h302.53V263.25zm-207.688 8.375c28.617 0 51.313 22.084 51.313 49.094 0 .256-.033 1.02-1.875 2.78-1.842 1.76-5.337 3.965-10.063 5.875-9.45 3.82-23.653 6.53-39.375 6.53-15.72 0-29.956-2.71-39.406-6.53-4.724-1.91-8.188-4.115-10.03-5.875-1.842-1.76-1.906-2.524-1.906-2.78 0-9.827 3.014-18.993 8.22-26.69 4.427 5.18 12.748 8.69 22.28 8.69 14.18 0 25.656-7.73 25.656-17.25 0-5.527-3.887-10.44-9.906-13.595 1.678-.157 3.37-.25 5.094-.25zm131.47 107.688c8.272 0 16.53 3.157 22.843 9.468 12.623 12.625 12.623 33.097 0 45.72-12.623 12.623-33.064 12.623-45.688 0-12.623-12.623-12.623-33.095 0-45.72 6.312-6.31 14.572-9.467 22.844-9.467zm-200.032 28.75c5.92 0 11.828 2.265 16.344 6.78 9.03 9.033 9.03 23.656 0 32.688-9.033 9.033-23.688 9.033-32.72 0-9.032-9.03-9.032-23.654 0-32.686 4.516-4.516 10.456-6.78 16.375-6.78z"  fillRule="evenodd"/>
</svg>

  );
}

BoilingBubbles.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
