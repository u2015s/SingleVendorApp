import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import { Button } from 'react-native-paper'

import { CommonActions } from '@react-navigation/native';
export const CartButton = ({navigation,totalPrice, onPressFn, ButtonText}) =>{

   return(
     <>
     <View style={styles.buttonContainer}>
          <View style={styles.totalPriceView}> 
                 <Text style={{...material.headline,fontWeight:'bold'}}>
                 Rs {totalPrice}
                 </Text>
          </View>
   
          <View>
             <Button mode="contained" onPress={() => {
               // console.log(item)
               // updateCart(item.id)
               onPressFn()
             }}
             style={styles.button}
             color={AppColors.primary}
             >

             {ButtonText}
             </Button>
          </View>
         
         </View>
     
     </>
    
         )
}
export default CartButton

const styles = StyleSheet.create({
    totalPriceView:{
      // backgroundColor:'red'
      marginHorizontal:wp(4)
    },
    buttonContainer:{
      backgroundColor:AppColors.white,
      elevation:10,
      height:hp(8),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      // backgroundColor:'red'
    },
    button:{
      // elevation:0,
      // height:hp(6),
      width:wp(40),
      marginHorizontal:wp(4)
      // color:AppColors.primary,
      // borderRadius:5
  }
  })