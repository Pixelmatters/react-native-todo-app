import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import AddTodoScreen from '../screens/addTodo/AddTodoScreen';

export type HomeStackParamList = {
  Home: undefined;
  AddTodo: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <HomeStack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={{title: 'Add Todo'}}
      />
    </HomeStack.Navigator>
  );
};
