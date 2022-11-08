/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashNavigation from '~/app/features/splash/config/Navigation';
import HomeNavigation from '~/app/features/home/config/Navigation';
import { SplashContext } from './SplashContext';
import BabNavigation from '~/app/features/bab/config/Navigation';
import MateriNavigation from '~/app/features/materi/config/Navigation';

const Root = createStackNavigator();

function listScreen() {
  return [
    ...HomeNavigation.getNavigation(Root),
    ...BabNavigation.getNavigation(Root),
    ...MateriNavigation.getNavigation(Root),
  ];
}

function splashScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
  ]
}

function RootNavigation() {

  const [splashLoading, setSplashLoading] = useState(true);

  return (
    <SplashContext.Provider 
    value={{ splashLoading, setSplashLoading }}>
      <Root.Navigator>
        {
          splashLoading ?
            splashScreen()
              :
            listScreen()
        }
      </Root.Navigator>
    </SplashContext.Provider>
  );
}

export default RootNavigation;
