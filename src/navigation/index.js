import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Signin from '../containers/signin'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../containers/home';


 const App = () => {
    const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signin'>
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App