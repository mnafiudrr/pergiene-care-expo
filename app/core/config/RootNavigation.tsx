/* eslint-disable no-nested-ternary */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashNavigation from '~/app/features/splash/config/Navigation';
import HomeNavigation from '~/app/features/home/config/Navigation';
import { SplashContext } from './SplashContext';
import BabNavigation from '~/app/features/bab/config/Navigation';
import MateriNavigation from '~/app/features/materi/config/Navigation';
import { AuthContext } from './AuthContext';
import AuthNavigation from '~/app/features/auth/config/Navigation';

const Root = createStackNavigator();

function listScreen() {
  return [
    ...HomeNavigation.getNavigation(Root),
    ...BabNavigation.getNavigation(Root),
    ...MateriNavigation.getNavigation(Root),
  ];
}

function authScreen() {
  return [
    ...AuthNavigation.getNavigation(Root),
  ]
}

function splashScreen() {
  return [
    ...SplashNavigation.getNavigation(Root),
  ]
}

function RootNavigation() {

  const [splashLoading, setSplashLoading] = useState(true);
  const [userData, setUserData] = useState({name: ''});
  const [login, setLogin] = useState(false);

  return (
    <SplashContext.Provider 
    value={{ splashLoading, setSplashLoading }}>
      <AuthContext.Provider value={{ userData, setUserData, login, setLogin }}>
        <Root.Navigator>
          {
            splashLoading ?
              splashScreen()
                :
              login ?
                listScreen()
                  :
                authScreen()
          }
        </Root.Navigator>
      </AuthContext.Provider>
    </SplashContext.Provider>
  );
}

export default RootNavigation;
