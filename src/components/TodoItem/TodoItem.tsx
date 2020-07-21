import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './TodoItem.styles';
import {ITodo} from '../../store/Todo/types';
import CheckBox from '@react-native-community/checkbox';
import {updateIsDone, removeTodo} from '../../store/Todo/actions';
import {useDispatch} from 'react-redux';

interface ITodoItem {
  todo: ITodo;
}

const TodoItem = ({todo}: ITodoItem) => {
  const dispatch = useDispatch();
  const [isDone, handleIsDone] = useState(todo.isDone);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo));
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <CheckBox
            value={isDone}
            onValueChange={() => {
              isDone ? handleIsDone(false) : handleIsDone(true);
              dispatch(updateIsDone(todo));
            }}
          />
          <Text style={styles.item}>{todo.title}</Text>
        </View>
        <Button color="red" title="Remove" onPress={handleRemoveTodo} />
      </View>
      <View style={styles.hr} />
    </View>
  );
};

export default TodoItem;
