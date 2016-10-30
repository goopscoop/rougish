import React from 'react';

export default function Skeleton({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M266.7 175.748v8.948h33.962a10.164 10.164 0 0 1-.094 20.329H266.7v8.948h2.672a10.165 10.165 0 0 1-.252 20.329h-2.42v8.948h1.666a10.165 10.165 0 1 1-.252 20.329h-1.425V268.368a10.175 10.175 0 0 1-10.153 9.954h-.147a10.164 10.164 0 0 1-10.018-10.31v-4.433h-1.666a10.164 10.164 0 0 1 .105-20.329h1.561v-8.948h-1.666a10.164 10.164 0 0 1 .105-20.329h1.561v-8.948h-33.95a10.164 10.164 0 0 1-6.979-17.447 9.997 9.997 0 0 1 7.23-2.871h33.71v-8.949h-33.95a10.164 10.164 0 0 1 .104-20.328h33.856v-8.95h-12.008a10.164 10.164 0 1 1 .105-20.328h11.893v-9.724a10.164 10.164 0 0 1 9.913-10.258 3.217 3.217 0 0 1 .492 0 10.154 10.154 0 0 1 9.913 10.3v9.672h11.998a10.164 10.164 0 0 1 6.978 17.457 10.08 10.08 0 0 1-7.23 2.871h-11.746v8.939h33.96a10.196 10.196 0 0 1 3.825 19.584 9.357 9.357 0 0 1-3.887.744H266.7zm-46.493-61.206a10.185 10.185 0 0 0-9.137-5.742h-.126a10.154 10.154 0 0 0-4.558 1.11l-29.225 14.618a10.164 10.164 0 0 0 8.76 18.306l.304-.146 29.236-14.67a10.185 10.185 0 0 0 4.746-13.476zm118.733 20.203a10.185 10.185 0 0 0-4.328-13.727l-.251-.126-29.235-14.67a10.164 10.164 0 1 0-9.127 18.16l29.235 14.617a10.175 10.175 0 0 0 13.706-4.265zm-156.487 23.65a10.122 10.122 0 0 0-7.178-3.08h-.262a10.175 10.175 0 0 0-10.017 10.268v58.513a10.164 10.164 0 0 0 10.028 10.3h.146a10.175 10.175 0 0 0 10.154-9.913 3.751 3.751 0 0 0 0-.46v-58.398a10.101 10.101 0 0 0-2.87-7.23zm154.234-3.08a10.175 10.175 0 0 0-10.017 10.268v58.513a10.164 10.164 0 0 0 10.028 10.3h.21a9.043 9.043 0 0 0 3.447-.566 10.3 10.3 0 0 0 6.643-9.347 3.751 3.751 0 0 0 0-.46v-58.398a10.164 10.164 0 0 0-10.049-10.31h-.262zM300.19 270.085a10.196 10.196 0 0 0-5.386 1.76l-38.278 25.526-38.247-25.494a10.08 10.08 0 0 0-5.742-1.792 9.829 9.829 0 0 0-4.872 1.216 10.206 10.206 0 0 0-5.24 8.927 10.101 10.101 0 0 0 4.6 8.54l43.874 29.256a10.101 10.101 0 0 0 12.501-.775l42.69-28.45a10.164 10.164 0 0 0-5.9-18.714zm-80.276 51.429a10.122 10.122 0 0 0-7.178-3.08h-.262a10.175 10.175 0 0 0-10.017 10.268v58.512a10.164 10.164 0 0 0 10.028 10.3h.146a10.175 10.175 0 0 0 10.154-9.912 3.751 3.751 0 0 0 0-.46v-58.387a10.101 10.101 0 0 0-2.86-7.241zm87.82 0a10.112 10.112 0 0 0-7.177-3.08h-.262a10.175 10.175 0 0 0-10.007 10.268v58.512a10.164 10.164 0 0 0 10.028 10.3h.23a8.886 8.886 0 0 0 3.438-.565 10.321 10.321 0 0 0 6.632-9.357 4.024 4.024 0 0 0 0-.44v-58.397a10.09 10.09 0 0 0-2.87-7.241zm-87.82 93.48a10.112 10.112 0 0 0-7.178-3.082h-.262a10.175 10.175 0 0 0-10.017 10.27v58.512a10.164 10.164 0 0 0 10.028 10.3h.146a10.175 10.175 0 0 0 10.154-9.913 3.783 3.783 0 0 0 0-.46v-58.398a10.09 10.09 0 0 0-2.86-7.23zm-37.46-165.426a10.112 10.112 0 0 0-7.179-3.08h-.262a10.175 10.175 0 0 0-10.017 10.268v21.806a10.164 10.164 0 0 0 10.028 10.3h.146a10.175 10.175 0 0 0 10.154-9.912 3.751 3.751 0 0 0 0-.461v-21.68a10.09 10.09 0 0 0-2.87-7.241zm161.673 3.668a10.112 10.112 0 0 0-7.178-3.081h-.262a10.175 10.175 0 0 0-10.017 10.269v21.774a10.164 10.164 0 0 0 10.028 10.3h.21a9.043 9.043 0 0 0 3.447-.565 10.3 10.3 0 0 0 6.643-9.347 3.772 3.772 0 0 0 0-.461v-21.66a10.09 10.09 0 0 0-2.871-7.23zm-36.382 161.757a10.112 10.112 0 0 0-7.178-3.08h-.261a10.175 10.175 0 0 0-10.007 10.268v58.513a10.164 10.164 0 0 0 10.028 10.3h.21a9.001 9.001 0 0 0 3.447-.566 10.31 10.31 0 0 0 6.643-9.357 4.045 4.045 0 0 0 0-.44v-58.408a10.09 10.09 0 0 0-2.882-7.23zM285.74 59.467c0 17.363-13.13 38.467-28.292 38.467s-30.157-21.02-30.157-38.467C227.29 34.193 242.265 21 257.448 21c15.184 0 28.334 13.109 28.334 38.467zm-34.086-3.51a9.095 9.095 0 1 0-9.096 9.095 9.095 9.095 0 0 0 9.137-9.095zm27.883 0a9.095 9.095 0 1 0-9.095 9.095 9.095 9.095 0 0 0 9.137-9.095z" />
</svg>

  );
}

Skeleton.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
