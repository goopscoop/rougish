import React from 'react';

export default function GooeySword({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M159.977 20.63c78.967 153.842 60.076 197.813-140.143 27.124v71.185C48.22 134 72.317 147.707 92.607 160.23c-23.095.797-27.865 26.2 6.827 50.518 34.105 23.908 59.087 13.718 54.964-6.256 75.656 67.92-15.78 85.644-134.564 105.58v62.512c125.702-58.524 142.942-36.168 37.998 123.324h58.27c100.945-258.564 155.41-177.483 125.953 0h33.115c8.185-107.59 37.76-129.26 60.62 0h45.493c-141.196-219.314-28.308-204.87 113.828-140.215V309.8c-239.157-11.635-236.9-101.798 0-133.443V85.813c-72.386 39.545-74.392 15.146-7.327-65.182h-30.396c-141.87 206.317-167.428 173.33-114.166 0H297.82c-26.108 98.248-72.014 80.678-90.902 0h-46.94zm-21.49 55.854c-12.85-.12-17.734 15.212-.45 35.832 27.02 32.236 54.07 12.942 27.088-19.246-9.712-11.586-19.428-16.518-26.637-16.586zM293.226 90.48c2.17.067 4.405.65 6.636 1.866 17.85 9.735-.25 40.7-18.1 30.963-15.646-8.534-3.72-33.294 11.465-32.83zm-52.766 12.207c9.52 0 17.24 7.72 17.24 17.24 0 5.46-2.544 10.315-6.5 13.473l5.82 41.4 49.345-6.94 6.96 49.476-18.51 2.6-4.354-30.967-20.23 2.844c14.463 68.143 18.467 141.156 9.012 201.95-25.853-55.827-42.906-127.008-47.84-196.49l-19.964 2.808 4.355 30.97-18.506 2.602-6.96-49.478 48.19-6.776-5.93-42.144c-5.558-2.86-9.368-8.644-9.368-15.328 0-9.523 7.718-17.24 17.24-17.24zm202.01 23.862c.564.007 1.116.028 1.655.057 8.632.48 13.786 3.577 15.94 6.46 2.156 2.882 2.776 5.828-.133 11.367-2.91 5.538-10.27 12.996-23.912 19.81-13.666 6.827-25.43 9.032-34.06 8.553-8.63-.48-13.785-3.578-15.94-6.46-2.156-2.884-2.775-5.834.134-11.372 2.91-5.538 10.27-12.995 23.91-19.807 12.81-6.4 23.952-8.736 32.407-8.61zM182.167 293.11c.517.002 1.022.02 1.518.05 4.754.292 8.485 1.81 10.763 3.774 3.038 2.62 4.42 5.677 3.496 10.87-.923 5.194-4.94 12.75-14.824 21.057-19.795 16.637-35.19 14.16-40.83 8.855-2.822-2.653-4.21-6.063-3.21-11.46 1-5.395 4.96-12.846 14.28-20.775 10.906-9.276 21.052-12.416 28.806-12.37zm186.98 47.52c-25.603.182-26.42 26.004 20.002 60.106 72.344 53.145 114.972 20.073 42.516-33.146-25.997-19.098-48.157-27.064-62.52-26.96z" />
</svg>

  );
}

GooeySword.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
