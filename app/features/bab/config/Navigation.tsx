import {TypedNavigator} from '@react-navigation/native';
import React from 'react';
import Bab from '../screens/Bab';
import Screens from './Screens';

function getNavigation(Root: TypedNavigator<any, any, any, any, any>) {
  return [
    <Root.Screen
      name={Screens.BAB.KEY}
      component={Bab}
      key={Screens.BAB.KEY}
      options={{
        title: Screens.BAB.TITLE,
        headerShown: false,
      }}
    />,
  ];
}

const BabNavigation = {
  getNavigation,
};

export default BabNavigation;
