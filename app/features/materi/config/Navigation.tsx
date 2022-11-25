import {TypedNavigator} from '@react-navigation/native';
import React from 'react';
import DaftarPustaka from '../screens/DaftarPustaka';
import Materi from '../screens/Materi';
import Screens from './Screens';

function getNavigation(Root: TypedNavigator<any, any, any, any, any>) {
  return [
    <Root.Screen
      name={Screens.MATERI.KEY}
      component={Materi}
      key={Screens.MATERI.KEY}
      options={{
        title: Screens.MATERI.TITLE,
        headerShown: false,
      }}
    />,
    <Root.Screen
      name={Screens.DAFTAR_PUSTAKA.KEY}
      component={DaftarPustaka}
      key={Screens.DAFTAR_PUSTAKA.KEY}
      options={{
        title: Screens.DAFTAR_PUSTAKA.TITLE,
        headerShown: false,
      }}
    />,
  ];
}

const MateriNavigation = {
  getNavigation,
};

export default MateriNavigation;
