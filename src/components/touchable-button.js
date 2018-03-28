import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import AppButton from "./app-button";

export default class TouchableButton extends Component {
  constructor(props){
    super(props);
    console.error(props);
    this.press = this.press.bind(this);
  }

  render () {
    return (
      <TouchableHighlight onPress={
        this.props.press
      }>
        <AppButton/>
      </TouchableHighlight>
    );
  }
}
