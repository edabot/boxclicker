import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {

  render() {
    return (
      <div className="Store">
        {this.props.items.names.map( itemName => <StoreItem
          itemName={itemName}
          level={this.props.items.items[itemName].level}
          prices={this.props.items.items[itemName].prices}
          visible={this.props.items.items[itemName].visible}
          wallet={this.props.wallet}
          buyItem={this.props.buyItem}
          key={itemName}/>)}
      </div>
    );
  }
}

export default Store;
