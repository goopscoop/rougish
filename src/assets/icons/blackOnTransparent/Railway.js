import React from 'react';

export default function Railway({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M18 112v39h38v-39zm102 0v39h48v-39zm112 0v39h48v-39zm112 0v39h48v-39zm112 0v39h38v-39zM18 169v30h476v-30zm0 48v78h38v-78zm102 0v78h48v-78zm112 0v78h48v-78zm112 0v78h48v-78zm112 0v78h38v-78zM18 313v30h476v-30zm0 48v39h38v-39zm102 0v39h48v-39zm112 0v39h48v-39zm112 0v39h48v-39zm112 0v39h38v-39z"/>
</svg>

  );
}

Railway.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
