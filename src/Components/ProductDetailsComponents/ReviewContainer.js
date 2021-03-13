import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
export const ReviewContainer = ({navigation,item}) =>{

   return(
     <>
     <View style={styles.commentContainer}>
        <View style={styles.thirdContainer}>
            <View style={styles.starContainer}>
                <Text style={styles.starText}>
                    {item.starsGiven}
                </Text>
                <Icon
                name={'star'}
                size={13}
                color={'black'}
                />
            </View>
            <Text style={styles.title}>
                {item.reviewTitle}
            </Text>
        </View>
        <View style={styles.SecondContainer}>
            <Text style={styles.reviewText}>
                {item.review}
            </Text>
        </View>
        <View style={styles.firstContainer}>
            <Text style={styles.titleContainer}>
                {item.buyerName}
            </Text>
            <Text style={styles.timeTitle}>
                {item.time}
            </Text>
        </View>

     </View>
     
     </>
    
         )
}
export default ReviewContainer

const styles = StyleSheet.create({
    commentContainer:{
        marginTop:hp(1),
        height:hp(18),
        paddingHorizontal:hp(1),
        paddingVertical:wp(0.5),
    //   borderWidth:0.5,
    //   borderBottomWidth:0.5,
      marginRight:wp(3),
    //   backgroundColor:'white'
    },
    firstContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp(0.5)
    },
    titleContainer:{
        ...material.caption,
        marginRight:wp(1),
        color:'grey'
    },
    timeTitle:{
    ...material.caption,
    // backgroundColor:'red',
    // paddingBottom:hp(-10)
    fontSize:12
    },
    SecondContainer:{

    },
    reviewText:{
        ...material.caption,
        color:'black'
    },
    thirdContainer:{
        marginTop:hp(0.5),
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
      ...material.subheading,
        fontWeight:'bold'
    //   color:'black'
    },
    starContainer:{
        marginRight:wp(2),
        backgroundColor:AppColors.primary,
        justifyContent:'center',
        alignItems: 'center',
        width:wp(12),
        borderRadius:10,
        flexDirection:'row',
        // paddingHorizontal:wp(2),
        paddingVertical:hp(0.1)
    },
    starText:{
        marginRight:wp(0.5)
    }
})