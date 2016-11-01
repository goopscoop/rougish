import React from 'react';
import {connect} from 'react-redux';
import {generateBattleOrder, nextTurn} from '../battle/battleModule';
import './styles/battle-menu.css';

class BattleMenu extends React.Component {
  componentDidMount() {
    this.props.generateBattleOrder()
  }

  render() {
    return (
      <div id='battle-menu' onClick={this.props.nextTurn}>
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