import {TypedNavigator} from '@react-navigation/native';
import React from 'react';
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
  ];
}

const MateriNavigation = {
  getNavigation,
};

export default MateriNavigation;
