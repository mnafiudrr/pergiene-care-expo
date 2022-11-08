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

export default function AppBox({logo, title, imageSource, onPress}: boxProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.boxIn}/>
        <View style={styles.box}>
        { imageSource ? <Image source={imageSource??{}} style={styles.logo} /> : null }
        </View>
      </View>
      <Text style={[styles.title, {fontFamily: 'ArchitectsDaughter'}]}>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    width: wp(46)
  },
  logo: {
    width: 80,
    height: 80
  },
  box: { 
    backgroundColor: bgcolor.orange, 
    width: 110, 
    height: 110, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: bgcolor.blackLight
  },
  boxIn: { 
    backgroundColor: bgcolor.orange, 
    width: 110, 
    height: 110, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginRight: -120
  },
  title: {
    fontSize: 18
  }
});