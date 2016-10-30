import React from 'react';

export default function StarProminences({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M258.344 21.78l-54.625 91.94-100.97-35.314L120 183.97 19.97 221.812l81.06 69.78-52.31 93.282 106.936 1.344 19.906 105.06 82.782-67.686 82.78 67.687 19.907-105.06 106.94-1.345-52.283-93.28 81.032-69.783-100.033-37.843 17.25-105.564L313 113.72l-54.656-91.94zM264 119.72c37.302 0 71.283 14.157 96.906 37.374-8.81-3.43-18.117-5.836-27.78-6.813-1.917-.195-3.885-.204-5.845-.155-1.958.05-3.906.156-5.874.156-6.82 0-13.483.607-19.97 1.75-1.52-8.805-9.163-15.53-18.405-15.53-10.336 0-18.717 8.382-18.717 18.72 0 3.28.83 6.38 2.312 9.06-7.876 4.325-15.186 9.538-21.78 15.532.445-.024.89-.03 1.343-.03 13.13 0 23.78 10.62 23.78 23.75 0 13.128-10.65 23.78-23.78 23.78-12.214 0-22.278-9.21-23.625-21.062-5.432-11.885-17.44-20.22-31.282-20.22-18.877 0-34.405 15.498-34.405 34.376 0 18.88 15.528 34.375 34.406 34.375 5.442 0 10.6-1.276 15.19-3.56.008-.012.02-.02.03-.032 3.434-4.16 8.623-6.813 14.438-6.813 10.336 0 18.718 8.383 18.718 18.72 0 10.334-8.382 18.717-18.72 18.717-4.062 0-7.805-1.298-10.874-3.5-3.412-3.62-8.225-5.906-13.593-5.906-10.338 0-18.72 8.382-18.72 18.72 0 10.334 8.382 18.718 18.72 18.718 7.335 0 13.65-4.23 16.718-10.375 6.167 18.95 17.18 35.682 31.562 48.78.407-9.524 7.913-17.163 17.375-17.813-.51-2.338-.813-4.766-.813-7.25 0-18.878 15.528-34.375 34.407-34.375 18.877 0 34.374 15.497 34.374 34.375 0 18.88-15.497 34.375-34.375 34.375-5.104 0-9.972-1.13-14.345-3.156-1.564 5.255-5.37 9.54-10.313 11.75 15.172 7.477 32.246 11.688 50.344 11.688 14.427 0 28.192-2.858 40.875-7.875-25.773 23.952-60.31 38.592-98.28 38.592-79.764 0-144.438-64.642-144.438-144.406 0-79.762 64.674-144.437 144.438-144.437zm59.625 62.436c10.337 0 18.72 8.384 18.72 18.72 0 10.334-8.383 18.718-18.72 18.718s-18.72-8.384-18.72-18.72c0-10.336 8.383-18.718 18.72-18.718zM191.28 204.72c8.777 0 15.69 6.91 15.69 15.686s-6.913 15.688-15.69 15.688c-8.775 0-15.686-6.912-15.686-15.688s6.91-15.687 15.687-15.687zM295.72 307.5c-8.777 0-15.72 6.91-15.72 15.688 0 8.776 6.943 15.687 15.72 15.687 8.775 0 15.686-6.91 15.686-15.688 0-8.776-6.91-15.687-15.687-15.687zm-96.908 18.594c-8.558 0-15.468 6.94-15.468 15.5 0 8.557 6.91 15.5 15.47 15.5 8.557 0 15.5-6.943 15.5-15.5 0-8.558-6.943-15.5-15.5-15.5z" />
</svg>

  );
}

StarProminences.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
