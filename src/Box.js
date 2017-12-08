import React, { Component } from 'react';
import './Cube.css';

class Box extends Component {

  render() {
    return (
      <div className="box" onClick={this.props.click}>
        <div className="cube-viewer">
          <div className="cube">
            <div className="front"></div>
            <div className="back"></div>
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
