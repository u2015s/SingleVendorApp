import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import RatingBar from './RatingBar'
export const RatingContainer = ({navigation,item}) =>{

    function callTotalrating(star){
        var count=0
        item.reviews.forEach((item)=>{
            if(item.rating==star){
                count=count+1
            }
        })
        return count
    }
const ratingObj=[{
    star:5,
    totalRating:callTotalrating(5),
},
{
    star:4,
    totalRating:callTotalrating(4),
},{
    star:3,
    totalRating:callTotalrating(3),
},{
    star:2,
    totalRating:callTotalrating(2),
},{
    star:1,
    totalRating:callTotalrating(1),
},]
   return(
     <>
     <View style={styles.ratingContainer}>

        <View style={styles.starContainer}>
            <View style={styles.starRatingContainer}>
                <Text style={styles.starText}>
                        {item.rating}
                    </Text>
                    <Icon
                    name={'star'}
                    size={25}
                    color={'black'}
                    />
            </View>
                   
            <View style={styles.ratingAndReviewContainer}>
                <Text style={styles.bothText}>
                        {item.totalRatings + " Ratings"} & {"\n"+item.totalReviews + " Reviews"}
                </Text>
            </View>
        </View>
        
        <View
        style={{
          borderBottomColor: 'black',
          borderRightWidth:0.5,
          marginHorizontal:wp(1),
          height:hp(18)
        }}
         />
        <View style={styles.allRatings}>
            {/* <Text>
                hello
            </Text> */}
            {

            ratingObj.map((obj,index)=>(
                <RatingBar
                item={obj}
                totalRatingNumber={item.totalRatings}
                />
            ))
            
            }
        {/* <RatingBar
                // ratingObj={ratingObj}
                /> */}
        </View>
        
     </View>
     
     </>
    
         )
}
export default RatingContainer

const styles = StyleSheet.create({
    ratingContainer:{
        marginTop:hp(1),
        paddingHorizontal:hp(1),
        paddingVertical:wp(0.5),
        // justifyContent:'center',
    //   borderWidth:0.5,
    //   borderBottomWidth:0.5,
      marginRight:wp(3),
      flexDirection:'row',
    //   backgroundColor:'red'
    },
    starContainer:{
        // marginRight:wp(2),
        // backgroundColor:AppColors.primary,
        justifyContent:'center',
        alignItems: 'center',
        width:wp(32),
        // borderRadius:10,
        // flexDirection:'row',
        // paddingHorizontal:wp(2),
        // borderRightWidth:1,

        paddingVertical:hp(0.1)
    },
    starText:{
        ...material.display1,
        marginRight:wp(0.5),
        color:'black'
    },
    allRatings:{
        // backgroundColor:'red',
        width:wp(55),

    },
    starRatingContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    ratingAndReviewContainer:{
        justifyContent:'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    bothText:{
        ...material.subheading,
        lineHeight:22
    }
    
})