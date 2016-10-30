import React from 'react';

export default function Tread({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M173.438 56.625c-24.197.254-51.41 8.524-76.125 23.875C56.04 106.135 22.91 150.185 21.5 204.813c23.035 23.153 37.246 53.802 48.72 86.312 37.776-75.574 103.61-112.37 154.28-109.22-12.233-36.11-9.912-77.263-10.344-115.968-10.255-5.718-22.525-8.79-35.906-9.25-1.585-.054-3.2-.08-4.813-.062zm42.78 144c-36.993 1.83-87.634 28.563-121.218 84.094 25.173 56.788 58.682 115.636 94.688 155.25 30.954-10.902 72.793-30.752 113.093-54.408-19.64-45.728-15.747-92.128 1.595-128.812-9.745.435-18.834-.526-27.313-2.906-2.768-.777-5.445-1.726-8.062-2.78l.375.655c-5.122 2.997-12.668 10.257-18.813 19.03-6.144 8.773-11.073 19.095-12.75 27.688l-18.343-3.563c2.4-12.312 8.46-24.392 15.78-34.844 5.023-7.17 10.564-13.568 16.438-18.56-5.982-4.3-11.545-9.33-16.688-15.032-19.934 9.052-40.194 31.397-43.313 50.156l-18.437-3.063c4.4-26.468 25.81-49.992 49.938-62.155-2.39-3.44-4.697-7.03-6.97-10.75zm185.813 2.78c-.733.002-1.483.004-2.217.032-11.748.45-23.438 4.37-34.625 11.063-44.48 26.61-76.574 99.088-42.72 169.563l7.25 7.25-10.25 6.156c-46.5 27.946-95.11 51.027-130.75 62.53l12.345 17.875c92.26-33.88 212.588-103.56 290.843-165.78-13.427-54.603-34.915-85.3-57.062-99-10.753-6.654-21.793-9.703-32.813-9.69z"  fillRule="evenodd"/>
</svg>

  );
}

Tread.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
