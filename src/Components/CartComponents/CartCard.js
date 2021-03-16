import React,{ Component, useState, useEffect,useContext} from 'react'
import {FlatList, Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
// import StarRating from '../ProductDetailsComponents/StarRating'
import StarRating from 'react-native-star-rating';
import { Button } from 'react-native-paper'

// const star = require('../../assests/star.png')
export const CartCard = ({navigation,item,removeItem,hideRemove,addQty,decQty,showButtons}) =>{
  const [countVal,setCountVal]= useState(item.Qty)
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

    function setValue(){
      
    if(countVal==1){
      setCountVal(1)
    }else{
      setCountVal(count=>{
        decQty(item.id,count-1) 
        return count-1
      })
      // setCountVal(count=>count-1)}
      
    }
  }
   return(
     <>   

  <View style={styles.cardContainer}>
     <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('ProductDetails',{item:item})}}>
            <View style={styles.card}>
              {/* <Text>
                  Hello
              </Text> */}
              <Image
              resizeMode='contain'
              style={styles.cardImage}
              source={{uri: item.src}}
              // source={{uri: 'https://peterengland.imgix.net/img/app/product/1/173084-435827.jpg?auto=format&w=412'}}
              />
          </View>

    </TouchableOpacity>
          
          
          <View style={styles.detialView}>
              <View style={styles.titleView}>
                  <Text style={styles.titleText}
                  numberOfLines={2}
                  >
                      {/* Book Title */}
                      {item.title}
                      {/* the kings of kings: saga 123 #%
                      the kings of kings: saga 123 #% */}

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
              <View style={styles.deliveryView}>
                <Text style={styles.deliveryText}>
                  Delivery By 6 Mar
                </Text>
              </View>

              <View style={styles.quantView}>
                <Text style={styles.quantText}>
                  Qty:
                </Text>
            
                <View style={styles.counterView}>
                  {/* {showButtons? */}
                  <TouchableOpacity style={styles.decButton} onPress={setValue}>
                  <Text style={styles.decText}>
                  ━
                  </Text>
                  </TouchableOpacity>
                  {/* :<></>
                  } */}
                  

                  <Text
                  style={styles.countVal}
                  >
                    {item.Qty}
                  </Text>

                  
                  {/* {showButtons? */}
                  <TouchableOpacity style={styles.decButton} onPress={() =>{
                    setCountVal(count=>{
                      addQty(item.id,count+1) 
                      return count+1
                    })
                    // console.log("count", countVal)
                    }}>
                      <Text style={styles.decText}>
                      +
                      </Text>
                  </TouchableOpacity>
                  {/* :<></>
                  } */}

                </View>
                
              </View>
              <View style={styles.starView}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.rating}
                    // selectedStar={(rating) => onStarRatingPress(rating)}
                    activeOpacity={1}
                    starSize={20}
                    starStyle={{color:AppColors.primary}}
                  />
              </View>
              {hideRemove?
              <></>
              :<Button mode="contained" onPress={() => {
                removeItem(item.id)
                    }}
                    style={styles.button}
                    color={AppColors.primary}
                    uppercase={false}
                    icon={'delete'}
                    // contentStyle={{fontSize:5}}
                    >
                      Remove
              </Button>}
              
          </View>


          
        
        </View>
   

     </>
    
         )
}
export default CartCard

const styles = StyleSheet.create({
    container:{
        flex:1
},
cardContainer:{
  // alignItems:"center",
  flexDirection:'row',
  backgroundColor:"#ECECEC",
  justifyContent: 'center',
  alignItems:"center",
//   borderWidth:1,
  padding:hp('1%'),
//   borderRadius:10,
  width: wp('100%'),
borderBottomWidth:0.3
//   marginRight:wp('2%'),
//   marginLeft:wp('1%')

},
detialView:{
justifyContent:'center',
// alignItems: 'center'
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
// alignItems:'center',
// backgroundColor:'red',
width:wp('65%')
},
titleText:{
    ...material.title
//   fontSize:14,
//   width: wp('40%')
},
cardImage:{
height:hp('25%'),
width:wp('28%'),
// borderRadius:8,
// backgroundColor:'white'
},
subtitleText:{
...material.subheading,
fontWeight: '700',
// fontSize:14,
// color:"black"
// height:hp('3%'),
// backgroundColor:'yellow'
// paddingTop:hp('1%'),
},
subtitleView:{
  // marginTop:hp('0.5%'),
  // backgroundColor:'blue',
flexDirection:'row',
alignItems:'center',
// width:wp('32%')
// height:wp('6%')
},
MRPText:{
  ...material.body1,
  marginLeft:wp('2%'),
  textDecorationLine:'line-through',
  // color:'grey'
},
offText:{
  ...material.body1,
  marginLeft:wp('2%'),

  color:AppColors.primary,
},
deliveryView:{
},
deliveryText:{
  ...material.body1

},
quantView:{
  flexDirection:'row',
  alignItems: 'center',
  marginTop:hp('0.5%'),
},
quantText:{
  ...material.body2
},
decText:{
  fontSize:14,
  fontWeight:'bold'
},
decButton:{
  backgroundColor:AppColors.primary,
  width:wp('8%'),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:25
},
counterView:{
  marginHorizontal:wp(1),
  flexDirection:'row',
},
countVal:{
  marginHorizontal:wp(2)
},
button:{
  // elevation:0,
  // height:hp(4),
  width:wp(43),
  marginTop:hp(1),
  // padding: wp('-4%')
  // marginHorizontal:wp(4)
  // color:AppColors.primary,
  // borderRadius:5
},
starView:{
  width:wp(25),
  marginTop:hp(1)
  // backgroundColor:'red'
}
})
