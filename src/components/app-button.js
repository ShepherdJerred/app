import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as util from '../util';
import PropTypes from 'prop-types';

export default class AppButton extends Component {
  constructor (props) {
    super(props);
    console.log('app-button props: ' + JSON.stringify(props));
  }

  render () {
    return (
      <View>
        <View
          style={[
            this.stylesheet.buttonLayer,
            this.stylesheet.buttonTop,
            this.props.isPressed ? this.stylesheet.buttonTopPushed : this.stylesheet.buttonTopUnpushed
          ]}>
        </View>
        <View
          style={[
            this.stylesheet.buttonLayer,
            this.stylesheet.buttonDepth
          ]}>
        </View>
        <View
          style={[
            this.stylesheet.buttonLayer,
            this.stylesheet.buttonShadow
          ]}>
        </View>
      </View>
    );
  }

  stylesheet = StyleSheet.create({
    buttonLayer: {
      height: util.vw(50),
      width: util.vw(50),
      borderRadius: util.vw(50) / 2,
      padding: 20,
      position: 'absolute',
      left: util.vw(25) * -1,
      right: util.vw(25) * -1,
      marginTop: -20
    },
    buttonTop: {
      zIndex: 3
    },
    buttonTopUnpushed: {
      backgroundColor: 'rgb(232, 69, 69)'
    },
    buttonTopPushed: {
      backgroundColor: 'rgb(227, 29, 29)'
    },
    buttonDepth: {
      backgroundColor: 'rgb(187, 23, 23)',
      zIndex: 2,
      top: 15
    },
    buttonShadow: {
      backgroundColor: 'rgb(209, 209, 209)',
      zIndex: 1,
      top: 20
    }
  });
}

AppButton.propTypes = {
  isPressed: PropTypes.bool.isRequired
};
