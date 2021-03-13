/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useContext, useState, useEffect} from 'react';
import { AuthContext }  from './src/Navigation/AuthProvider'
import auth from '@react-native-firebase/auth';
import {Text} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/Navigation/HomeStack'
import AuthStack from './src/Navigation/AuthStack'
import Routes from './src/Navigation/Routes';
import { AuthProvider } from './src/Navigation/AuthProvider';
const App = ()=> {
  
  return (
  <AuthProvider>
    <Routes/>
  </AuthProvider>
    
  );
};


export default App;
