import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Constants/GlobalStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function TicketCard(props) {
  console.log(props);
  const {name, phone, vehicle_type, serviceType} = props.data;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'https://picsum.photos/id/1011/200'}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              marginLeft: '5%',
            }}
          />
          <Text
            style={{
              color: COLORS.PURPLE,
              fontWeight: 'bold',
              marginLeft: '6%',
              fontSize: 20,
            }}>
            {name}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: '5%',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>Service</Text>
          <Text>{serviceType}</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>Vehicle </Text>
          <Text>{vehicle_type}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: '3.8%',
          marginBottom: '1%',
          width: '90%',
          alignSelf: 'center',
          height: 1,
          backgroundColor: '#cccccc',
        }}
      />
      <View
        style={{
          marginLeft: '5%',
          marginTop: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          width: wp(70),
        }}>
        <Image
          source={require('../Assets/Images/pin.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
        <Text style={{marginLeft: '5%'}}>
          606-3727 Ullamcorper. Street Roseville NH 11523
        </Text>
      </View>
      <View
        style={{
          marginLeft: '5%',
          marginTop: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          width: wp(70),
        }}>
        <Image
          source={require('../Assets/Images/phones.png')}
          style={{
            height: 36,
            width: 36,
          }}
        />
        <Text style={{marginLeft: '5%'}}>+91 {phone}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '5%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e5e5e5',
            width: '40%',
            paddingVertical: '3.2%',
            borderRadius: 6,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, color: '#858585'}}>
            Decline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4db862',
            width: '40%',
            paddingVertical: '3.2%',
            borderRadius: 6,

            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, color: '#c8f1d0'}}>
            Accept
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: wp(90),
    paddingVertical: '5%',
    borderRadius: 8,
    backgroundColor: '#f9fbfc',
  },
  imageStyle: {
    height: 50,
    alignSelf: 'center',
    width: 50,
    resizeMode: 'contain',
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flex: 3,
  },
  container3: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonRegister: {
    width: wp(80),
    alignSelf: 'center',
    paddingVertical: '5%',
    borderRadius: 50,
    backgroundColor: COLORS.ORANGE,
    marginBottom: '7.4%',
  },
  buttonLogin: {
    width: wp(80),
    alignSelf: 'center',
    paddingVertical: '5%',
    borderRadius: 50,
    backgroundColor: COLORS.PURPLE_LIGHT,
  },
});
