import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class AppButton extends Component {
  render () {
    return (
      <View style={[
        this.stylesheet.background
      ]}>
        <View style={[
          this.stylesheet.fill
        ]}/>
      </View>
    );
  }

  stylesheet = StyleSheet.create({
    background: {
      height: 20,
      backgroundColor: '#000'
    },
    fill: {
      height: 20,
      backgroundColor: '#000'
    }
  });
}

AppButton.propTypes = {
  button: PropTypes.object.isRequired
};
