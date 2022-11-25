import { CompositeNavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, Button, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';
import Visible from '~/app/core/component/Visible';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static, sumber_pustaka } from '~/app/service/data-static';

type DaftarPustakaProps = {
  route?: any
};

export default function DaftarPustaka({ route }: DaftarPustakaProps) {

  const data = sumber_pustaka;

  const [backColor, setBackColor] = useState(bgcolor.blueSky);
  const [backImage, setBackImage] = useState(require('~/assets/images/bg_blue_sky.png'));

  return (
    <AppView withSafeArea style={{ backgroundColor: backColor  }} withHeader={false}>
    <ImageBackground source={backImage} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingHorizontal: wp(8), justifyContent: 'center' }}>
            <Text style={{ marginVertical: heightPercentageToDP(3), fontSize: 25, textAlign: 'center', fontFamily: 'FredokaOne' }}>Sumber Pustaka</Text>
            <Text style={{ marginBottom: heightPercentageToDP(3), marginHorizontal: 10, fontSize: 16, fontFamily: 'comicsansms', textAlign: 'justify' }}>{data}</Text>
          </View>
        </View>
        <Image 
        source={ require('~/assets/images/women.png') } 
        style={{ 
          width: wp(17), 
          height: wp(17), 
          marginBottom: 15, 
          marginLeft: 15 
        }}/>
      </ImageBackground>
    </AppView>
  );
}
