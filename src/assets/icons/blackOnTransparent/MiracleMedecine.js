import React from 'react';

export default function MiracleMedecine({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M175.246 21.422L107.7 60.462l13.984 24.25 24.837-14.357 43.263 75.016-15.336 8.864c-8.12-11.014-20.585-17.512-33.636-18.453-8.796-.633-17.854 1.252-26.013 5.968-21.757 12.575-29.29 40.725-16.733 62.498 12.557 21.773 40.702 29.325 62.46 16.75 8.14-4.705 14.287-11.59 18.138-19.504l91.973 159.48 20.86-12.056 33.67 58.385 11.755-6.794 55.09 95.523 16.19-9.34-55.098-95.538 11.203-6.474-33.67-58.383 20.86-12.057-89.382-154.986c9.45 1.12 19.314-.67 28.13-5.764 21.756-12.575 29.288-40.725 16.732-62.498-7.848-13.608-21.785-21.66-36.446-22.717-8.797-.633-17.855 1.25-26.014 5.967-18.31 10.583-26.544 32.196-21.21 51.756l-17.343 10.024L162.7 61.004l26.53-15.334-13.984-24.248zm166.79 65.197L315.19 211.13l51.998 90.18 98.197 12.633-84.182-53.832 85.135-7.583-48.7-38.593 74.635-70.862-84.156 28.23-4.273-63.06-52.858 75.756-8.95-97.38zm-74.684 3.038c.58-.003 1.16.015 1.738.055 7.698.526 14.96 4.785 19.164 12.074 6.725 11.662 2.815 26.265-8.824 32.992-11.64 6.727-26.2 2.823-32.926-8.84-6.726-11.66-2.815-26.263 8.826-32.99 3.82-2.208 7.953-3.272 12.022-3.292zm-36.168 53.37L325.977 307.4l-48.498 28.03-94.794-164.37 48.498-28.03zm-93.55 14.14c.58-.003 1.16.015 1.737.055 7.7.526 14.962 4.783 19.165 12.072 6.726 11.662 2.815 26.265-8.824 32.992-11.64 6.728-26.2 2.826-32.925-8.836-6.725-11.66-2.814-26.265 8.826-32.993 3.82-2.208 7.955-3.27 12.023-3.29zm-30.464 85.34l44.424 40.724-101.96 4.772 81.18 43.94-96.996 81.226 109.668-25.215-4.494 82.777 63.87-78.173 26.32 70.577 26.832-87.922L191.26 262.91l-84.09-20.402z" />
</svg>


  );
}

MiracleMedecine.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
