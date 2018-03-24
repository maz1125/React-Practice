import React, { Component } from 'react';
import Greeting from './greeting';

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'John' });
  }

  handleMouseOut() {
    this.setState({ name: 'Hoge' });
  }
  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />;
      </div>
    );
  }
}

export default ClassApp;
