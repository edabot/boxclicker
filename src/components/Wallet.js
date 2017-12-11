import React, { Component } from 'react';

class Wallet extends Component {

  constructor(props) {
    super(props)

    this.state = {
      increments: 0.0
    }
  }

  displayWallet() {
    if (this.props.value > 0) {
      return Math.trunc(this.props.value + this.state.increments)
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({increments: this.state.increments + this.props.increment})
    }, 100);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increments: nextProps.increment})
  }
  render() {
    return (
      <div className="number">
        {this.displayWallet()}
      </div>
    );
  }
}

export default Wallet;
