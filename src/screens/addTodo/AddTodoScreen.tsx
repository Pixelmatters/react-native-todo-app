import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigators/HomeNavigator';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {addTodo} from '../../store/Todo/actions';
import {useDispatch} from 'react-redux';
import {ITodo} from '../../store/Todo/types';

type AddTodoScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'AddTodo'
>;

const AddTodoScreen: React.FC = () => {
  const navigation = useNavigation<AddTodoScreenNavigationProp>();
  const dispatch = useDispatch();
  const [textValue, onChangeText] = React.useState('');

  const addNewTodo = () => {
    if (textValue === '') {
      return;
    }
    const newTodo: ITodo = {
      key: Date.now().toString(),
      isDone: false,
      title: textValue,
    };
    dispatch(addTodo(newTodo));

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="New Todo"
        maxLength={40}
        autoFocus={true}
        onChangeText={(text) => onChangeText(text)}
        value={textValue}
        onSubmitEditing={addNewTodo}
      />
      <Button title="Add" onPress={addNewTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    marginTop: 12,
    paddingStart: 8,
    paddingEnd: 4,
  },
});

export default AddTodoScreen;
