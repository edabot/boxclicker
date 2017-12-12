import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {

  render() {
    return (
      <div className="Store">
        {this.props.items.names.map( itemName => <StoreItem
          itemName={itemName}
          level={this.props.items.items[itemName].level}
          description={this.props.items.items[itemName].description}
          prices={this.props.items.items[itemName].prices}
          wallet={this.props.wallet}
          buyItem={this.props.buyItem}
          key={itemName}/>)}
      </div>
    );
  }
}

export default Store;
