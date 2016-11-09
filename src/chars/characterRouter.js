import Swordman from '../assets/icons/blackOnTransparent/Swordman';
import Ghost from '../assets/icons/blackOnTransparent/Ghost';


export default function(imgName) {
  switch(imgName) {
    case 'Swordman':
      return Swordman;
    case 'Ghost':
      return Ghost;
    default:
      return Swordman;
  }
}