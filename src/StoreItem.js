import React, { Component } from 'react';

class Store extends Component {

  buyItem() {
    this.props.buyItem(this.props.itemName)
  }

  displayItem() {
    let price = this.props.prices[this.props.level],
      cash = this.props.wallet
    if (cash >= price) {
      return (
        <div onClick={this.buyItem.bind(this)}>
          {`${this.props.itemName} - $${price}`}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Store">
        {this.displayItem()}
      </div>
    );
  }
}

export default Store;
