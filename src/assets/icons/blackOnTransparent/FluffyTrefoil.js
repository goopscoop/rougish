import React from 'react';

export default function FluffyTrefoil({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M347.992 22.832c-51.712.07-101.096 34.503-109.127 86.984-6.792 44.385 21.9 91.457 68.047 97.996 33.752 4.784 69.154-16.666 73.35-50.78 2.95-23.992-12.95-49.414-37.766-52.053-5.27-.562-10.605.153-15.478 1.91-7.48 1.888-13.638 7.08-16.848 13.93-1.555 2.91-2.556 6.132-2.83 9.608-.395 5 1.114 10.15 3.95 14.144 4.44 7.53 12.626 12.586 22 12.586 7.837 0 14.846-3.534 19.528-9.094-1.186 6.693-5.074 12.374-9.923 16.1-5.798 4.454-12.964 6.677-20.323 6.29-21.858-1.142-35.413-21.852-33.86-41.5 2.225-28.175 29.754-45.323 55.76-42.558 36.215 3.852 58.474 39.28 54.337 72.918-5.608 45.582-51.27 73.13-94.52 67-35.455-5.024-62.33-28.824-75.702-59.06-25.502-12.462-54.185-18.076-82.324-15.568-73.17 6.52-135.548 70.878-128.2 146.78 5.672 58.588 56.423 108.3 115.655 101.75 44.613-4.93 82.65-44.843 77.028-91.126-4.112-33.853-33.983-62.497-68.006-57.717-23.93 3.362-44.37 25.31-40.498 49.973 2.195 13.982 13.266 26.085 26.428 27.617 1.503.276 3.05.426 4.633.426 14.097 0 25.523-11.428 25.523-25.525 0-10.782-6.687-19.994-16.14-23.734 6.22-.15 12.117 2.062 16.607 5.505 5.8 4.448 9.8 10.797 11.332 18.004 4.548 21.41-11.938 39.867-31.315 43.456-27.79 5.148-51.47-17.014-55.527-42.854-5.648-35.982 22.8-66.658 56.358-71.373 45.47-6.39 83.886 30.595 89.154 73.966 1.82 14.983.02 29.355-4.59 42.527 2.383 27.298 11.775 53.85 27.447 76.166 42.22 60.117 129.123 81.955 191.172 37.628 47.897-34.216 65.572-103.043 30.295-151.074-26.57-36.177-80.135-49.16-117.4-21.143-27.258 20.495-37.133 60.7-15.988 87.78 14.873 19.044 44.09 25.772 63.51 10.083 12.984-10.49 17.54-30.37 6.88-42.858-2.156-2.525-4.954-4.495-7.997-5.785-1.582-.81-3.27-1.47-5.055-1.95-13.617-3.648-27.613 4.433-31.26 18.05-.784 2.92-1.024 5.86-.79 8.71-3.532-5.438-4.66-11.908-3.897-17.728.952-7.248 4.448-13.887 9.924-18.818 16.265-14.65 40.494-9.6 53.287 5.39 18.35 21.496 10.997 53.09-9.35 69.526-28.333 22.888-69.12 13.59-89.978-13.12-28.26-36.19-15.44-87.96 19.482-114.214 17.342-13.038 37.328-18.982 57.246-18.992 12.108-.007 24.188 2.19 35.635 6.306 19.393-21.698 32.76-48.573 37.747-77.1 12.655-72.385-33.343-149.295-108.54-161.83-6.347-1.058-12.734-1.567-19.085-1.558z"/>
</svg>

  );
}

FluffyTrefoil.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
