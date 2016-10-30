import React from 'react';

export default function BlackHoleBolas({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M393.5 19.53c-2.858-.01-5.743.193-8.656.626-31.08 4.62-52.53 33.582-47.906 64.688 4.623 31.106 33.576 52.588 64.656 47.97 2.053-.307 4.066-.74 6.03-1.25 9.68 23.89 14.992 46.253 16.657 66.967-12.318 4.327-20.24 16.91-18.25 30.314 1.366 9.18 7.072 16.623 14.72 20.594-3.375 14.428-8.705 27.7-15.594 39.75-9.627 16.838-22.426 31.345-37.375 43.187 13.33-22.265 19.333-49.11 15.22-76.78-4.372-29.416-19.408-54.588-40.594-72.22-33.633-35.776-80.33-58.405-130.312-58.22-45.336.17-92.873 19.486-134.625 63.376-7.308-3.943-15.91-5.657-24.75-4.343-21.767 3.236-36.77 23.528-33.532 45.313 3.238 21.785 23.483 36.83 45.25 33.594 21.766-3.236 36.8-23.528 33.562-45.313-.93-6.26-3.28-11.97-6.656-16.843 38.472-40.475 80.822-56.944 120.844-57.093 21.038-.08 41.558 4.455 60.562 12.687-1.344-.05-2.678-.087-4.03-.093-5.835-.024-11.742.398-17.69 1.282-16.537 2.457-31.73 8.308-45 16.718-38.298 20.656-69.638 53.2-86.686 93.312-14.32 33.692-18.302 72.74-8 113.813-16.41 6.933-28.73 22.277-30.906 41.25-3.215 28.02 16.88 53.32 44.874 56.53 27.996 3.213 53.317-16.886 56.532-44.906 3.215-28.017-16.88-53.35-44.875-56.562-2.508-.288-4.99-.357-7.44-.28-9.626-37.47-5.866-72.288 7-102.564 5.206-12.245 11.944-23.753 19.94-34.342-4.43 15.467-5.71 32.107-3.19 49.062.354 2.373.794 4.715 1.282 7.03 7.884 58.165 40.39 112.06 91.97 141.658 45.803 26.28 106.342 32.7 175.75 6.75 8.357 11.38 22.54 17.875 37.468 15.656 21.484-3.194 36.32-23.216 33.125-44.72-3.196-21.5-23.203-36.35-44.688-33.155-21.484 3.192-36.32 23.215-33.125 44.717.015.096.048.187.063.282-64.737 24.18-118.595 17.612-159.313-5.75-23.945-13.74-43.422-33.523-57.625-56.783 23.992 18.134 54.95 26.988 87.032 22.22 8.252-1.228 16.172-3.316 23.686-6.126 46.562-11.748 88.206-40.568 112.5-83.06 8.058-14.095 14.142-29.657 17.844-46.5 14.273-3.006 23.925-16.652 21.75-31.282-1.56-10.494-8.8-18.77-18.125-22.125-1.686-23.377-7.498-48.395-18.156-74.657 17.774-11.842 28.13-33.24 24.78-55.78-4.19-28.19-28.373-48.48-56-48.595zM268.437 185.47l12.063 54 46.625-29.564-29.375 46.313 53.594 12.03-53.875 12.063 29.686 46.75-46.687-29.625-12.033 53.75-12-53.594-46.468 29.5 29.655-46.78-54-12.064 53.72-12.03-29.376-46.314 46.436 29.438 12.03-53.875zm-.156 71.28c-6.89 0-12.25 5.39-12.25 12.28 0 6.894 5.36 12.283 12.25 12.283 6.892 0 12.283-5.39 12.283-12.282 0-6.89-5.39-12.28-12.282-12.28z" />
</svg>

  );
}

BlackHoleBolas.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
