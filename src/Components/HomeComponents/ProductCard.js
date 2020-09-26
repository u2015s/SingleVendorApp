import React,{ Component, useState, useEffect,useContext} from 'react'
import {FlatList, Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
// const star = require('../../assests/star.png')
export const ProductCard = ({navigation,item}) =>{
// const item = {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",s
//       title: "The King of Drugs",
//       src:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
//       price:'1000',
//       MRP:'2000',
//       rating:3.5
// }


function calOff(item){
  // console.log(Number(item.MRP))
  var off = Number(item.MRP)-Number(item.price)
  var perOff = (off/Number(item.MRP))*100
  // console.log(perOff)
  return parseInt(perOff).toString() + "%"
}
function ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

// function renderItem({item}){
//   return(
 
// )

// }
   return(
     <>

    {/* <FlatList
    data={Data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2}
    /> */}
      <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProductDetails',{item:item})}}>
          <View style={styles.cardContainer}>
          <View style={styles.card}>
              {/* <Text>
                  Hello
              </Text> */}
              <Image
              resizeMode='cover'
              style={styles.cardImage}
              source={{uri: item.src}}
              // source={{uri: 'https://www.w3schools.com/w3css/img_lights.jpg'}}
              />
          </View>

          <View style={styles.titleView}>
              <Text style={styles.titleText} numberOfLines={1}>
                  {/* Book Title */}
                  {item.title}
              </Text>
          </View>

          <View style={styles.subtitleView}>
            {/* <View style={{backgroundColor:'red',paddingBottom:hp('-3%')}}> */}
                <Text style={styles.subtitleText}>
                    {"Rs "+item.price}
                </Text>
            {/* </View> */}
              {/* <View style={{flexDirection: 'row'}}> */}
                <Text style={styles.MRPText} >
                    {"Rs "+item.MRP}
                </Text>
                <Text style={styles.offText}>
                    {calOff(item)+' off'}
                </Text>
              {/* </View> */}
            
          </View>
          {/* <AirbnbRating /> */}
          {/* <AirbnbRating
        count={5}
        defaultRating={3}
        size={20}
        showRating={false}
        /> */}
        {/* <Rating
        // showRating
        // onFinishRating={this.ratingCompleted}
        type={'custom'}
        size={11}
        imageSize={20}
        // ratingBackgroundColor={'red'}
        // ratingBackgroundColor={'blue'}
        startingValue={item.rating}
        style={{ paddingVertical: 10, 
        // backgroundColor:'red',
        }}
        // readonly

        /> */}
        </View>
        </TouchableOpacity>

     </>
    
         )
}
export default ProductCard
const styles = StyleSheet.create({
    container:{
        flex:1
},
cardContainer:{
  alignItems:"center",
  backgroundColor:"#ECECEC",
  marginHorizontal:wp('2%'),
//   borderWidth:1,
  padding:hp('1%'),
//   borderRadius:10,
  width: wp('45%')

//   marginRight:wp('2%'),
//   marginLeft:wp('1%')

},

card:{
  // backgroundColor: 'blue',
  height:hp('28%'),
  width:wp('32%'),
  borderRadius:8,
  alignItems: 'center',
  justifyContent: 'center',
//   elevation:1,
},
heading:{
  fontSize:30,
  fontWeight: 'bold'
},
HView:{
  paddingLeft:wp('3%'),
  paddingTop:hp('2%'),
  paddingBottom:hp('1%'),
  flexDirection:'row',
  // backgroundColor:'blue',
  alignItems:'center'
},
listView:{
  paddingLeft:wp('2%'),

},
titleView:{
marginTop:hp('0.5%'),
justifyContent:'center',
alignItems:'center',
// backgroundColor:'red',
width:wp('32%')
},
titleText:{
    ...material.subheading
//   fontSize:14,
//   width: wp('40%')
},
cardImage:{
height:hp('28%'),
width:wp('32%'),
borderRadius:8,
},
subtitleText:{
...material.body2,
// fontSize:14,
// color:"black"
height:hp('3%'),
// backgroundColor:'yellow'
// paddingTop:hp('1%'),
},
subtitleView:{
  // marginTop:hp('0.5%'),
  // backgroundColor:'blue',
flexDirection:'row',
alignItems:'flex-end',
// width:wp('32%')
// height:wp('6%')
},
arrow:{
  // marginLeft:wp('50%')
  position: 'absolute', 
  left: wp('90%'),
  top:hp('3.5%')
},
MRPText:{
  ...material.caption,
  marginLeft:wp('2%'),
  textDecorationLine:'line-through',
  // color:'grey'
},
offText:{
  ...material.caption,
  marginLeft:wp('2%'),

  color:AppColors.primary,
}
})