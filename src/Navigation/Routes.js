/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useContext, useState, useEffect} from 'react';
import { AuthContext }  from './AuthProvider'
import auth from '@react-native-firebase/auth';
import {Text} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack'
import AuthStack from './AuthStack'
import {ProductProvider} from '../Components/ProductProvider'
const App = ()=> {
  const { user, setUser,getDetails } = useContext(AuthContext);

  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(user){
    setUser(user);
    getDetails(user)
    // if(!user){
    //   getToken()
    // }
    if (initializing) setInitializing(false);
 }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <Text>
      loading
    </Text>;
  }
  return (

    <NavigationContainer>
      {user ?
      <ProductProvider>
          <HomeStack /> 
      </ProductProvider>
      :
    <AuthStack />}
    </NavigationContainer>

    
  );
};


export default App;
