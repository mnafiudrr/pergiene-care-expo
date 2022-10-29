import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect } from 'react';
import {
  StyleSheet, View, Platform, Dimensions, Text, ToastAndroid, TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';
import * as Clipboard from 'expo-clipboard';

import HomeScreen from '../../home/config/Screens';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  label: {
    fontSize: 13,
  },
  value: {
    fontSize: 15,
    paddingHorizontal: 19,
  },
  containerFooter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    padding: Platform.OS === 'android' ? wp(3) : (heightScreen < 700 ? wp(2) : 0),
    fontSize: wp(100) < 600 ? wp(3.8) : wp(100) < 700 ? wp(2.8) : wp(2),
    color: 'grey',
    textAlign: 'center',
    marginTop: wp(2),
  },
});

type ResultProps = {
  route?: any
};

export default function Result({ route }: ResultProps) {
  
  const navigation = useNavigation<CompositeNavigationProp<any, any>>();
  const { data } = route.params;
  const routes = navigation.getState()?.routes;

  useEffect(() => {
    const prevRoute = routes[routes.length - 2].name; // if Scanner then save to the history
  },[]);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(data.value);
    ToastAndroid.show('Copied', ToastAndroid.SHORT);
  };

  return (
    <AppView withSafeArea withHeader={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>
            Type :
          </Text>
          <Text style={styles.value}>
            {data.type}
          </Text>
        </View>
        <View>
          <Text style={styles.label}>
            Data :
          </Text>
          <View style={{ backgroundColor: '#e9e9e9', borderRadius: 5, paddingVertical: 5 }}>
            <Text style={styles.value}>
              {data.value}
            </Text>
            <TouchableOpacity 
            onPress={copyToClipboard}
            style={{ 
              alignSelf: 'flex-end', 
              paddingHorizontal: 15, 
              backgroundColor: '#d9d9d9', 
              borderRadius: 5, 
              // marginBottom: 5,
              marginRight: 5,
              padding: 4,
              marginTop: -5
              }}>
              <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                Copy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.footer}> Made by Fuifiu</Text>
      </View>
    </AppView>
  );
}
