import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
// var totalRating=0
// var totalNumber=0
export const RatingBar = ({navigation,item,totalRatingNumber}) =>{
    var totalRating= item.totalRating
    var totalNumber=totalRatingNumber
    function calWidth (){
        if(totalRating==0||totalNumber==0){
            return 0
        }else{
            var per = totalRating/totalNumber
            return per*40
        }
        
        }
   return(
     <>
     <View style={styles.ratingContainer}>

        <View style={styles.starContainer}>
                    <Text style={styles.starText}>
                       {item.star}
                    </Text>
                    <Icon
                    name={'star'}
                    size={15}
                    color={AppColors.primary}
                    />
        </View>
        <View style={styles.barContainer}>
            <View style={[styles.barContainer2,{width:wp(calWidth())}]}>
            
            </View>
        </View>
        <Text style={styles.numberText}>
            {item.totalRating}
        </Text>
     </View>
     
     </>
    
         )
}
export default RatingBar

const styles = StyleSheet.create({
    ratingContainer:{
        // marginTop:hp(1),
        paddingHorizontal:hp(1),
        // paddingVertical:wp(0.5),
        // justifyContent:'center',
        alignItems: 'center',
    //   borderWidth:0.5,
    //   borderBottomWidth:0.5,
    //   marginRight:wp(3),
      flexDirection:'row',
    //   backgroundColor:'red'
    },
    starContainer:{
        // marginRight:wp(2),
        // backgroundColor:AppColors.primary,
        // justifyContent:'center',
        alignItems: 'center',
        // width:wp(35),
        // borderRadius:10,
        flexDirection:'row',
        marginRight:wp(1),
        // paddingHorizontal:wp(2),
        // borderRightWidth:1,

        paddingVertical:hp(0.1)
    },
    starText:{
        ...material.body2,
        marginRight:wp(0.5)

    },
    barContainer:{
        // borderWidth:0.2,
        backgroundColor:'rgba(128,128,128,0.2)',
        height:hp(1.2),
        width:wp(40),
        borderRadius: 25,
    },
    barContainer2:{
        backgroundColor:AppColors.primary,
        height:hp(1.2),
        // width:wp(40),
        // width:calWidth(),

        borderRadius: 25,
    },
    numberText: {
        ...material.body2,
        marginLeft:wp(1)
    }
    
})