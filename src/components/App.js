import React, { Component } from 'react';
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
    this.setState({wallet: this.state.wallet + this.state.boxPunchValue})
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({wallet: this.state.wallet + this.state.boxIncrement})
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
        newBoxPunchValue += parseInt(value)
      }
      let newItems = Object.assign(this.state.data.items)
      newItems[itemName].level = oldLevel + 1
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
        <Wallet value={this.state.wallet}/>
        <Store wallet={this.state.wallet}
          items={this.state.data}
          buyItem={this.buyItem.bind(this)}
          />
      </div>
    );
  }
}

export default App;
