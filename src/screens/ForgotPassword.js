import React,{ Component, useState, useEffect} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import { validateAll } from 'indicative/validator';

export const Fpassword = () =>{
   const [email,setEmail]=useState("")
   const [error,setError]=useState({})

   function resendLink(){
      console.log(email)
      const rules = {
         email: 'required|email',
     };
   
     const data = {
         email: email,
     };
   
     const messages = {
         required: field => `${field} is required`,
         'email.email': 'Please enter a valid email address',
     };
   
     validateAll(data, rules, messages)
         .then(() => {
             console.log(password)
             setLoading(true)
             setTimeout(function(){ 
               Alert.alert("You are Signed in sucessfully"); 
               console.log('success sign in');
             setLoading(false)
           }, 3000);
         })
         .catch(err => {
             const formatError = {};
             console.log(err)
             err.forEach(err => {
                 formatError[err.field] = err.message;
             });
             setError(formatError);
             
             // console.log(formatError)
             
         });
   }
useEffect(()=>{
   console.log(error)
   Object.keys(error).length?
             Alert.alert(error[Object.keys(error)[0]])
                :null
},[error])
   return(
      <SafeAreaView style={styles.container}>
      <View style={styles.headtext}>
          <Text style={material.title}>
              Enter Email to send the reset link
          </Text>
      </View>
      <View style={styles.contactInputView}>

      <TextInput
      style={styles.contactInput}
      onChangeText={setEmail}
      />
      </View>
      <View style={styles.buttonContainer}>

      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={()=>{resendLink()}}
        >
            <Text style={styles.buttonText}>Send reset Link</Text>
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
 },
 buttonText:{
    ...material.button
 }
})
export default Fpassword