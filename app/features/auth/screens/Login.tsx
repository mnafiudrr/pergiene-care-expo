import { CompositeNavigationProp } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, TextInput, Pressable, ToastAndroid,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as SecureStore from 'expo-secure-store';
import { bgcolor } from '~/app/core/utils/colors';
import { AuthContext } from '~/app/core/config/AuthContext';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: bgcolor.pink
  },
  containerFooter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(8),
    color: bgcolor.whiteLight
  },
  logo: {
    width: wp(17),
    height: wp(17),
    borderRadius: wp(2)
  },
  footer: {
    padding: Platform.OS === 'android' ? wp(3) : (heightScreen < 700 ? wp(2) : 0),
    fontSize: wp(100) < 600 ? wp(3.8) : wp(100) < 700 ? wp(2.8) : wp(2),
    color: 'grey',
    textAlign: 'center',
    marginTop: wp(2),
  },
  loader: {
    marginTop: wp(5),
  },
  withShadow: {
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 1,
    // shadowRadius: 20,  
    elevation: 50
  }
});

export default function Login({ navigation }: { navigation: CompositeNavigationProp<any, any> }) {

  const { setLogin, setUserData } = useContext(AuthContext);

  const [data, setData] = useState({name: ''});

  const toggleLanjut = async () => {
    if( !data.name ) {
      ToastAndroid.show('Nama belum terisi', 1);
      return false;
    }

    await SecureStore.setItemAsync('name', data.name);
    setUserData({ name: data.name });
    setLogin(true);

  }

  return (
    <View style={{ flex: 1, backgroundColor: bgcolor.blueSea }}>
      <View style={styles.container}>
        <View style={styles.withShadow}>
          <Image style={styles.logo} source={require('~/assets/icon.png')} />
        </View>
        <Text style={[styles.title, { fontFamily: 'FredokaOne' }]}>Pergiene Care</Text>
        <View style={{ 
          backgroundColor: bgcolor.whiteLight, 
          width: wp(70), 
          height: wp(30),
          borderRadius: wp(3),
          marginTop: heightPercentageToDP(2),
          alignItems: 'center',
          justifyContent: 'space-evenly',
           }}>
          <TextInput 
          value={data.name}
          placeholder="Masukan nama anda" 
          onChangeText={(text) => setData({...data, name: text})}
          onSubmitEditing={toggleLanjut}
          style={{ 
            width: wp(50), 
            height: wp(10), 
            textAlign: 'center', 
            fontFamily: 'FredokaOne', 
            fontSize: wp(4.8) 
          }}
          />
          <Pressable 
            onPress={toggleLanjut}
            style={{ 
              backgroundColor: bgcolor.blueSea,
              width: wp(40),
              height: wp(10),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: wp(3),
            }}
          >
            <Text
              style={{ 
                fontFamily: 'FredokaOne',
                fontSize: wp(4.5),
                color: bgcolor.whiteLight
              }}
            >
              Lanjut
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
