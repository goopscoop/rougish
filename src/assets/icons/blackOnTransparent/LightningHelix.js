import React from 'react';

export default function LightningHelix({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M20.72 19.344v39.718l130.843 73.813L246.5 87.78l-95.53-68.436H20.72zm196.936.093L313 76.78l-45.5 21.657.03.063-96.03 45.625h-.03l-113.94 54.22 161.532 86.093 59.594-39.25-39.344-34.844 26.375-13.094.094.063 78.94-39.157-.095-.062 136.5-67.72L387.47 19.44H217.655zM361.936 170.5l-76.498 37.906 44.812 25.28-37.03 24.376-.064-.062-55.312 36.438.062.03-68.25 44.938 325.281 154.75L307.47 347l9.31-5.22-.03-.03 43.563-24.313-.032-.03 115.97-65.032L361.937 170.5zm13.19 160.063l-33.97 18.968 139.313 74.22-105.345-93.188z"  fillRule="evenodd"/>
</svg>

  );
}

LightningHelix.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
