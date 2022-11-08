import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, Button, ScrollView,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppBox from '~/app/core/component/AppBox';
import AppView from '~/app/core/component/AppView';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static } from '~/app/service/data-static';
import MateriScreen from '../../materi/config/Screens';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 5
  },
  vertical: {
    marginHorizontal: 5
  },
});

type BabProps = {
  route?: any
};

export default function Bab({ route }: BabProps) {

  const navigation = useNavigation<CompositeNavigationProp<any, any>>();
  const { id } = route.params;
  const data = data_static[id];

  return (
    <AppView withSafeArea withHeader={false}>
      <ScrollView>
        <View
          style={[data.type == 'vertical' ? styles.vertical : styles.horizontal, {margin: wp(3)}]}>
          {
            data.data?.map((item, idx) => {
              return (
                <View key={idx} style={data.type == 'vertical' ? idx % 2 != 0 ? { alignItems: 'flex-end' } : null : null}>
                  <AppBox
                    key={idx}
                    title={item.title}
                    onPress={() => MateriScreen.MATERI.navigate(navigation, { id, idx })}
                  />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </AppView>
  );
}
