import { View, Text, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import AppView from '~/app/core/component/AppView';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CompositeNavigationProp } from '@react-navigation/native';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static } from '~/app/service/data-static';
import AppBox from '~/app/core/component/AppBox';
import BabScreen from '~/app/features/bab/config/Screens';


export default function Home({ navigation }: { navigation: CompositeNavigationProp<any, any> }) {
// Over size screen
const overCols = wp(90) % 103;

// Change to the number of columns in your grid
const numCols = (wp(90) - overCols) / 103;

// Change to the spacing for each item
const spacing = overCols / numCols;


  return (
    <AppView style={{ backgroundColor: bgcolor.pink }} withSafeArea>
      <ImageBackground source={ require('~/assets/images/bg_home.png') } style={styles.container}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}> */}
        <View style={styles.container}>
          <View style={{ flex: 2, justifyContent: 'center', alignItems:'center' }}>
            <Text style={{ fontFamily: 'FredokaOne', fontSize: wp(10), color: bgcolor.blackUltraLight }}>Menu Utama</Text>
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