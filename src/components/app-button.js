import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as util from '../util';

export default class AppButton extends Component {

  constructor (props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <View>
        <View
          style={[
            this.styles.buttonLayer,
            this.styles.buttonTop,
            !this.props.isPressed && this.styles.buttonTopUnpushed,
            this.props.isPressed && this.styles.buttonTopPushed
          ]}>
        </View>
        <View
          style={[
            this.styles.buttonLayer,
            this.styles.buttonDepth
          ]}>
        </View>
        <View
          style={[
            this.styles.buttonLayer,
            this.styles.buttonShadow
          ]}>
        </View>
        <Text>Pressed: {this.props.isPressed}</Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    buttonLayer: {
      height: util.vw(50),
      width: util.vw(50),
      borderRadius: util.vw(50) / 2,
      padding: 20,
      position: 'relative',
    },
    buttonTop: {
      zIndex: 3
    },
    buttonTopUnpushed: {
      backgroundColor: 'rgb(232, 69, 69)',
    },
    buttonTopPushed: {
      backgroundColor: 'rgb(227, 29, 29)',
    },
    buttonDepth: {
      backgroundColor: 'rgb(187, 23, 23)',
      zIndex: 2,
      top: util.vw(50) * - 1 + 15,
    },
    buttonShadow: {
      backgroundColor: 'rgb(209, 209, 209)',
      zIndex: 1,
      top: util.vw(100) * - 1 + 20,
    },
  });
}
