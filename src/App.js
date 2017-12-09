import React, { Component } from 'react';
import Box from './Box';
import Store from './Store';
import Wallet from './Wallet';
import boxData from './boxData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 0,
      boxPunchValue: 1,
      boxIncrement: 0,
      items: boxData
    };
  }

  incrementCount() {
    this.setState({wallet: this.state.wallet + this.state.boxPunchValue})
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({wallet: this.state.wallet + this.state.boxIncrement})
    }, 1000);
  }

  makeVisible(itemName) {
    let newItems = Object.assign(this.state.items)
    newItems.items[itemName].visible = true
    this.setState({items: newItems})
  }

  buyItem(itemName) {
      const oldLevel = this.state.items.currentLevels[itemName]
      let newIncrement = this.state.boxIncrement,
        newBoxPunchValue = this.state.boxPunchValue,
        value = this.state.items.values[itemName][oldLevel];
      if ( Number.isInteger(value) ) {
        newIncrement += value
      } else {
      }
      let itemChange = {}
      itemChange[itemName] = oldLevel + 1
      let newLevels = Object.assign(this.state.items.currentLevels, itemChange)
      let newItems = Object.assign(this.state.items, newLevels)
      let newWallet = this.state.wallet - this.state.items.prices[itemName][oldLevel]
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
        <Wallet value={this.state.wallet}/>
        <Store wallet={this.state.wallet}
          items={this.state.items}
          buyItem={this.buyItem.bind(this)}
          />
      </div>
    );
  }
}

export default App;
