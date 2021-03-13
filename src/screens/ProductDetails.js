import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import ProductImageList from '../Components/ProductDetailsComponents/ProductImageList'
import ReviewContainer from '../Components/ProductDetailsComponents/ReviewContainer'
import RatingContainer from '../Components/ProductDetailsComponents/RatingContainer'

import { CommonActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Share from "react-native-share";
import ReadMore from 'react-native-read-more-text';
import {ProductContext} from '../Components/ProductProvider'
import { Button } from 'react-native-paper'

export const ProductDetails = ({navigation,route}) =>{
    // console.log(route.params.item)
    const {Product}=useContext(ProductContext)
    const [heartIcon,setHeartIcon]=useState(true)
    var item
   
    function calReviews(item){
      var reviews=0
      item.comments.forEach((item)=>{
        if(item.review){
          reviews=reviews+1
        }
      })
      return reviews
     
    }
    function calRating(item){
      var rating=0
      var num=0
      item.comments.forEach((item)=>{
          rating=rating+item.starsGiven
          num=num+1
      })
      return (rating/num)
    }
    Product.forEach((prod)=>{
      item = prod
      if(prod.id==route.params.item.id){
          prod.moreimages=[
            item.src,
            "https://i.pinimg.com/originals/8a/56/a9/8a56a9922e8339f7be5536dc2cccc79d.png",
            "https://blog.bookbaby.com/wp-content/uploads/2015/11/Perceptions.jpg"
          ]
          prod.description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          prod.comments=[{
            "buyerName":"Akash Kumar Singh",
            "reviewTitle":"Nice Product!!",
            "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledssss",
            "time":"14 Dec 2020",
            "starsGiven":5,
            "images":[
              "https://miro.medium.com/max/9096/0*8CyXXWXRHJLkn72_.",
              "https://images.financialexpress.com/2018/10/review.jpg"
            ],
          },
          {
            "buyerName":"Utkarsh Singh",
            "reviewTitle":"Nice Product!!",
            "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledssss",
            "time":"12 Aug 2020",
            "starsGiven":4,
            "images":[
              "https://miro.medium.com/max/9096/0*8CyXXWXRHJLkn72_.",
              "https://images.financialexpress.com/2018/10/review.jpg"
            ]
          },
          {
            "buyerName":"Arnab Goswami",
            "reviewTitle":"Nice Product!!",
            "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledssss",
            "time":"12 Aug 2020",
            "starsGiven":5,
            "images":[
              "https://miro.medium.com/max/9096/0*8CyXXWXRHJLkn72_.",
              "https://images.financialexpress.com/2018/10/review.jpg"
            ]
          },
          {
            "buyerName":"Arnab Goswami",
            "reviewTitle":"Nice Product!!",
            "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledssss",
            "time":"12 Aug 2020",
            "starsGiven":5,
            "images":[
              "https://miro.medium.com/max/9096/0*8CyXXWXRHJLkn72_.",
              "https://images.financialexpress.com/2018/10/review.jpg"
            ]
          },
          {
            "buyerName":"Arnab Goswami",
            "reviewTitle":"Nice Product!!",
            "review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledssss",
            "time":"12 Aug 2020",
            "starsGiven":1,
            "images":[
              "https://miro.medium.com/max/9096/0*8CyXXWXRHJLkn72_.",
              "https://images.financialexpress.com/2018/10/review.jpg"
            ]
          }]
          prod.totalRatings=prod.comments.length,
          prod.totalReviews= calReviews(prod),
          prod.rating=calRating(prod)
      }
    })
    // console.log(Product[0].comments)
    
    

    function calOff(item){
      // console.log(Number(item.MRP))
      var off = Number(item.MRP)-Number(item.price)
      var perOff = (off/Number(item.MRP))*100
      // console.log(perOff)
      return parseInt(perOff).toString() + "%"
    }
    function onHeartPress(){
      setHeartIcon(!heartIcon)
    }
    function onSharePress(){
      const options={
        meessage:'share product',
        title:item.title
      }
      console.log("share")
        Share.open(options)
        .then((res) => { console.log(res) })
        .catch((err) => { err && console.log(err); });
    }
    function _renderTruncatedFooter(handlePress){
      return (
        <Text style={{color: AppColors.primary, marginTop: 5}} onPress={handlePress}>
          Read more
        </Text>
      );
    }
   
    function _renderRevealedFooter(handlePress){
      return (
        <Text style={{color: AppColors.primary, marginTop: 5}} onPress={handlePress}>
          Show less
        </Text>
      );
    }
   
    function _handleTextReady(){
      // ...
    }
   return(
     <>
     <ScrollView
     contentContainerStyle={styles.container}
     >
     <Toolbar
     title={'Product Details'}
     onIconPress={()=>{navigation.dispatch(CommonActions.goBack())}}
     showDrawer={false}
     showIcons={false}
     />
     <View style={styles.container}>
       {/* <View style={styles.imageContainer}> */}
       <ProductImageList
              data={item.moreimages}
              />
      <View style={styles.iconContainer}>
        <Icon.Button
        name={heartIcon?"heart-outline":'heart-sharp'}
        size={25}
        color={AppColors.primary}
        style={styles.iconStyle}
        backgroundColor={'transparent'}
        underlayColor="transparent" 
        onPress={onHeartPress}
        />
        <Icon.Button
        name={"share-social-sharp"}
        size={25}
        color={AppColors.primary}
        style={styles.iconStyle}
        backgroundColor={'transparent'}
        underlayColor="transparent" 
        onPress={onSharePress}

        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {item.title}
        </Text>
        <View style={styles.priceContainer}>
            <Text style={styles.subtitleText}>
                    {"Rs "+item.price}
                </Text>
                <Text style={styles.MRPText} >
                    {"Rs "+item.MRP}
                </Text>
                <Text style={styles.offText}>
                    {calOff(item)+' off'}
                </Text>   
        </View>
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          marginHorizontal:wp(-3)

        }}
         />
        <View style={styles.descriptionContainer}>
          
          <Text style={styles.descriptionTitle}>
              Description
          </Text>
            {/* <Text style={styles.descriptionText}>
              {item.description}
            </Text> */}
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
              <Text style={styles.descriptionText}>
              {item.description}

              </Text>
            </ReadMore>
        </View>
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          marginHorizontal:wp(-3)
          // width: wp('100%')
        }}
         />
         
      </View>
      <View style={styles.ratingsContainer}> 
            <Text style={styles.ratingsText}>
              Ratings & Reviews
            </Text>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                marginHorizontal:wp(-3),
                marginTop:hp(1)
              }}
            />
            <RatingContainer
            item={item}
            />
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                marginHorizontal:wp(-3),
                marginTop:hp(1)
              }}
            />
          {
            item.comments.map((item,index)=>(
              <>
                <ReviewContainer
              item={item}
              key={index}
              />
              <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                marginHorizontal:wp(-3)

              }}
              />
              </>
            
            ))
          }
            
      </View>
       {/* </View> */}
       
     </View>
     </ScrollView>
      <View style={styles.buttonContainer}>

        <Button mode="contained" onPress={() => console.log('Pressed')}
        style={styles.button}
        color={AppColors.primary}
        >
          Buy Now
        </Button>

        <Button mode="contained" onPress={() => console.log('Pressed')}
        style={styles.button}
        color={AppColors.primary}
        >
          Add to Cart
        </Button>
      </View>
     
     </>
    
         )
}
export default ProductDetails

