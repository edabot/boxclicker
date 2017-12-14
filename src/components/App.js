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

const storage = window.localStorage

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: boxData,
      firstPrices: dataToPrices(boxData.items)
    };
  }

  incrementCount() {
    this.props.actions.clickBox()
  }

  componentWillMount() {
    if ( storage.state ) {
      let oldState = JSON.parse(storage.state)
      this.setState({boxPunchValue: oldState.boxPunchValue})
    }
    if (storage.box) {
      let oldBox = JSON.parse(storage.box)
      this.props.actions.resetBox(oldBox)
    }
    if (storage.itemLevels) {
      let oldLevels = JSON.parse(storage.itemLevels)
      this.props.actions.resetItems(oldLevels)
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.boxIncrement) {
        this.props.actions.updateBox(this.props.box.count + this.state.boxIncrement)
      }
      this.checkIfAvailable()
      storage['state'] = JSON.stringify(this.state)
      storage['box'] = JSON.stringify(this.props.box) || {}
      storage['itemLevels'] = JSON.stringify(this.props.itemLevels) || {}
      console.log('saved')
    }, 1000)
  }

  checkIfAvailable() {
    if (this.state.firstPrices.length === 0) {return}
    let firstItem = this.state.firstPrices[0]
    if ( this.props.itemLevels[firstItem.name] ) {
      this.setState({firstPrices: this.state.firstPrices.slice(1)})
    } else if (this.props.box.count >= firstItem.price * .6) {
      this.props.actions.showItem(firstItem.name)
      this.setState({firstPrices: this.state.firstPrices.slice(1)})
    }
  }

  buyItem(itemName) {
      const itemObject = this.state.data.items[itemName]
      const oldLevel = itemObject.level
      let value = itemObject.values[oldLevel];
      if ( Number.isInteger(value) ) {
        this.props.actions.increaseIncrement(value)
      } else {
        this.props.actions.increaseClick(parseInt(value, 10))
      }
      let newItems = Object.assign(this.state.data.items)
      newItems[itemName].level = oldLevel + 1
      this.props.actions.buyItem(itemName, oldLevel + 1, itemObject.prices[oldLevel])
      this.setState({
        items: newItems,
      })
  }

  render() {
    return (
      <div className="App">
        <Box
          onClick={this.incrementCount.bind(this)}
          clickValue={this.props.box.clickValue}
        />
        <Wallet
          value={this.props.box.count}
          increment = {(this.props.box.increment / 10).toFixed(1)/1}
        />
        <Store wallet={this.props.box.count}
          items={this.state.data}
          buyItem={this.buyItem.bind(this)}
          />
          <Speed speed={this.props.box.increment} />
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
