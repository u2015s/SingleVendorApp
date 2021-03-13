import React,{ Component, useState, useEffect,useContext} from 'react'
import {FlatList, Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';

export const PriceDetailCard = ({navigation,CartItems,setPrice}) =>{
// const [items,setitems] = useState(CartItems)
const [totalPrice, setTotalPrice]= useState(0)
const [discountPrice, setDiscountPrice]= useState(0)
const [deliveryCharge, setDeliveryCharge]= useState(40)

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

useEffect(() => {
  var totalPrice = 0
  var discountPrice = 0
  CartItems.forEach((item)=>{
      totalPrice += item.MRP*item.Qty
      discountPrice +=  (item.MRP - item.price)*item.Qty 
  })
  setTotalPrice(totalPrice)
  setDiscountPrice(discountPrice)
  setPrice(totalPrice-discountPrice+deliveryCharge)
})


   return(
     <>
     {/* {console.log("44")} */}
<View style={styles.container}>
    <View style={styles.headingView}>
        <Text style= {styles.headingText}>
            Price Details
        </Text>
    </View>
    <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          marginHorizontal:wp(-3),
          marginVertical:hp(0.5)
        }}
         />
    <View style={styles.detialsView}>
        <Text style= {styles.detialText}>
            Total Price Of Items
        </Text>

        <Text style= {styles.PriceText}>
           {totalPrice}
        </Text>
    </View>
    <View style={styles.detialsView}>
        <Text style= {styles.detialText}>
            Discount
        </Text>

        <Text style= {styles.PriceText}>
        -{discountPrice}
        </Text>
    </View>
    <View style={styles.detialsView}>
        <Text style= {styles.detialText}>
            Delivery Charges
        </Text>

        <Text style= {styles.PriceText}>
            {deliveryCharge}
        </Text>
    </View>
    <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          marginHorizontal:wp(-3),
          marginVertical:hp(0.5)
        }}
         />
    <View style={styles.detialsView}>
        <Text style= {{...material.title}}>
           Total Amount
        </Text>

        <Text style= {{...material.title}}>
            {totalPrice-discountPrice+deliveryCharge}
        </Text>
    </View>
</View>
  
     </>
    
         )
}
export default PriceDetailCard
const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'white',
        height:hp(30),
        padding:hp('1%'),
        shadowRadius:30
},
headingText:{
  ...material.title,
  color:'grey',

},
headingView:{

},
detialsView:{
flexDirection:'row',
alignItems: 'center',
justifyContent: 'space-between'
},
detialText:{
...material.subheading,
fontWeight:'600',
},
PriceText:{
    ...material.subheading,

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