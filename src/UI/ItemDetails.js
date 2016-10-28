import React from 'react';
import GenerateCost from '../shared/GenerateCost';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  selectedItem: state.shop.selectedItem
});

export default connect(mapStateToProps)(function ItemDetails ({ 
  selectedItem = {
    label: '--',
    cost: {},
    stats: {
      ATK: '--',
      DEF: '--',
      SCI_ATK: '--',
      SCI_DEF: '--',
    }
  }
}) {
  const {
    label,
    cost,
    stats: {
      ATK = '--',
      DEF = '--',
      SCI_ATK = '--',
      SCI_DEF = '--',
    },
    effects = []
  } = selectedItem;

  const renderPrimaryStats = () => {
    return (
      <div className='row'>
        <div className='six columns'>
          <div>
            <b>ATK:</b> {ATK}
          </div>
          <div>
            <b>DEF:</b> {DEF}
          </div>
        </div>
        <div className='six columns'>
          <div>
            <b>SCI_ATK:</b> {SCI_ATK}
          </div>
          <div>
            <b>SCI_DEF:</b> {SCI_DEF}
          </div>
        </div>
      </div>
    );
  };
  // DO THIS NEXT - make effects arr of objs
  const renderSecondaryStats = () => effects.map((effect, i) => {
    return (<div key={i}>{effect.code}{effect.value !== true && ` - ${effect.value}%`  }</div>)
  })

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <b>{ label }</b>
        </div>
        <div className='six columns'>
          <GenerateCost cost={cost} />
        </div>
      </div>  
      <hr />
      {renderPrimaryStats()}
      <hr />
      {renderSecondaryStats()}
    </div>
  );
});