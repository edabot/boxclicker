import React, { Component } from 'react';

class Yay extends Component {
  render() {
    return (
      <div className="click-value">
        {`+${this.props.item.value}`}
      </div>
    )
  }
}

class Box extends Component {

  constructor(props) {
    super(props)

    this.state = {
      yay: [{value: 3, time: 2}]
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.yay.length > 0) {
        let newYay = []
        this.state.yay.forEach(item => {
          if (item.time > 0) {
            newYay.push({value: item.value, time: item.time - 2, key: item.key})
          }
        })
        this.setState({yay: newYay})
      }
    }, 2000);
  }

  onClick() {
    this.props.click()
    this.setState({yay: this.state.yay.concat([{value: 3, time: 2, key: Date.now()}])})
  }

  render() {
    return (
      <div className="box" onClick={this.onClick.bind(this)}>
        <div className="cube-viewer">
          <div className="cube">
            <div className="front"></div>
            <div className="back"></div>
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
          {this.state.yay.map(item => <Yay key={item.key} item={item}/> )}
        </div>
      </div>
    );
  }
}

export default Box;
