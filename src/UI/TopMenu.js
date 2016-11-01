import React from 'react';
import { connect } from 'react-redux';
import './styles/top-menu.css';
import Coins from '../assets/icons/blackOnTransparent/Coins';
import Minerals from '../assets/icons/blackOnTransparent/Minerals';
import Ore from '../assets/icons/blackOnTransparent/Ore';
import BrandyBottle from '../assets/icons/blackOnTransparent/BrandyBottle';
import Backup from '../assets/icons/blackOnTransparent/Backup';

const TopMenu = ({ resources }) => {
  const { gold, iron, gin, crystals } = resources;
  const props = {
    height: '30px',
    widthe: '30px'
  }
  return (
    <div id="top-menu">
      <span><Coins {...props}/> {gold}</span>
      {`  `}
      <span><Ore {...props}/> {iron}</span>
      {`  `}
      <span><Minerals {...props}/> {crystals}</span>
      {`  `}
      <span><BrandyBottle {...props}/> {gin}</span>
      <span className='top-menu-party-button'><Backup {...props}/></span>
    </div>
  )
}

const mapStateToProps = state => ({
  resources: state.user.resources
})

export default connect(mapStateToProps)(TopMenu);