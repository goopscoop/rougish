import React from 'react';

export default function StagHead({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M76.465 73.324c-16.696 10.814-24.31 28.1-23.647 44.938.664 16.837 8.676 33.327 21.393 46.06 1.265 1.266 2.596 2.48 3.962 3.66-6.772 11.33-17.072 12.974-25.512 10.586-4.85-1.372-8.708-4.328-10.676-7.86-1.967-3.534-2.67-7.755.055-14.26l-17.24-7.22c-4.57 10.91-3.87 22.082.858 30.573 4.73 8.492 12.865 14.19 21.914 16.75 15.546 4.4 34.89-1.218 46.02-18.22 8.568 4.33 18.18 7.156 28.428 7.986.676 11.475 4.846 22.184 11.634 31.79-6.064 2.136-11.192 6.248-14.42 11.61-8.616 14.312-2.927 35.32 17.545 49.546l10.665-15.348c-15.297-10.63-14.877-20.11-12.2-24.56 1.34-2.225 3.435-3.745 6.835-4.122 2.942-.325 7.056.338 12.09 3.4 2.958 2.186 6.07 4.265 9.318 6.222 16.108 9.698 35.805 16.807 57.666 20.578-8.085 6.224-13.812 14.285-18.125 23.445-32.812-8.59-64.65-.154-94.98 34.63 31.59 7.23 62.19 8.758 90.403-3.44l37.96 106.415c4.404 16.44 32.492 16.902 37.023 0l38.19-107.068c28.615 12.89 59.722 11.447 91.856 4.092-30.527-35.005-62.578-43.322-95.61-34.457-4.212-9.323-10.003-17.065-17.64-22.962 23.48-3.564 44.62-10.94 61.715-21.234 3.647-2.196 7.118-4.546 10.395-7.032 4.38-2.353 8.002-2.883 10.658-2.59 3.4.377 5.495 1.897 6.834 4.122 2.678 4.45 3.1 13.93-12.2 24.56l10.665 15.348c20.47-14.227 26.16-35.234 17.544-49.547-3.177-5.278-8.2-9.34-14.14-11.5 6.82-9.616 11.017-20.34 11.708-31.832 10.273-.694 19.92-3.39 28.547-7.608 11.174 16.657 30.315 22.136 45.726 17.776 9.05-2.56 17.186-8.258 21.916-16.75 4.73-8.49 5.426-19.663.857-30.573l-17.24 7.22c2.725 6.506 2.023 10.727.055 14.26-1.967 3.533-5.827 6.49-10.677 7.86-8.265 2.34-18.312.807-25.084-9.895 1.652-1.39 3.24-2.84 4.75-4.35 12.717-12.733 20.73-29.223 21.392-46.06.664-16.838-6.95-34.124-23.646-44.938L429.85 89.01c11.61 7.52 15.573 17.276 15.13 28.515-.442 11.24-6.222 23.858-15.94 33.59-14.804 14.823-37.444 23.673-64.16 12.772 6.135-3.766 11.356-9.778 14.567-17.617l-17.293-7.084c-2.673 6.526-6.154 9.016-10.043 10.123-3.887 1.105-8.706.464-13.106-1.996-8.8-4.92-15.577-15.34-8.467-31.55l-17.113-7.508c-9.727 22.175-1.276 43.15 13.22 53.326l-.064.072c15.934 13.58 32.233 20.995 47.748 23.71-5.807 15.017-14.117 23.457-22.94 28.003-9.28 4.783-19.567 5.284-28.773 2.78-9.206-2.505-17.03-8.12-21.066-14.44-4.037-6.32-5.028-12.746-.87-20.894l-16.65-8.495c-6.945 13.616-5.262 28.437 1.767 39.446 7.028 11.01 18.657 18.81 31.912 22.416 3.39.922 6.906 1.558 10.493 1.882-19.513 8.518-43.958 13.754-70.484 13.754-25.172 0-48.48-4.706-67.468-12.464 2.604-.36 5.162-.886 7.652-1.563 13.255-3.606 24.886-11.408 31.914-22.417 7.03-11.01 8.71-25.83 1.764-39.445l-16.646 8.494c4.157 8.15 3.166 14.573-.87 20.894-4.035 6.32-11.86 11.936-21.066 14.44-9.206 2.504-19.49 2.002-28.773-2.78-9.087-4.684-17.627-13.502-23.452-29.378 15.617-2.462 32.07-9.685 48.17-23.15 15.274-9.814 24.522-31.367 14.51-54.192l-17.113 7.508c7.11 16.21.332 26.63-8.467 31.55-4.4 2.46-9.217 3.1-13.105 1.995-3.89-1.108-7.372-3.597-10.045-10.124l-17.293 7.084c3.182 7.77 8.34 13.746 14.404 17.517-26.822 11.052-49.555 2.195-64.402-12.672-9.72-9.732-15.5-22.35-15.942-33.59-.443-11.24 3.523-20.996 15.133-28.515l-10.16-15.686z" />
</svg>

  );
}

StagHead.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
