import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        initialParams={{testParam: 'This is a test!'}}
        component={withMappedNavigationParams()(Screen1)}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Root" component={StackNavigator} />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
