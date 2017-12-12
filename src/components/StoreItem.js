import React, { Component } from 'react';
import {connect} from 'react-redux';

class StoreItem extends Component {

  buyItem() {
    this.props.buyItem(this.props.itemName)
  }

  displayItem() {

    let itemLevel = this.props.itemLevels[this.props.itemName]

    if ( itemLevel ) {
      if ( itemLevel === "available") { itemLevel = 0 }
      let price = this.props.prices[itemLevel],
        cash = this.props.cash
      let priceText = `${this.props.itemName} - ${price}`
      if (cash >= price) {
        return (
          <div>
          <div className="u-pointer" onClick={this.buyItem.bind(this)}>
            {priceText}
          </div>
          <div className="item-description">{this.props.description}</div>
          </div>
        )
      } else {
        return (
          <div>
          <div className="next-item">
          {priceText}
          </div>
          <div className="item-description">{this.props.description}</div>
          </div>
        )
      }
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
