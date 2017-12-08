import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import Store from './Store';
import Wallet from './Wallet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: 0,
      boxIncrement: 0,
      items: {
        names: [
          'auto-box',
          'speed-box'
        ],
        currentLevels: {
          'auto-box': 0,
          'speed-box': 0
        },
        prices: {
          'auto-box': [5,50,500,1000,10000],
          'speed-box': [100, 2000, 30000, 50000]
        },
        values: {
          'auto-box': [1,1,1,1,1],
          'speed-box': [10, 20, 30, 50, 100]
        }
      }
    };
  }

  incrementCount() {
    this.setState({wallet: this.state.wallet + 1})
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({wallet: this.state.wallet + this.state.boxIncrement})
    }, 1000);
  }

  buyItem(itemName) {
      const oldLevel = this.state.items.currentLevels[itemName]
      let newIncrement = this.state.boxIncrement + this.state.items.values[itemName][oldLevel]
      let itemChange = {}
      itemChange[itemName] = oldLevel + 1
      let newLevels = Object.assign(this.state.items.currentLevels, itemChange)
      let newItems = Object.assign(this.state.items, newLevels)
      let newWallet = this.state.wallet - this.state.items.prices[itemName][oldLevel]
      this.setState({boxIncrement: newIncrement,
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
