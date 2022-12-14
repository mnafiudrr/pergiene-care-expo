import { CompositeNavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, Button, ScrollView, TouchableOpacity, ImageBackground,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppView from '~/app/core/component/AppView';
import Visible from '~/app/core/component/Visible';
import { bgcolor } from '~/app/core/utils/colors';
import { data_static } from '~/app/service/data-static';

type MateriProps = {
  route?: any
};

export default function Materi({ route }: MateriProps) {

  const { id, idx } = route.params;
  const data = data_static[id].data[idx];

  const [page, setPage] = useState(0);

  const [backColor, setBackColor] = useState(bgcolor.blueSea);
  const [backImage, setBackImage] = useState(require('~/assets/images/bg_blue_sky.png'));

  useEffect(() => {
    if ( data.data.length > 0 ){
      setBackColor( checkColor( data.data[page].bg ?? data.bg ) );
    } else {
      setBackColor( checkColor( data.bg ) )
    }
  },[page]);

  const checkColor = (value: string) => {

    if (value == 'red-tomato') {
      setBackImage(require('~/assets/images/bg_pink.png'));
      return bgcolor.redTomato;
    }
    else if (value == 'blue-sky') {
      setBackImage(require('~/assets/images/bg_blue_sky.png'));
      return bgcolor.blueSky;
    }
    else {
      setBackImage(require('~/assets/images/bg_blue_pastel.png'));
      return bgcolor.bluePastel;
    }

  }

  return (
    <AppView withSafeArea style={{ backgroundColor: backColor  }} withHeader={false}>
    <ImageBackground source={backImage} style={{ flex: 1 }}>
        { data.type != 'page' ? (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: wp(8), justifyContent: 'center' }}>
              <Text style={{ marginVertical: heightPercentageToDP(3), fontSize: 25, textAlign: 'center', fontFamily: 'FredokaOne' }}>{data.title}</Text>
              <Text style={{ marginBottom: heightPercentageToDP(3), marginHorizontal: 10, fontSize: 16, fontFamily: 'comicsansms', textAlign: 'justify' }}>{data.value ?? ''}</Text>
            </View>
          </View>
        ):(
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, paddingHorizontal: wp(8) }}>
              <Text style={{ marginVertical: heightPercentageToDP(3), fontSize: 25, textAlign: 'center', fontFamily: 'FredokaOne' }}>{data.title}</Text>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ marginBottom: heightPercentageToDP(1), fontSize: 16, fontFamily: 'FredokaOne' }}>{page+1}. {data.data[page].title}</Text>
                <Image source={data.data[page].image} style={{ width: wp(55), height: wp(45), marginVertical: heightPercentageToDP(1), marginLeft: wp(5), alignSelf: 'center' }} />
                {
                  data.data[page].data?.map((value, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <View style={{ width: 7, height: 7, borderWidth: 2, marginTop: 8, marginRight: 5  }} />
                        <Text style={{ marginBottom: heightPercentageToDP(3), flex:1, fontSize: 16, fontFamily: 'comicsansms', textAlign: 'justify' }}>{value}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        )}
        <Visible visible={data.type == 'page'}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Visible visible={page > 0}>
                <TouchableOpacity style={{ padding:25 }} onPress={() => setPage(page-1)}>
                  <Text style={{ fontFamily: 'comicsansms' }}>{`< Sebelumnya`}</Text>
                </TouchableOpacity>
              </Visible>
            </View>
            <View>
              <Visible visible={page < data.data.length -1}>
                <TouchableOpacity style={{ padding:25 }} onPress={() => setPage(page+1)}>
                  <Text style={{ fontFamily: 'comicsansms' }}>{`Selanjutnya >`}</Text>
                </TouchableOpacity>
              </Visible>
            </View>
          </View>
        </Visible>
        <Visible visible={data.type != 'page'}>
          <Image 
          source={ require('~/assets/images/women.png') } 
          style={{ 
            width: wp(17), 
            height: wp(17), 
            marginBottom: 15, 
            marginLeft: 15 
          }}/>
        </Visible>
      </ImageBackground>
    </AppView>
  );
}
