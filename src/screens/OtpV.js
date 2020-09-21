import React,{ Component, useState, useEffect,useRef} from 'react'
import {Alert,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
// import 'react-phone-number-input/style.css'
import AppColors from '../../assests/AppColor'

import Countrypicker from '../Components/CountryPicker'
export const OtpV = ({navigation}) =>{
    const [value, setValue] = useState('')
    const [countryCode,setCountryCode]= useState('91')
    function countryCodeset(val){
        setCountryCode(val)
        console.log(val)
    }
    function sendOTP(){
        // console.log(countryCode+value)
        var number = countryCode+value
        if(value){
            if(value.length==10){
                navigation.navigate('OtpV2',{number})

            }else{
                Alert.alert("Enter valid mobile Number")

            }
        }else{
            Alert.alert("Please Enter your mobile Number")
        }
    }
   return(
    <SafeAreaView style={styles.container}>
        <View style={styles.headtext}>
            <Text style={material.title}>
                For Verification Enter your Mobile Number
            </Text>
        </View>
        <View style={styles.contactInputView}>

        <Countrypicker
        sendCountryCode={countryCodeset}
        />
        
        <TextInput
        style={styles.contactInput}
        keyboardType={'numeric'}
        maxLength={10}
        onChangeText={setValue}
        />
        
        </View>
        <View style={styles.buttonContainer}>

        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={()=>{sendOTP()}}
          >
              <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
    </SafeAreaView>
         )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"

    },
headtext:{
marginTop:hp("10%")
},
contactInputView:{
    // backgroundColor:'red',
    // borderWidth:1,
    flexDirection:'row',
    alignItems:'center'
},
contactInput:{
    borderBottomWidth:1,
    width:wp('40%'),
    height:hp('6%'),
    paddingLeft:wp("1%"),
    // textAlign:'center'
},
button:{
    // width:wp("1%")
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    backgroundColor:AppColors.primary,
    height:hp("6%"),
    width:wp("50%"),
    elevation: 4
  },
  buttonContainer:{
      marginTop:hp("2%")
  }
})
export default OtpV 