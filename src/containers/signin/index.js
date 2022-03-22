import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {AppButton} from '../../components';

const Signin = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainerView}>
        <ImageBackground
          source={require('../../assets/signin-bg.jpg')}
          style={styles.imageBackground}>
          <LinearGradient
            style={styles.textContainer}
            colors={['rgba(255,255,255,0.3)', 'rgb(255,255,255)']}>
            <View style={{width: '80%'}}>
              <Text style={styles.textStyle}>
                Help millions people everywhere, everytime!
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.bottomButtonContainer}>
        <View style={{width: 130}}>
          <AppButton label="Log in" onPress={()=>props.navigation.navigate("Home")}/>
        </View>
        <View style={{width: 130}}>
          <AppButton label="Sign up" inverted />
        </View>
      </View>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          textAlign:'center',
          alignSelf:'center',   
        }}>
        <Text style={{textAlign:'center'}}>Are you a patient?</Text>
        <TouchableOpacity>
          <Text style={{color: 'black', fontWeight: 'bold',paddingLeft:10,textDecorationLine: 'underline'}}>Get here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#49D9D9',
  },
  imageContainerView: {
    overflow: 'hidden',
    width: '100%',
    height: '75%',
    borderBottomLeftRadius: 100,
    backgroundColor: '#49D9D9',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  textContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    letterSpacing: 0.8,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'black',
    width: '80%',
  },
  bottomButtonContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
});
