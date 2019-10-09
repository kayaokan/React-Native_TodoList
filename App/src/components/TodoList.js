import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo}) => (
    <View>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>

                    <Text style={{
                       paddingLeft: 20,
                       fontSize: 24,
                       textDecorationLine:
                       todo.completed ?
                        'line-through': 'none' 
                    }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default TodoList;
