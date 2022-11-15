import { CompositeNavigationProp } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { SplashContext } from '~/app/core/config/SplashContext';
import { bgcolor } from '~/app/core/utils/colors';

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
    fontSize: wp(11),
    marginTop: heightPercentageToDP(5),
    color: bgcolor.blackUltraLight
  },
  logo: {
    paddingBottom: wp(5),
    width: wp(65),
    height: wp(65),
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

export default function Splash({ navigation }: { navigation: CompositeNavigationProp<any, any> }) {

  const { setSplashLoading } = useContext(SplashContext);

  const [fontsLoaded, setfontsLoaded] = useState(false);

  const _loadFontAsync = async () => {
    await Font.loadAsync({
        'ArchitectsDaughter': require('~/assets/fonts/ArchitectsDaughter.ttf'),
        'Schoolbell': require('~/assets/fonts/Schoolbell.ttf'),
        'Staatliches-Regular': require('~/assets/fonts/Staatliches-Regular.ttf'),
        'FredokaOne': require('~/assets/fonts/FredokaOne-Regular.ttf'),
        'comicsansms': require('~/assets/fonts/design.graffiti.comicsansms.ttf'),
    });
    setfontsLoaded(true);
  }

  useEffect(() => {
    _loadFontAsync();
  },[]);

  useEffect(() => {
    setTimeout(() => {
      setSplashLoading(false);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: bgcolor.yellow }}>
      </View>
    )
  }


  return (
    <View style={{ flex: 1, backgroundColor: bgcolor.blueSky }}>
      <View style={styles.container}>
        <View style={styles.withShadow}>
          <Image style={styles.logo} source={require('~/assets/icon.png')} />
        </View>
        <Text style={[styles.title, { fontFamily: 'FredokaOne' }]}>Pergiene Care</Text>
      </View>
      <View style={styles.containerFooter}>
        <ActivityIndicator style={styles.loader} size={'large'} color={'grey'} />
      </View>
    </View>
  );
}
