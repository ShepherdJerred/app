import React, { Component } from 'react';
import { View } from 'react-native';
import util from '../util';

export default class AppButton extends Component {
  render () {
    return (
      <View>
        <View
          style={{
            height: util.vw(50),
            width: util.vw(50),
            borderRadius: util.vw(50) / 2,
            padding: 20,
            backgroundColor: 'rgb(232, 69, 69)',
            zIndex: 3,
            position: 'absolute'
          }}>
        </View>
        <View
          style={{
            height: util.vw(50),
            width: util.vw(50),
            borderRadius: util.vw(50) / 2,
            padding: 20,
            backgroundColor: 'rgb(187, 23, 23)',
            zIndex: 2,
            position: 'absolute',
            top: 15
          }}>
        </View>
        <View
          style={{
            height: util.vw(50),
            width: util.vw(50),
            borderRadius: util.vw(50) / 2,
            padding: 20,
            backgroundColor: 'rgb(209, 209, 209)',
            zIndex: 1,
            position: 'absolute',
            top: 20
          }}>
        </View>
      </View>
    );
  }
}
