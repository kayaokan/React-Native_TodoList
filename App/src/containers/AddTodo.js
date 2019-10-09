import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { connect  } from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {

  state = {
      text: ''
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({ text: ''})
  }

  render() {
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <TextInput
          
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Eg. Create New Video"
          style={{fontWeight: 'bold',borderWidth: 1,borderColor: '#f2f2e1',backgroundColor: '#eaeaea', height: 50, padding: 5,flex:1, fontSize: 16}}
          />
          <TouchableOpacity
          onPress={() => this.addTodo(this.state.text)}
          style={{height: 50, width: 50, backgroundColor: '#de9595', justifyContent:'center',alignItems: 'center',}}>
              
            <Text>Add</Text>
            
            </TouchableOpacity>
        </View>
     
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

export default connect()(AddTodo);

