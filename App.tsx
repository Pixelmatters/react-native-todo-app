import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './src/navigators/HomeNavigator';
import {Provider} from 'react-redux';
import {getInitialState, todoReducer} from './src/store/Todo/reducers';
import {ITodoState} from './src/store/Todo/types';
import {Text} from 'react-native';
import {createStore} from 'redux';

export default function App() {
  const [currentState, setCurrentState] = useState<ITodoState>();

  useEffect(() => {
    async function handleInitialState() {
      const initialState = await getInitialState();
      setCurrentState(initialState);
    }
    handleInitialState();
  }, []);

  if (!currentState) {
    return <Text>Loading ...</Text>;
  }
  const store = createStore(todoReducer, currentState);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </Provider>
  );
}
