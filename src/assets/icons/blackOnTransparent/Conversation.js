import React from 'react';

export default function Conversation({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M211.313 21.094c-51.776 0-98.754 12.252-133.5 32.718C43.066 74.28 19.874 103.78 19.874 137.69c0 33.54 22.692 62.81 56.813 83.25L48.156 327.094l96.97-79.844c20.65 4.58 42.924 7.063 66.186 7.063 51.776 0 98.786-12.252 133.532-32.72 34.746-20.466 57.937-49.997 57.937-83.905s-23.19-63.41-57.936-83.875c-34.746-20.467-81.756-32.72-133.53-32.72zm0 18.687c48.8 0 92.866 11.77 124.03 30.126 31.165 18.357 48.75 42.447 48.75 67.78 0 25.338-17.585 49.457-48.75 67.814-31.164 18.357-75.23 30.125-124.03 30.125S118.445 223.857 87.28 205.5c-31.163-18.357-48.718-42.476-48.718-67.813 0-25.336 17.555-49.424 48.72-67.78C118.445 51.55 162.51 39.78 211.31 39.78zM96.53 89.938v18.688h93.126V89.937H96.53zm111.814 0v18.688h28.094V89.937h-28.094zm46.78 0v18.688h71.97V89.937h-71.97zM96.532 129.844v18.72h29.657v-18.72H96.53zm48.345 0v18.72h65.938v-18.72h-65.938zm84.656 0v18.72h38.095v-18.72H229.53zm56.782 0v18.72h40.782v-18.72h-40.78zM96.532 166.78v18.69h70.874v-18.69H96.53zm89.562 0v18.69h57.03v-18.69h-57.03zm75.72 0l-.002 18.69h65.282v-18.69h-65.28zm92.342 90.25c-74.88 0-135.594 41.762-135.594 93.283 0 51.52 60.716 93.28 135.594 93.28 18.23 0 35.623-2.48 51.5-6.968l68.53 51.156-24.873-71.03c24.947-16.918 40.437-40.432 40.437-66.438 0-51.518-60.714-93.28-135.594-93.28zm-70.344 42.345h32.907v18.688H283.81v-18.688zm51.594 0h90.344v18.688h-90.344v-18.688zm-78.97 41.75h78.314v18.688h-78.313v-18.688zm97.002 0h20.968v18.688h-20.97l.002-18.688zm39.656 0h51v18.688h-51v-18.688zm-109.28 39h79.06v18.688h-79.062v-18.688zm97.748 0h44.188v18.688h-44.188v-18.688z" />
</svg>

  );
}

Conversation.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
