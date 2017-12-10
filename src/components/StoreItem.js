import React, { Component } from 'react';

class Store extends Component {

  buyItem() {
    this.props.buyItem(this.props.itemName)
  }

  displayItem() {

    let price = this.props.prices[this.props.level],
      cash = this.props.wallet
    let priceText = `${this.props.itemName} - $${price}`
    if (cash >= price) {
      return (
        <div onClick={this.buyItem.bind(this)}>
          {priceText}
        </div>
      )
    }

    if ( this.props.level > 0 || cash > (.8 * price - 2) ) {
      return (
        <div className="next-item">
          {priceText}
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
