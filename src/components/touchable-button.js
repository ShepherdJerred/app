import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import AppButton from "./app-button";

export default class TouchableButton extends Component {

  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      isPressed: false
    };
  }

  handlePressIn () {
    console.log('in');
    this.setState(previousState => {
      return {
        isPressed: true
      }
    });
  }

  handlePressOut () {
    console.log('out');
    this.props.handlePress();
    this.setState(previousState => {
      return {
        isPressed: true
      }
    });
  }

  render () {
    return (
      <View>
        <TouchableOpacity onPressIn={this.handlePressIn.bind(this)}
                          onPressOut={this.handlePressOut.bind(this)}
                          isPressed={this.state.isPressed}
                          activeOpacity={1}>
          <AppButton/>
        </TouchableOpacity>
      </View>
    );
  }
}
