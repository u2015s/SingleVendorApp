import React,{ Component, useState, useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import LogIn from './../screens/Login';
// import OTPv from './../screens/OtpV'
// import OTPv2 from './../screens/OtpV2'
import Fpassword from './../screens/ForgotPassword'
const Stack = createStackNavigator();
export const AuthStack = () =>{
   return(
    <Stack.Navigator initialRouteName='OtpV' 
    screenOptions={{
      headerShown: false
  }}
    
    >
    <Stack.Screen
      name='Login'
      component={LogIn}
      
    />
        <Stack.Screen name='Fpass' component={Fpassword} />

    <Stack.Screen name='Signup' component={Register} />

    {/* <Stack.Screen name="OtpV" component={OTPv}/>
    <Stack.Screen name="OtpV2" component={OTPv2 }/> */}
  </Stack.Navigator>
         )
}
export default AuthStack