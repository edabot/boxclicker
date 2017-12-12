import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCube, faCoffee, faBullhorn, faChartPie } from '@fortawesome/fontawesome-free-solid'

const nameToIcon = {
  'box-multiplier': faCube,
  'auto-box': faCoffee,
  'speed-box': faBullhorn,
  'brutal-box': faChartPie
}

class InventoryItem extends Component {

  displayInventoryItem() {
    if (this.props.number !== 'available' ) {
      return (
        <div className="inventory-row">
          {this.displayIcons()}
        </div>
      )
    }
  }

  displayIcons() {
    let result = []
    for (let i = 0; i < this.props.number; i++) {
      result.push(<FontAwesomeIcon icon={nameToIcon[this.props.name]} key={i}/>)
    }
    return result
  }

  render() {
    return (
      <div className="inventory">
        {this.displayInventoryItem()}
      </div>
    );
  }
}

export default InventoryItem;
