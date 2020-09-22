import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/Toolbar'
import BottomNavigation from '../Components/BottomNavigation'
export const Home = ({navigation}) =>{
   const {logout} = useContext(AuthContext)
  function onIconPress(){
    console.log('pressed')
  }
   return(
     <>
     <Toolbar
     navigation={navigation}
     title={'Home'}
     onIconPress={()=>{navigation.openDrawer()}}
     showDrawer={true}
     showIcons={true}
     />
     <Text> 
       <Button
       onPress={() =>{ 
         console.log('helo') 
         logout()}}
       title='SignOUt'
       />
       
    </Text>
     <BottomNavigation/>
     </>
    
         )
}
export default Home