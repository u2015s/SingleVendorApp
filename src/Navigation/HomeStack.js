import React,{ Component, useState, useEffect} from 'react'
import Home from './../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Homenavigator = createStackNavigator();

export const HomeStack = () =>{
   return(
       <Homenavigator.Navigator>
           <Homenavigator.Screen
           name="Home"
           component={Home}
           />
       </Homenavigator.Navigator>
         )
}
export default HomeStack