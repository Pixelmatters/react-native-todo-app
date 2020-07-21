import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigators/HomeNavigator';
import {StyleSheet, FlatList, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TodoItem from '../../components/TodoItem/TodoItem';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const todoState = useSelector((state: RootState) => state);

  const goToAddTodo = () => {
    navigation.navigate('AddTodo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add Todo" onPress={goToAddTodo} />
      <FlatList
        style={styles.list}
        data={todoState.todo}
        renderItem={({item}) => <TodoItem todo={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  list: {
    width: '100%',
  },
});

export default HomeScreen;
