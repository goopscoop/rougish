import React from 'react';

export default function MedicalPack({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path d="M76 46c-33.24 0-60 26.76-60 60v300c0 33.24 26.76 60 60 60h360c33.24 0 60-26.76 60-60V106c0-33.24-26.76-60-60-60zm120 60h120v90h90v120h-90v90H196v-90h-90V196h90z" />
</svg>


  );
}

MedicalPack.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
