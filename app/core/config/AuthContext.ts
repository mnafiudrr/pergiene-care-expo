import {createContext} from 'react';

const AuthCtxDefaultValue = {
  userData: {
    name: '',
  },
  setUserData: (object: {
    name: string
  }) => {},
  login: false,
  setLogin: (boolean: boolean) => {},
}

export const AuthContext = createContext(AuthCtxDefaultValue);