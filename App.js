import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/containers/home';
import Navigator from './src/navigation'


const App = () => {
  return (
    <View>
      {/* <Signin /> */}
      <Home />
      {/* <Navigator /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
