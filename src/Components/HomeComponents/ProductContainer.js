import React,{ Component, useState, useEffect,useContext} from 'react'
import {FlatList,Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import ProductCard from './ProductCard'
import { Button } from 'react-native-paper'
import {ProductContext} from '../ProductProvider'

export const ProductContainer= ({navigation}) =>{
  const {Product}=useContext(ProductContext)
  // console.log(Product[0].comments)
  const Data=Product
//   const Data = [{
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//   title: "The King of Drugs",
//   src:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
//   price:'1000',
//   MRP:'2000',
//   totalRatings:5,
//   totalReviews:5
//   },
//   {
//   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//   title: "Stolen Things",
//   src:'https://images.penguinrandomhouse.com/cover/9781524744922',
//   price:'3000',
//   MRP:'5000',
//   totalRatings:2000,
//   totalReviews:1500,
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6321",
//     title: "Stolen Things",
//     src:'https://images.penguinrandomhouse.com/cover/9781524744922',
//     price:'2000',
//     MRP:'5000',
//     totalRatings:2000,
//     totalReviews:1500
//     },
//     {
//       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "The King of Drugs",
//     src:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
//     price:'1000',
//     MRP:'2000',
//     totalRatings:2000,
//     totalReviews:1500
//     },
// ]
   return(
     <>
     <View style={styles.productView}>
     <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Top Products
        </Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}
        style={styles.button}
        color={AppColors.primary}
        >
            View All
        </Button>
     </View>
    
     <View style={styles.productContainer}>

       <FlatList
        data={Data}
        renderItem={({item})=>(
        <ProductCard
        navigation={navigation}
          item={item}
          />
          )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
       {/* {Data.map((item,index)=>(
        <ProductCard
        item={item}
        key={index}
        />


       ))} */}
      
      
    </View>
     </View>
     </>
    
         )
}
export default ProductContainer
const styles = StyleSheet.create({
    productContainer: {
      // backgroundColor:'red',
      paddingVertical:hp('2%'),
      flexDirection:'row',
      justifyContent:'center',
    },
    heading:{
      ...material.headline
    },
    headingContainer:{
      paddingTop:hp('2%'),
    //   paddingLeft:wp("5%"),
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    productView:{
      // backgroundColor:'yellow',
      elevation:2
    },
    button:{
        marginLeft:wp('25%'),
        elevation:0,
        // color:AppColors.primary,
        borderRadius:5
    }
  })