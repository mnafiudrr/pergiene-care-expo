import { Text, StyleSheet, Image, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { bgcolor } from '~/app/core/utils/colors';

type boxProps = {
  logo?: string,
  title?: string,
  onPress?: () => void,
  imageSource?: ImageSourcePropType,
};

export default function AppTextBox({logo, title, imageSource, onPress}: boxProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.boxIn}/>
        <View style={styles.box}>
          <Text style={[styles.title, {fontFamily: 'FredokaOne', color: bgcolor.blackUltraLight}]}>{ title }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    width: wp(46)
  },
  box: { 
    backgroundColor: bgcolor.bluePastel, 
    width: wp(40),  
    height: wp(30),
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: bgcolor.blueSea
  },
  boxIn: { 
    backgroundColor: bgcolor.white, 
    width: wp(46),  
    height: wp(35),
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 15,
    marginTop: -wp(2.5),
    marginRight: -wp(43),
  },
  title: {
    fontSize: wp(6)
  }
});