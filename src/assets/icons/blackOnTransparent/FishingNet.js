import React from 'react';

export default function FishingNet({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M161.906 17.313c-32.745-.026-63.754 8.217-88.97 24.187-28.815 18.25-49.85 47.08-55.842 84.156-5.992 37.076 2.83 81.875 31.25 133 19.833 35.678 44.25 63.807 59.656 93.53 7.02 13.544 12.32 27.284 14.78 42.47-.248.354-.503.703-.75 1.063l1.032.717c1.41 9.635 1.69 19.878.5 31-14.638 2.828-25.687 15.692-25.687 31.157 0 17.536 14.214 31.78 31.75 31.78s31.75-14.244 31.75-31.78c0-13.152-8.01-24.43-19.406-29.25 1.015-10.198.995-19.882.093-29.094 9.192-10.817 19.95-16.3 33.25-18.188 14.68-2.083 32.725.776 53.312 8.125 5.1 9.744 9.704 20.06 13.656 31.125-9.14 5.408-15.28 15.362-15.28 26.75 0 17.143 13.89 31.032 31.03 31.032 17.143 0 31.033-13.89 31.033-31.03 0-16.272-12.507-29.653-28.438-30.97-4.033-11.586-8.723-22.412-13.906-32.625 10.14-9.82 27.46-16.622 47.593-20.564 21.96-4.3 46.653-5.426 67.406-6 7.023 6.407 13.902 13.15 20.624 20.25-.554 2.26-.844 4.63-.844 7.063 0 16.353 13.27 29.624 29.625 29.624 16.354 0 29.594-13.27 29.594-29.625s-13.24-29.595-29.595-29.595c-6.93 0-13.296 2.39-18.344 6.375-6.466-6.684-13.058-13.027-19.75-19.094-.99-49.135 13.3-87.584 37.814-119.187 8.865-2.254 17.997-5.46 27.406-9.72 5.738 5.698 13.623 9.22 22.344 9.22 17.536 0 31.75-14.247 31.75-31.782 0-17.536-14.214-31.75-31.75-31.75s-31.75 14.214-31.75 31.75c0 2.092.207 4.144.594 6.125-7.807 3.503-15.286 6.152-22.47 8.03-15.493-19.9-16.902-35.523-12.593-52.812 4.592-18.42 17.344-38.57 29.97-61.874 6.295-4.02 11.915-8.884 16.686-14.625 5.46 4.167 12.292 6.626 19.69 6.626 17.93 0 32.467-14.538 32.467-32.47 0-17.93-14.538-32.467-32.468-32.467-17.93 0-32.47 14.537-32.47 32.468 0 3.396.532 6.672 1.5 9.75-11.25 16.83-32.785 26.225-58.875 26.687-26.548.47-57.05-8.564-82.688-27.25-39.195-28.567-84.18-42.28-126.28-42.313zm46.78 25c18.58 4.78 37.096 12.455 54.69 23.218l.093 14.75c-1.47-1.145-2.925-2.297-4.408-3.436-15.724-12.086-32.228-23.704-49.906-32.72l-.47-1.812zm-66.874 3.156c1.707-.03 3.375.002 5.063.06l4.594 15.782c-11.176-5.2-22.895-9.356-35.282-12.093 8.822-2.413 17.346-3.618 25.624-3.75zm25.313 2.78c3.358.77 6.683 1.666 10 2.72 5.455 1.73 10.838 3.877 16.188 6.31l9.78 36.94c-9.146-7.268-18.607-14.132-28.468-20.282l-7.5-25.688zm-62.813 17.78c18.473 3.034 35.487 9.685 51.563 18.72l-10.78 18.625c-13.16-12.905-26.647-25.49-40.782-37.344zm111.532 3.345c10.785 6.643 21.38 14.263 31.812 22.28 5.356 4.118 10.66 8.332 15.938 12.564l.28 44.093c-11.714-10.653-23.57-21.905-35.843-32.907l-12.186-46.03zm66.312 8.844c12.675 8.534 26.206 15.083 39.938 19.624l.656 28.25c-12.96-8.724-26.472-19.59-40.5-30.875l-.094-17zm-192.25.186c15.62 13.022 30.56 27.285 45.344 42.063l-13.813 23.905c-12.677-18.902-23.343-40.514-31.53-65.97zm-16.78 8.72c.08.238.168.48.25.718l-.314-.03c.02-.232.042-.458.063-.69zm98.655 7.5c13.71 9.25 26.823 20 39.72 31.343l.47 1.75-16.532 26.405c-12.24-12.262-24.36-24.72-36.625-37.063l12.968-22.437zm224.69 7.843c-8.197 14.607-15.786 28.98-19.845 44.25-11.2.21-22.797-3.228-34.938-9.345l-.78-34.594c10.233 2.024 20.412 2.957 30.28 2.782 8.688-.153 17.206-1.167 25.282-3.093zM53.593 110.5c.298 21.83 3.718 41.284 9.406 58.938L46.75 166c-.628-16.01 1.42-34.248 6.844-55.5zm32.375 8.688c6.464 13.66 13.775 26.172 21.75 37.75l-13.564 5.718c-4.862-12.975-7.796-27.29-8.187-43.47zm196.436.124c10.612 8.432 21.17 16.52 31.78 23.532 3.016 1.99 6.047 3.876 9.095 5.687l1.064 45.69c-14.144-7.665-27.906-17.834-41.656-29.376l-.282-45.53zm-133.53 14.938c11.913 12.154 23.853 24.5 36.06 36.688L168.5 197.25c-12.586-11.07-24.318-23.042-34.97-36.406l15.345-26.594zm77.75 5.28c11.33 10.35 22.596 20.897 34.06 31 .78.686 1.566 1.352 2.345 2.032l-17.155 28.625c-12.688-10.636-24.86-21.932-36.813-33.562l17.563-28.094zm115.56 18.626c10.332 4.298 20.897 6.985 31.752 7.22-.26 14.074 3.538 28.752 12.875 43.624-10.956.798-21.3-.18-31.25-2.53-4.163-.985-8.277-2.217-12.344-3.69l-1.033-44.624zm-223.03 14.188c9.934 12.457 20.683 23.774 32.063 34.25l-22.75 8c-9.365-9.56-17.67-19.842-24.345-31.156-.74-1.256-1.454-2.532-2.156-3.813l17.186-7.28zm79.438 12c11.992 11.56 24.347 22.837 37.312 33.5L223.53 238.47c-1.34-.892-2.698-1.762-4.03-2.657-12.663-8.513-24.893-17.225-36.53-26.47l15.624-25zm78.937.437c13.99 11.308 28.45 21.434 43.94 29.032l-16.283 28.532c-15.786-8.608-30.537-18.528-44.593-29.344l16.937-28.22zm-228.56.782l22.093 4.657c5.328 11.68 11.658 22.567 18.718 32.874l-27.53-1.906c-6.037-10.696-10.69-22.35-13.28-35.625zm118.53 35.125c11.417 9.363 23.3 18.083 35.47 26.438l-24.22 8.156c-4.48-3.073-8.934-6.18-13.313-9.374C158 240.482 150.78 234.88 143.907 229l23.593-8.313zm171.344.375c4.06 1.392 8.19 2.597 12.406 3.594 10.908 2.58 22.295 3.69 34.188 3.03-7.686 12.092-14.103 25.11-19.063 39.095-15.766-4.158-30.533-9.576-44.47-16.03l16.94-29.688zm-88.156 8.438c14.17 10.696 29.1 20.58 45.125 29.25L285 277.688c-15.492-9.92-30.87-19.428-45.813-29l11.5-19.188zm-126.938 6.563c9.727 8.983 20.107 17.22 30.688 24.937.768.56 1.542 1.1 2.312 1.656l-6.72 2.25c-3.186-3.26-6.345-6.497-9.436-9.75-5.978-6.29-11.742-12.572-17.25-18.937l.406-.157zm-48.25 4.78l27.094 1.876 1.937.124.095-.03c7.116 8.703 14.652 17.057 22.406 25.217.062.065.128.125.19.19l-25.782.936c-6.93-6.744-13.552-13.51-19.594-20.562-2.188-2.554-4.294-5.13-6.344-7.75zm147.125 19.407c15.054 9.785 30.377 19.298 45.72 29.063l-24.064 10.812c-1.623-1.25-3.274-2.485-4.936-3.72-12.823-9.517-26.84-18.663-41-28l24.28-8.155zm89.906 6.906c15.11 7.027 31.187 12.984 48.408 17.563-3.353 13.355-5.455 27.517-6.157 42.5-17.718-14.475-35.907-27.327-54.092-39.345l11.843-20.72zm-136.624 8.78c17.136 11.522 34.034 22.214 48.844 32.94l-22.938 10.312c-12.137-14.002-24.795-26.934-37.187-39.47l11.28-3.78zm-31.187 10.314c11.533 11.7 23.195 23.38 34.405 35.656h-24.813c-10.704-12.562-22.383-23.846-33.937-34.75l23.5-.875.844-.03zm-50.876 1.906c11.723 11.343 23.668 22.268 34.75 33.75H112c-7.176-11.327-14.92-22.363-22.656-33.594l4.5-.156zm193.22 13.25c18.212 11.954 36.277 24.547 53.748 38.625-16.11.81-33.44 2.303-50.093 5.564-1.535.3-3.073.607-4.595.937-6.098-12.332-15.16-23.118-25.938-33.06l26.875-12.064zm-45.627 20.47c11.254 9.566 20.28 19.334 26.188 29.718-11.305 3.824-21.674 8.988-30.156 16.156-7.19-12.018-15.053-23.145-23.314-33.625l27.28-12.25zM122.97 340.593h22.218c6.33 7.897 12.09 16.232 16.968 25.25-8.672 2.552-16.765 6.687-24.03 12.437-3.2-12.29-7.883-23.786-13.532-34.686-.524-1.012-1.087-1.997-1.625-3zm45.686 0h26.688c6.775 8.27 13.25 16.9 19.312 26.03-11.515-2.81-22.573-4.233-33.094-3.843-3.835-7.878-8.18-15.253-12.906-22.186z" />
</svg>

  );
}

FishingNet.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
