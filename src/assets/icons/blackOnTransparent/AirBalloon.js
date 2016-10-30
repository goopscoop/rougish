import React from 'react';

export default function AirBalloon({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M247 25.332c-.642.046-1.288.098-1.936.152-28.244 52.446-31.912 108.59-28.084 167.936 3.77 58.42 14.916 119.542 15.936 181.58h46.168c1.02-62.038 12.167-123.16 15.936-181.58 3.828-59.347.16-115.49-28.084-167.936-.648-.054-1.294-.106-1.936-.152V352h-18V25.332zm-23.795 3.51c-7.21 1.567-14.562 3.595-21.893 6.04l-2.398 2.88c-38.992 46.79-49.743 83.613-45.955 123.384 3.787 39.772 23.27 83.214 47.31 139.31l4.45 11.458c.898 3.188 4.327 9.14 7.594 15.463-3.76-44.326-10.457-88.814-13.294-132.797-3.65-56.57-.748-112.657 24.185-165.738zm65.59 0c24.933 53.08 27.835 109.168 24.185 165.738-2.837 43.983-9.534 88.47-13.294 132.797 3.267-6.324 6.696-12.275 7.595-15.463l4.45-11.46c24.04-56.094 43.523-99.536 47.31-139.308 3.79-39.77-6.962-76.593-45.954-123.384l-2.4-2.88c-7.33-2.445-14.682-4.473-21.89-6.04zM167.5 49.422c-3.667 1.97-7.256 4.04-10.73 6.21C126.256 74.705 105 100.5 105 128c0 61.75 22.053 90.394 49.773 122.074 2.808 3.21 5.702 6.47 8.608 9.76-14.478-34.99-25.395-66.073-28.34-96.98-3.537-37.152 5.253-73.565 32.46-113.432zm177 0c27.207 39.867 35.997 76.28 32.46 113.432-2.945 30.907-13.862 61.99-28.34 96.98 2.905-3.29 5.8-6.55 8.607-9.76C384.947 218.394 407 189.75 407 128c0-27.5-21.256-53.296-51.77-72.367-3.474-2.172-7.063-4.24-10.73-6.21zM224 393v37h21.424v-37H224zm42.576 0v37H288v-37h-21.424zM224 448v44h64v-44h-64z"  fillRule="evenodd"/>
</svg>

  );
}

AirBalloon.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
