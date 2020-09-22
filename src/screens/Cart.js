import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/Toolbar'
import { CommonActions } from '@react-navigation/native';
export const Cart = ({navigation}) =>{

   return(
     <>
     <Toolbar
     title={'Cart'}
     onIconPress={()=>{navigation.dispatch(CommonActions.goBack())}}
     showDrawer={false}
     showIcons={false}
     />
     <Text> 
       Cart
       
    </Text>
     
     </>
    
         )
}
export default Cart