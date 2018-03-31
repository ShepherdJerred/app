import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TouchableButton from './components/touchable-button';
import AppProgress from './components/app-progress';
import io from 'socket.io-client';
import AppUsers from "./components/app-users";

export default class App extends Component<Props> {
  socket;

  constructor () {
    super();

    this.state = {
      counter: {
        currentValue: -1,
        maxValue: -1
      },
      users: -1
    };

    this.socket = io('https://the-button-api.herokuapp.com/');

    this.socket.on('counterStatus', (data) => {
      this.setState({counter: data});
    });

    this.socket.on('connectedUsers', (data) => {
      this.setState({users: data});
    });

    this.socket.emit('getCounter');
    this.socket.emit('getConnectedUsers');
  }

  handlePress () {
    this.socket.emit('incrementCounter');
  }

  render () {
    return (
      <View style={{
        position: 'relative'
      }}>
        <TouchableButton handlePress={this.handlePress.bind(this)}/>
        <AppProgress button={this.state.counter}/>
        <AppUsers users={this.state.users}/>
      </View>
    );
  }
}
