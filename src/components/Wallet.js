import React, { Component } from 'react';

class Wallet extends Component {

  displayWallet() {
    if (this.props.value > 0) {
      return Math.trunc(this.props.value)
    }
  }

  render() {
    return (
      <div className="number">
        {this.displayWallet()}
      </div>
    );
  }
}

export default Wallet;
