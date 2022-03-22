import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={styles.containerLeft}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            overflow: 'hidden',
            marginHorizontal: 10,
          }}>
          <Image
            source={require('../assets/doc.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <Text>Hi Dr,</Text>
          <Text>How're your doing today</Text>
        </View>
      </View>

      <View
        style={styles.containerRight}>
        <View
          style={styles.notificationContainer}>
          <Icon name="bell" type="feather" size={20} color="#EB4976" />
          <View
            style={styles.counterContainer}>
            <Text>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  containerLeft:{
    width: '80%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerRight:{
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContainer:{
    width: 50,
    height: 50,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer:{
              position: 'absolute',
              top: -5,
              right: -5,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#EB4976',
              borderRadius: 10,
            }
});

export {AppHeader};
