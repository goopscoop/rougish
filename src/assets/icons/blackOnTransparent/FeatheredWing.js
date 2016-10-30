import React from 'react';

export default function FeatheredWing({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M22.472 28.76c107.552 68.108 207.02 121.53 322.01 133.68 40.707 4.3 47.814 34.94 31.675 70.102-26.52 57.774 16.43 143.547 112.342 195.465-5.983 27.987-46.316 51.545-71.16 43.272-20.682-43.168-52.9-88.738-87.806-76.376-71.394 25.286-144.915 30.663-194.836 3.448 66.227-8.987 129.273-26.595 184.8-54.342C219.18 359.013 100.407 359.4 55.4 309.038c91.057 3.638 164.862-5.6 247.26-26.224C192.912 272.707 72.247 252.64 38.277 185.35c80.977 25.247 189.57 34.646 263.032 35.158C186.86 191.675 32.936 112.722 22.47 28.76z"  fillRule="evenodd"/>
</svg>

  );
}

FeatheredWing.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
