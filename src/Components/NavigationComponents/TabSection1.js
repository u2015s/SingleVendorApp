import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from './Toolbar'
import { CommonActions } from '@react-navigation/native';
export const TabSection1 = ({navigation}) =>{

   return(
     <>
     
     <Text> 
       TS1
       
    </Text>
     
     </>
    
         )
}
export default TabSection1