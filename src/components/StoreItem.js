import React, { Component } from 'react';
import {connect} from 'react-redux';

class StoreItem extends Component {

  buyItem() {
    this.props.buyItem(this.props.itemName)
  }

  displayItem() {

    let price = this.props.prices[this.props.level],
      cash = this.props.cash
    let priceText = `${this.props.itemName} - $${price}`
    if (cash >= price) {
      return (
        <div className="u-pointer" onClick={this.buyItem.bind(this)}>
          {priceText}
        </div>
      )
    }

    if ( this.props.itemLevels[this.props.itemName] ) {
      return (
        <div className="next-item">
          {priceText}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="store-item">
        {this.displayItem()}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    itemLevels: state.itemLevels,
    cash: state.box
  }
}

export default connect(mapStateToProps)(StoreItem);
