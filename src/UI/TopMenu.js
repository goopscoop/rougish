import React from 'react';
import { connect } from 'react-redux';
import './styles/top-menu.css';

const TopMenu = ({ resources }) => {
  const { gold, iron, gin, crystals } = resources;
  return (
    <div id="top-menu">
      <span>Gold: {gold}</span>
      {` | `}
      <span>Iron: {iron}</span>
      {` | `}
      <span>Crystals: {crystals}</span>
      {` | `}
      <span>Gin: {gin}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  resources: state.user.resources
})

export default connect(mapStateToProps)(TopMenu);