const styles = StyleSheet.create({
container:{
  flexGrow: 1
},
imageContainer:{
// backgroundColor:"red",
alignItems:"center"
},
cardImage:{
  height:hp('40%'),
  width:wp('45%'),
  borderRadius:8,
  },
  textContainer: {
    marginTop:hp("2%"),
    paddingHorizontal:wp("3%")
  },
  titleText:{
    ...material.headline,
    
  },
  priceContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
    marginBottom:hp('1%')
  },
  subtitleText:{
    ...material.title,
    // fontSize:14,
    // color:"black"
    // height:hp('2%'),
    // paddingTop:hp('1%'),
    },
    MRPText:{
      ...material.subheading,
      marginLeft:wp('2%'),
      textDecorationLine:'line-through',
      // color:'grey'
    },
    offText:{
      ...material.subheading,
      marginLeft:wp('2%'),
    
      color:AppColors.primary,
    },
    descriptionContainer:{
      marginTop:hp("1%"),
      marginBottom:hp(1),
    },
    descriptionTitle:{
      ...material.body1,
      fontSize:18,
      // fontWeight:'bold'
    },
    descriptionText:{
      ...material.body1,
      // lineHeight:20,
      textAlign:'justify'
    },
    iconContainer:{
      position: 'absolute',
      marginRight:"auto",
      right:0
    },
    ratingsContainer:{
      marginTop:hp(1),
      paddingLeft:wp(3),
     paddingBottom:hp(2)
    },
    ratingsText:{
      ...material.body1,
      fontSize:18,
    },
    buttonContainer:{
      backgroundColor:AppColors.white,
      elevation:10,
      height:hp(8),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
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