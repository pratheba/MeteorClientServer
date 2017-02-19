// app/index.js
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

/*
export default AppContainer = createContainer(() => {
  Meteor.subscrible('items');
  return {
    count: Meteor.collection('items').find().length(),
  };
}, App);
*/

import OneSignal from 'react-native-onesignal';

export default class App extends Component {
  componentWillMount() {
    //Meteor.connect(SERVER_URL);  
    OneSignal.configure({});
    // OneSignal.addEventListener('received', this.onReceived);
    //     OneSignal.addEventListener('opened', this.onOpened);
    //     OneSignal.addEventListener('registered', this.onRegistered);
    //     OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
        console.log('Device info: ', device);
    }

  handleAddItem() {
    const name = Math.floor(Math.random() * 10);
    /*Meteor.call('sendEmail', { name }, (err, res) => {
        console.log('sendEmail', err, res);
    });*/

    Meteor.call('sendText', '+16467251109', (err,res) => {
      console.log('sendText', res);
    });
    /*
    Meteor.call('Items.addOne', { name }, (err, res) => {
    console.log('Items.addOne', err, res);
    }); */
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Meteor!
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = App;

