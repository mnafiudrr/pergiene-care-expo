import { CompositeNavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, Button,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppBox from '~/app/core/component/AppBox';
import AppView from '~/app/core/component/AppView';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static } from '~/app/service/data-static';

const heightScreen = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type BabProps = {
  route?: any
};

export default function Bab({ route }: BabProps) {

  const { id } = route.params;
  const data = data_static[id];

  return (
    <AppView withSafeArea withHeader={false}>
      <View style={{ flex: 1, marginTop: heightPercentageToDP(5) }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginHorizontal: 5
          }}>
          {
            data.data?.map((item, idx) => {
              return (
                <AppBox
                  key={idx}
                  title={item.title}
                />
              )
            })
          }

        </View>
      </View>
    </AppView>
  );
}
