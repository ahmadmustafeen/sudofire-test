import React from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';


const AppSearch = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        elevation: 5,
        flexDirection: 'row',
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 10,
      }}>
      <View
        style={{
          width: '10%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="search" type="feather" size={16} color="grey" />
      </View>
      <View style={{width: '90%', height: '100%'}}>
        <TextInput
          style={{color: 'black'}}
          placeholderTextColor="grey"
          placeholder="Search patient, health issues..."
        />
      </View>
    </View>
  );
};

export {AppSearch};
