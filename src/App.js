import React, { Component } from 'react';
import { View } from 'react-native';
import TouchableButton from './components/touchable-button';

export default class App extends Component<Props> {
  constructor () {
    super();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress () {
    console.warn('TEST');
  }

  render () {
    return (
      <View>
        <TouchableButton press={this.handlePress}/>
      </View>
    );
  }
}
