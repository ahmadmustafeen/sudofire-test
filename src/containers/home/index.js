import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppHeader, AppSearch} from '../../components';

const Home = () => {
  return (
    <View>
      <AppHeader />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <AppSearch />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
