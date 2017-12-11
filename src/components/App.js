import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxActions from '../actions/box-actions';
import * as itemActions from '../actions/item-actions';

import Box from './Box';
import Store from './Store';
import Wallet from './Wallet';
import boxData from '../boxData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 0,
      boxPunchValue: 1,
      boxIncrement: 0,
      data: boxData
    };
  }

  incrementCount() {
    this.props.actions.clickBox(this.state.boxPunchValue)
    this.setState({wallet: this.state.wallet + this.state.boxPunchValue})
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.boxIncrement > 0) {
        this.setState({wallet: this.state.wallet + this.state.boxIncrement})
      }
    }, 1000);
    setInterval(() => {
      this.props.actions.updateBox(this.state.wallet)
    }, 1000);
  }

  makeVisible(itemName) {
    let newItems = Object.assign(this.state.data)
    newItems.items[itemName].visible = true
    this.setState({items: newItems})
  }

  buyItem(itemName) {
      const itemObject = this.state.data.items[itemName]
      const oldLevel = itemObject.level
      let newIncrement = this.state.boxIncrement,
        newBoxPunchValue = this.state.boxPunchValue,
        value = itemObject.values[oldLevel];
      if ( Number.isInteger(value) ) {
        newIncrement += value
      } else {
        newBoxPunchValue += parseInt(value, 10)
      }
      let newItems = Object.assign(this.state.data.items)
      newItems[itemName].level = oldLevel + 1
      this.props.actions.buyItem(itemName, oldLevel + 1, itemObject.prices[oldLevel])
      let newWallet = this.state.wallet - itemObject.prices[oldLevel]
      this.setState({
        boxIncrement: newIncrement,
        boxPunchValue: newBoxPunchValue,
        items: newItems,
        wallet: newWallet
      })
  }

  render() {
    return (
      <div className="App">
        <Box click={this.incrementCount.bind(this)}/>
        <Wallet
          value={this.props.box}
          increment = {(this.state.boxIncrement / 10).toFixed(1)/1}
        />
        <Store wallet={this.state.wallet}
          items={this.state.data}
          buyItem={this.buyItem.bind(this)}
          />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    box: state.box
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign(boxActions, itemActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
