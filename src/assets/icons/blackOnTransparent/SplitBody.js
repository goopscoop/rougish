import React from 'react';

export default function SplitBody({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M250.438 19.594v145.22h.03V330.28l-10.093-.81c-27.058-2.19-56.044-5.276-88.03-9.72-.1 5.036-.158 10-.19 14.875h44.501l.656 8.625 11.344 151.094h97.688l10.03-151 .563-8.72h42.344c-.01-36.5-.335-78.42-7.874-112.624-4.087-18.543-10.27-34.625-18.97-46.188-8.698-11.562-19.477-18.87-34.967-21.25l-16.033-2.437 10.188-12.656c10.106-12.556 16.875-30.444 16.875-50.407 0-39.556-25.013-69.376-53.03-69.376-2.638 0-4.353-.113-5.032-.093zM231.75 26.78c-16.906 11.36-29.344 34.582-29.344 62.282 0 20.463 7.124 38.57 17.688 51.188l10.28 12.25-1.718.313c1.025.206 2.077.422 3.094.625V26.78zM18.625 116.657v36.78c68.436 24.506 143.668 44.89 213.156 56.408v-37.438c-56.514-11.077-124.994-28.567-213.155-55.75zM490 134.562c-7.485 8.574-15.784 16.955-25.906 24.407 3.745 14.43 2.986 27.84-2.875 39.405-8.59 16.945-26.72 27.95-51.126 34.22l-.22.06-.187.032c-11.353 2.378-23.56 4.027-36.468 5.032 3.345 22.975 4.38 47.274 4.686 70.31 6.372-1.126 12.395-2.4 18.03-3.842 35.658-9.13 56.96-23.943 70.533-42.47 23.152-31.603 23.82-77.4 23.53-127.156zm-42.72 34.844c-4.923 2.54-10.207 4.874-15.967 6.938-18.555 6.645-41.535 10.554-71.22 10.75 4.08 9.59 7.164 19.987 9.563 30.875.084.38.168.772.25 1.155 12.848-.86 24.825-2.41 35.75-4.688 21.316-5.513 33.686-14.26 38.875-24.5 2.878-5.676 3.99-12.407 2.75-20.53zM18.626 173.28v103.657c87.692 18.675 154.946 27.856 213.156 32.938v-81.063c-69.586-11.302-144.43-31.31-213.155-55.53z"  fillRule="evenodd"/>
</svg>

  );
}

SplitBody.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
