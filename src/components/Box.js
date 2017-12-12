import React, { Component } from 'react';

class ClickValue extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location: this.randomLocation()
    }
  }

  randomLocation() {
    let number1 = Math.ceil(Math.random() * 10),
      number2 = Math.ceil(Math.random() * 10)
    return `click-value click-value-t-${number1} click-value-l-${number2}`
  }

  render() {
    return (
      <div className={this.state.location}>
        {`+${this.props.item.value}`}
      </div>
    )
  }
}

class Box extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clickValues: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.clickValues.length > 0) {
        let newClickValues = []
        this.state.clickValues.forEach(item => {
          if (item.time > 0) {
            newClickValues.push({value: item.value, time: item.time - 2, key: item.key})
          }
        })
        this.setState({clickValues: newClickValues})
      }
    }, 2000);
  }

  onClick() {
    this.props.onClick()
    let timeNow = Date.now()
    this.setState({clickValues: this.state.clickValues.concat([{value: this.props.clickValue, time: 2, key: timeNow}])})
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
          {this.state.clickValues.map(item => <ClickValue key={item.key} item={item}/> )}
        </div>
      </div>
    );
  }
}

export default Box;
