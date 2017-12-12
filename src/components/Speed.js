import React, { Component } from 'react';

class Speed extends Component {

  displaySpeed() {
    if (this.props.speed > 0) {
      return `Your current speed is ${this.props.speed}
        box${this.props.speed == 1? ``: `es`} per second`
    }
  }

  render() {
    return (
      <div className="speed">
        {this.displaySpeed()}
      </div>
    );
  }
}

export default Speed;
