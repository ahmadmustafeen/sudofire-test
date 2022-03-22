import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = props => {
    const {onPress, label, containerStyle, textStyle, inverted} = props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            width: '100%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: inverted ? 'rgb(255,255,255)' : 'rgba(0,0,0,0)',
            borderColor: inverted ? '#49D9D9' : 'white',
            borderWidth: 1,
          },
          containerStyle,
        ]}>
        <Text style={[{color: inverted ? '#49D9D9' : 'white'}, textStyle]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

export {AppButton}
