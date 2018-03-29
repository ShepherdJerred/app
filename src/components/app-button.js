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
        <Text>PRESSED?: {this.props.isPressed}</Text>
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
      </View>
    );
  }

  styles = StyleSheet.create({
    buttonLayer: {
      height: util.vw(50),
      width: util.vw(50),
      borderRadius: util.vw(50) / 2,
      padding: 20,
      position: 'absolute'
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
      top: 15,
    },
    buttonShadow: {
      backgroundColor: 'rgb(209, 209, 209)',
      zIndex: 1,
      top: 20
    },
  });
}
