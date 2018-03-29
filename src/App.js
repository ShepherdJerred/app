import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TouchableButton from './components/touchable-button';
import io from 'socket.io-client';

export default class App extends Component<Props> {
  counter;
  users;
  socket;

  constructor () {
    super();

    this.socket = io('https://the-button-api.herokuapp.com/');

    this.socket.on('counterStatus', function (data) {
      this.counter = data;
      console.log(this.counter);
    });

    this.socket.on('connectedUsers', function (data) {
      this.users = data;
      console.log(this.users);
    });

    this.socket.emit('getCounter');
    this.socket.emit('getConnectedUsers');
  }

  handlePress () {
    this.socket.emit('incrementCounter');
  }

  render () {
    return (
      <View>
        <TouchableButton handlePress={this.handlePress.bind(this)}/>
      </View>
    );
  }
}
