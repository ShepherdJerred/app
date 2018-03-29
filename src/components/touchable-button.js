import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import AppButton from "./app-button";

export default class TouchableButton extends Component {

  isPressed;

  constructor (props) {
    super(props);
    console.log(props);
    this.isPressed = false;
  }

  handlePressIn () {
    console.log('in');
    this.isPressed = true;
  }

  handlePressOut () {
    console.log('out');
    this.props.handlePress();
    this.isPressed = false;
  }

  render () {
    return (
      <View>
        <Text>Press: { this.isPressed }</Text>

        <TouchableHighlight onPressIn={this.handlePressIn.bind(this)} onPressOut={this.handlePressOut.bind(this)}
                          isPressed={this.isPressed}>
        <AppButton/>
      </TouchableHighlight>
      </View>
    );
  }
}
