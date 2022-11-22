import { View, Text, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, Pressable, ToastAndroid, Linking } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import AppView from '~/app/core/component/AppView';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CompositeNavigationProp } from '@react-navigation/native';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static, url_google_form } from '~/app/service/data-static';
import AppBox from '~/app/core/component/AppBox';
import BabScreen from '~/app/features/bab/config/Screens';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '~/app/core/config/AuthContext';

export default function Home({ navigation }: { navigation: CompositeNavigationProp<any, any> }) {

  const { setUserData, setLogin } = useContext(AuthContext);

  const toggleLogout = async () => {
    await SecureStore.deleteItemAsync('name');
    setUserData({name: ''});
    setLogin(false);
  }

  const toggleOpenBrowser = async () => {
    const supported = await Linking.canOpenURL(url_google_form);
    if (supported) {
      await Linking.openURL(url_google_form);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url_google_form}`);
    }
  }

  return (
    <AppView style={{ backgroundColor: bgcolor.pink }} withSafeArea>
      <ImageBackground source={ require('~/assets/images/bg_home.png') } style={styles.container}>
        <View style={styles.container}>
          <View style={{ marginTop: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Pressable onPress={toggleOpenBrowser}>
              <MaterialIcons name="comment" size={32} color={bgcolor.blackUltraLight} />
            </Pressable>
            <Pressable onPress={toggleLogout} style={{ marginLeft: 15 }}>
              <MaterialIcons name="logout" size={32} color={bgcolor.blackUltraLight} />
            </Pressable>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems:'center' }}>
            <Text style={{ fontFamily: 'FredokaOne', fontSize: wp(10), color: bgcolor.blackUltraLight }}>Pergiene Care</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.stripes, { backgroundColor: bgcolor.yellow }]}/>
              <View style={[styles.stripes, { backgroundColor: bgcolor.orange }]}/>
              <View style={[styles.stripes, { backgroundColor: bgcolor.pink }]}/>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <View 
            style={{ flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}>
              {
                data_static.map((item, idx) => {
                  return (
                    <AppBox
                      key={idx}
                      onPress={() => BabScreen.BAB.navigate(navigation, {id: idx})}
                      imageSource={item.image}
                      title={item.title}
                    />
                  )
                })
              }
            </View>
          </View>
        </View>
      </ImageBackground>
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 120,
    height: 35,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    // color: 'white'
  },
  stripes: { 
    borderColor: bgcolor.blueSea,
    width: wp(14),
    height: wp(5.5),
    borderWidth: wp(1),
    borderRadius: wp(5),
    marginHorizontal: wp(1.5)
  }
});