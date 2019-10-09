import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';


import TodoApp from './src/TodoApp';
import store from './src/store'
import { Provider } from 'react-redux'

export default class App extends Component {


  render() {
    return (

     
   <Provider store={store}>
       <TodoApp />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  }

});
