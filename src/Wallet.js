import React, { Component } from 'react';

class Wallet extends Component {

  render() {
    return (
      <div className="Wallet" onClick={this.props.click}>
        <h3>Current wallet</h3>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Wallet;
