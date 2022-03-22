import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader, AppSearch} from '../../components';
import {Icon} from 'react-native-elements';

const HomeComponent = props => {
  const {label,iconName,iconType,iconSize} = props
  return (
    <View
      style={{
        width: 150,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 150,
        borderRadius: 20,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0.1},
      }}>
      <Icon name={iconName||"calendar"} type={iconType||"font-awesome"}
      color="#49D9D9"
      size={iconSize||22}/>
      <Text style={{width:"70%",textAlign:'center',paddingTop:10}}>{label}</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <AppHeader />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <AppSearch />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 75,
        }}>
        <View style={{paddingVertical: 20}}>
          <View
            style={{
              width: '70%',
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600', fontSize: 20, paddingRight: 10}}>
              Tasks
            </Text>
            <Text style={{fontSize: 20}}>for today</Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 20,
            }}>
            5 of 9 Completed
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
          }}>
          <Text
            style={{
              fontWeight: '600',
              textDecorationLine: 'underline',
              color: '#49D9D9',
              fontSize: 32,
            }}>
            5
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <HomeComponent label="Schedule" />
        <HomeComponent label="Consult History" iconName="mobile" iconSize={26}/>
        <HomeComponent label="Patient Management" iconName="folder" />
        <HomeComponent label="Free Consultation 150+ new"  iconType="Entypo" iconName="chat"/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
