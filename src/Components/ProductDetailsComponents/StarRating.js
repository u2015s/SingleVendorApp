import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

export const StarRatingComponent = ({navigation,item,containerStyle}) =>{
  const [starCount,setStartCount]= useState(2.7)
  function onStarRatingPress(rating) {
    
    setStartCount(rating)
  }
   return(
     <>
     <View style={styles.commentContainer}>
     <StarRating
        disabled={true}
        maxStars={5}
        rating={starCount}
        selectedStar={(rating) => onStarRatingPress(rating)}
        activeOpacity={1}
        starSize={20}
        starStyle={{color:AppColors.primary}}
        containerStyle={containerStyle}	
      />

     </View>
     
     </>
    
         )
}
export default StarRatingComponent

const styles = StyleSheet.create({
    
})