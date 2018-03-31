import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as util from '../util';

export default class AppButton extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>{this.props.button.currentValue} / {this.props.button.maxValue}</Text>
      </View>
    );
  }

  styles = StyleSheet.create({
  });
}
