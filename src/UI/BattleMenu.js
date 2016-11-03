import React from 'react';
import {connect} from 'react-redux';
import {generateBattleOrder, nextTurn} from '../battle/battleModule';
import characterRouter from '../chars/characterRouter';
import './styles/battle-menu.css';

class BattleMenu extends React.Component {
  componentWillMount() {
    this.props.generateBattleOrder()
  }

  displayBattleOrder() {
    return this.props.battleOrder.map((el, i) => {
      const Component = characterRouter(el.imgName)

      return (
          <span><Component height='24px' width='24px' /></span>
      )
    });
  }

  render() {
    return (
      <div id='battle-menu' onClick={this.props.nextTurn}>
        <div>
          <div>
            <small>Battle Order</small>
          </div>
          {this.displayBattleOrder()}
        </div>
        {this.props.activeCharIndex}
        <div>
          {
            this.props.battleOrder.length && this.props.battleOrder[this.props.activeCharIndex].code
          }
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  activeCharIndex: state.battle.activeCharIndex,
  battleOrder: state.battle.battleOrder
});

export default connect(mapStateToProps,{
  generateBattleOrder,
  nextTurn
})(BattleMenu);