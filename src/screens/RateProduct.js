import React,{ Component, useState, useEffect,useContext} from 'react'
import {KeyboardAvoidingView,Alert,ActivityIndicator ,Platform,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
// import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import { Button } from 'react-native-paper'
// import StarRating from '../Components/ProductDetailsComponents/StarRating'
import StarRating from 'react-native-star-rating';
import firestore from '@react-native-firebase/firestore';

export const RateProduct = ({navigation}) =>{
    const [review,setReview]=useState('')
    const [oreview,setoReview]=useState('')

    const [starCount,setStartCount]= useState(0)
    const [ratingText,setRatingText]= useState('Give a Rating')
    function onStarRatingPress(rating) {
      
      setStartCount(rating)
      console.log(rating)
      if(rating>4){
        setRatingText('Excellent')
      }else if ( rating>3&&rating<4){
        setRatingText('Good')
      }else if ( rating>2&&rating<3){
        setRatingText('Average')
      }else if ( rating>1&&rating<2){
        setRatingText('Poor')
      }else if ( rating<1){
        setRatingText('Very Poor')
      }
    }
    function submitRating(){
        // var data= {
        //     buyerName:"Sam Bill",
        //     rating:1,
        //     review:'',
        //     // review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //     title: "Don't Buy!!"
        //     }
        // firestore()
        // .collection('products')
        // .doc('Uv2d5NFiKHujaN45uY3A')
        // .collection('reviews')
        // .doc()
        // .set(data)
        // .then((res)=>{
        //     // console.log(res.data())
        //     console.log(res)
        // })
        // .catch(e=>{console.log(e)});
      }
    
   return(
     <>
     <Toolbar
     title={'Rate Product'}
     onIconPress={()=>{navigation.dispatch(CommonActions.goBack())}}
     showDrawer={false}
     showIcons={false}
     navigation={navigation}
     />
     {/* <KeyboardAvoidingView
     style={{flex: 1}} 
     behavior={Platform.OS === "ios" ? "padding" : "height"}
    //  keyboardVerticalOffset={65}
     
     > */}
     <ScrollView
    //  style={{flex: 1}}
     contentContainerStyle={{ flexGrow: 1 }}
     >
        <View style={styles.containerView}>
                <View style={styles.starContainerView}>
                    <Text style={{...material.title}}>
                        Give Rating to the Product
                    </Text>

                    <View style={styles.starView}>
                        <StarRating
                            // disabled={true}
                            maxStars={5}
                            halfStarEnabled={true}
                            rating={starCount}
                            selectedStar={(rating) => onStarRatingPress(rating)}
                            activeOpacity={1}
                            starSize={45}
                            starStyle={{color:AppColors.primary}}
                            containerStyle={styles.containerStyle}	
                        />
                        
                        <Text style={{...material.headline, fontStyle:'italic'}}>
                            {ratingText}
                        </Text>

                    </View>
                    
                </View>
                <View style={styles.reviewView}>
                    <Text style={{...material.title}}>
                        Write a one word Review
                    </Text>
                    
                    <TextInput
                    style={styles.inputStyle2}
                    onChangeText={setoReview}
                    />
                </View>
                <View style={styles.reviewView}>
                    <Text style={{...material.title}}>
                        Write a  detail Review
                    </Text>
                    
                    <TextInput
                    style={styles.inputStyle}
                    numberOfLines={8}
                    onChangeText={setReview}
                    />
                </View>
                {/* <View style={styles.buttonView}>
                   
                </View> */}
            <Button mode="contained" onPress={() => {
                            submitRating()
                        }}
                        style={styles.button}
                        color={AppColors.primary}
                        >
                            Submit
            </Button>
            </View>
            
     </ScrollView>
            
     {/* </KeyboardAvoidingView> */}
     
     
     </>
    
         )
}
export default RateProduct

const styles = StyleSheet.create({
    containerView:{
        flex:1,
        padding:wp(2),
        // justifyContent:'space-between',
        // backgroundColor:'red',
        // height:'100%'
    },
    starContainerView:{
        // backgroundColor:'red',
        height:hp(20),
    },
    reviewView:{
        // height:hp(20)
marginVertical:hp(1)
    },
    inputStyle:{
        ...material.subheading,
        marginTop:hp(1),
        backgroundColor:'white',
        textAlignVertical:'top',
        padding:wp(3)
    },
    button:{
        marginTop:hp(13),
        // marginBottom:hp(1),
        // position: 'absolute',
        // bottom:10,
        width:wp(97),
        alignSelf:'center',

    },
    buttonView:{

    },
    containerStyle:{
        width:wp(95),
        marginBottom:hp(2)
    },
    starView:{
        marginTop:hp(2),
        alignItems:'center',
    },
    inputStyle2:{
        ...material.subheading,
        marginTop:hp(1),
        backgroundColor:'white',
        padding:wp(3)
    },
})