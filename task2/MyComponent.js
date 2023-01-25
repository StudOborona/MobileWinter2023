import React, { Component } from 'react';
import { Text } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <Text>{this.props.myText}</Text>
    );
  }
}

export default MyComponent;
