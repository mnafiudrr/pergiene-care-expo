import { CompositeNavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Platform, Dimensions, Text, Image, Button, ScrollView, TouchableOpacity,
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

  return (
    <AppView withSafeArea style={{ backgroundColor: bgcolor.yellow }} withHeader={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        { data.type != 'page' ? (
          <View style={{ flex: 1, paddingHorizontal: wp(8) }}>
            <Text style={{ marginVertical: heightPercentageToDP(3), fontSize: 25, textAlign: 'center', fontFamily: 'ArchitectsDaughter' }}>{data.title}</Text>
            <Text style={{ marginBottom: heightPercentageToDP(3), marginHorizontal: 10, fontSize: 16, fontFamily: 'Schoolbell' }}>{data.value ?? ''}</Text>
          </View>
        ):(
          <View style={{ flex: 1, paddingHorizontal: wp(8) }}>
            <Text style={{ marginVertical: heightPercentageToDP(3), fontSize: 25, textAlign: 'center', fontFamily: 'ArchitectsDaughter' }}>{data.title}</Text>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ marginBottom: heightPercentageToDP(3), fontSize: 16, fontFamily: 'Schoolbell' }}>{data.data[page].title}</Text>
              {
                data.data[page].data?.map((value, index) => {
                  return (
                    <View key={index} style={{ flexDirection: 'row', marginBottom: 10 }}>
                      <View style={{ width: 7, height: 7, borderWidth: 2, marginTop: 8, marginRight: 5  }} />
                      <Text style={{ marginBottom: heightPercentageToDP(3), fontSize: 16, fontFamily: 'Schoolbell' }}>{value}</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>
        )}
      </ScrollView>
      <Visible visible={data.type == 'page'}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Visible visible={page > 0}>
              <TouchableOpacity style={{ padding:25 }} onPress={() => setPage(page-1)}>
                <Text style={{ fontFamily: 'ArchitectsDaughter' }}>{`< Sebelumnya`}</Text>
              </TouchableOpacity>
            </Visible>
          </View>
          <View>
            <Visible visible={page < data.data.length -1}>
              <TouchableOpacity style={{ padding:25 }} onPress={() => setPage(page+1)}>
                <Text style={{ fontFamily: 'ArchitectsDaughter' }}>{`Selanjutnya >`}</Text>
              </TouchableOpacity>
            </Visible>
          </View>
        </View>
      </Visible>
    </AppView>
  );
}
