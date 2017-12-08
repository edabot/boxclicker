import React, { Component } from 'react';

class Box extends Component {

  render() {
    return (
      <div className="Box" onClick={this.props.click}>
        this is the box
      </div>
    );
  }
}

export default Box;
