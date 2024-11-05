import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { LandingPage } from './components/LandingPage';
import { MainFeed } from './components/MainFeed';
const Stack = createStackNavigator();

// navigationTypes.ts
export type RootStackParamList = {
  MainFeed: undefined;
  // Add other routes here
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="MainFeed" component={MainFeed} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});