import React, { Component } from 'react';
import InventoryItem from './InventoryItem';

function processNamesAndNumbers(itemList, items) {
  let result = [],
    itemKeys = Object.keys(items);
  itemList.forEach( item => {
    if ( itemKeys.includes(item) && items[item] !== "available") {
      result.push(item)
    }
  })

  return result
}

class Inventory extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: processNamesAndNumbers(this.props.itemList, nextProps.items)})
  }

  render() {
    return (
      <div className="inventory">
        {this.state.items.map( name => <InventoryItem key={name} name={name} number={this.props.items[name]} />)}
      </div>
    );
  }
}

export default Inventory;
