import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppButton from './app-button';
import PropTypes from 'prop-types';

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
      previousState.isPressed = true;
      return previousState;
    });
    console.log(this.state);
  }

  handlePressOut () {
    console.log('out');
    this.props.handlePress();
    this.setState(previousState => {
      previousState.isPressed = false;
      return previousState;
    });
    console.log(this.state);
  }

  render () {
    return (
      <View>
        <TouchableOpacity onPressIn={this.handlePressIn.bind(this)}
          onPressOut={this.handlePressOut.bind(this)}
          activeOpacity={1}>
          <AppButton isPressed={this.state.isPressed}/>
        </TouchableOpacity>
      </View>
    );
  }
}

TouchableButton.propTypes = {
  handlePress: PropTypes.func.isRequired
};
