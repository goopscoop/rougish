import React from 'react';

export default function CrosshairArrow({width = '50px', height = '50px'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
  <path  d="M101.86 17.793l-18.532 2.41 9.42 72.475-72.478-9.42-2.41 18.533 96.55 12.55-12.55-96.547zm47.744 47.742l-18.532 2.408 9.42 72.48-72.476-9.42-2.41 18.532 96.548 12.55-12.55-96.55zm139.97 44.377v70.28c-19.16 1.463-37.088 7.392-52.756 16.734l13.655 13.654c11.836-6.306 25.055-10.376 39.1-11.635v37.643c-3.646.527-7.197 1.36-10.626 2.467l15.742 15.74c1.39-.123 2.796-.197 4.22-.197 25.845 0 46.596 20.75 46.596 46.595 0 1.424-.074 2.83-.197 4.22l15.74 15.743c1.096-3.39 1.922-6.9 2.45-10.506h38.006c-1.237 14.124-5.315 27.414-11.652 39.31l13.652 13.65c9.374-15.723 15.31-33.723 16.746-52.96h65.57v-18.687h-65.6c-4.64-59.564-52.367-107.23-111.958-111.772v-70.278h-18.69zm-93.01 2.584l-18.53 2.408 9.42 72.48-72.477-9.423-2.41 18.534 81.357 10.576L395.38 408.523l22.472 8.7-8.33-20.987-17.043-17.043c.025-.032.054-.063.08-.095l-13.214-13.217-.08.1-27.12-27.117.077-.103-13.407-13.408c-.022.037-.047.072-.07.11l-64.103-64.103c.037-.023.072-.048.11-.07l-13.407-13.407-.104.076-26.79-26.792c.033-.027.065-.055.1-.082l-13.22-13.217c-.033.026-.063.056-.096.083l-14.095-14.096-10.576-81.36zm111.7 86.447c49.447 4.42 88.692 43.6 93.207 93.02h-37.94c-4.075-28.546-26.737-51.245-55.266-55.373v-37.647zm-111.59 36.705c-10.65 16.48-17.43 35.683-19.037 56.315h-69.535v18.687h69.505c4.463 59.74 52.256 107.6 111.967 112.163v63.812h18.69v-63.813c20.71-1.578 39.985-8.37 56.52-19.054l-13.513-13.512c-12.804 7.553-27.395 12.42-43.006 13.815v-38.263c5.09-.737 9.99-2.075 14.636-3.922l-14.96-14.96c-2.92.567-5.937.872-9.03.872-25.844 0-46.594-20.75-46.594-46.594 0-3.092.306-6.11.873-9.03l-14.96-14.958c-1.86 4.682-3.206 9.623-3.94 14.758h-37.9c1.418-15.535 6.273-30.055 13.794-42.805l-13.51-13.51zm-.32 75.002h37.966c4.163 28.446 26.792 51.04 55.254 55.15v38.26c-49.568-4.44-88.878-43.813-93.22-93.41zm249.55 51.235l-21.412 21.412 26.514 66.793-67.272-26.037-21.78 21.78 129.46 45.505-45.51-129.453z"/>
</svg>

  );
}

CrosshairArrow.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
