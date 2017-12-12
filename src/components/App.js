import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxActions from '../actions/box-actions';
import * as itemActions from '../actions/item-actions';

import Box from './Box';
import Store from './Store';
import Wallet from './Wallet';
import Inventory from './Inventory';
import Speed from './Speed';

import boxData from '../boxData.js';

function dataToPrices(data) {
  let keys = Object.keys(data),
  result = []
  keys.forEach(key => {
    result.push({name: key, price: data[key].prices[0]})
  })
  result.sort((a,b) => a.price - b.price)
  return result
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 0,
      boxPunchValue: 1,
      boxIncrement: 0,
      data: boxData,
      firstPrices: dataToPrices(boxData.items)
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
      this.props.actions.updateBox(this.props.box + this.state.boxIncrement)
      this.checkIfAvailable()
    }, 1000);
  }

  checkIfAvailable() {
    let firstItem = this.state.firstPrices[0]
    if (firstItem && this.props.box >= firstItem.price * .6) {
      this.props.actions.showItem(firstItem.name)
      this.setState({firstPrices: this.state.firstPrices.slice(1)})
    }
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
        <Box
          onClick={this.incrementCount.bind(this)}
          clickValue={this.state.boxPunchValue}
        />
        <Wallet
          value={this.props.box}
          increment = {(this.state.boxIncrement / 10).toFixed(1)/1}
        />
        <Store wallet={this.props.box}
          items={this.state.data}
          buyItem={this.buyItem.bind(this)}
          />
          <Speed speed={this.state.boxIncrement} />
          <Inventory itemList={this.state.data.names} items={this.props.itemLevels || {}}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    box: state.box,
    itemLevels: state.itemLevels
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign(boxActions, itemActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
