import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,BackHandler,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper'
import { Hoshi } from 'react-native-textinput-effects';
import { useFocusEffect } from '@react-navigation/native';
export const EditProfileInfo = ({navigation,route}) =>{
const {user}= useContext(AuthContext)
const [userData,setuserData] = useState({...route.params.userData})
   useEffect(() => {
       console.log(userData)
    //    setuserData
   },[])
   function checkChange(){
       if((userData.name===route.params.userData.name)&&(userData.email===route.params.userData.email)){
        Alert.alert(
            'Error', 
            'You have not made any changes to your profile'
            )
           return true
       }else if((userData.name==='')||(userData.email==='')){
        Alert.alert(
            'Error', 
            'Name or email cannot be empty'
            )
            return true
       }else{
           return false
       }
   }
   function updateProfile(){
    if(checkChange()){
        console.log("back")
        console.log(userData)

    }else{
         console.log(userData)
         firestore()
        .collection('users')
        .doc(user.uid)
        .update({
            name: userData.name,
            email: userData.email
        })
        .then((res)=>{
            // console.log(res.data())
            // setuserData(res.data())

            navigation.goBack()
            Alert.alert(
                'Update Successful', 
                'Your profile has been updated successfully')
        })
        .catch(e=>{console.log(e)});
        //  navigation.dispatch(CommonActions.goBack())
       
    }
    }
 function handleBack(){
     if((userData.name===route.params.userData.name)&&(userData.email===route.params.userData.email)){
        navigation.goBack()
     }else{
        Alert.alert("Warning",
        "Your profile contains unsaved changes",
        [
           {
             text: 'Cancel',
             onPress: () => console.log('Ask me later pressed'),
             style: 'cancel'
           },
           {
             text: 'GO Back',
             onPress: () => (navigation.goBack()),
                   },
         ])
     }
     
 }

 useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (checkChange()) {
          handleBack()
          return true;
    }else{
        handleBack()
        return true
    }
        
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [userData])
  );

// useEffect(() => {
//     BackHandler.addEventListener("hardwareBackPress",  handleBack());

//     return () =>
//       BackHandler.removeEventListener("hardwareBackPress",  handleBack());
//   }, []);

   return(
     <>
     <Toolbar
     title={'Edit Profile Info'}
     onIconPress={()=>{handleBack()}}
     showDrawer={false}
     showIcons={false}
     navigation={navigation}
     />
     <View style={styles.container}>
            <View style={styles.profileView}>
                <Text style={{...material.title}}>
                   Edit Profile Information
                </Text>
            </View>
            <View>

            <Hoshi
                label={'Name'}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                backgroundColor={'#F9F7F6'}
                defaultValue={userData.name}
                style={styles.TextInput}
                onChangeText={(name)=>{
                    setuserData((oldData)=>{
                    oldData.name=name
                    return oldData
                })}}
            />

            <Hoshi
                label={'Email'}
                defaultValue={userData.email}
                // value={userData.email}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                onChangeText={(email)=>{
                    setuserData((oldData)=>{
                    oldData.email=email
                    return oldData
                })}}
                backgroundColor={'#F9F7F6'}
            />
            </View>
            <Button 
                    mode="contained" 
                    onPress={()=>{updateProfile()}}
                    style={[styles.button,styles.passwordButton]}
                    color={AppColors.primary}
                    >
                    update Profile Info
            </Button>
    </View>
    
     </>
    
         )
            }
export default EditProfileInfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor: 'red',
        padding:wp(2)
    },
    profileView:{
        // flex:1,
        // backgroundColor:'red',
        // padding:hp(1),
        width:wp('100%'),
        // height:hp(12),
        // borderWidth:1
    },
    infoView:{
        flexDirection:'row',
        // backgroundColor:'red',
        // justifyContent:'space-around'
    },
    addressView:{

    },
    button:{
        width:wp(97),
        alignSelf:'center',
        marginVertical:hp(1),
        // marginTop:hp(1)
    },
    passwordButton:{
        // alignSelf:'baseline'
        position: 'absolute',
        bottom:0,
    },
    TextInput:{
        marginVertical:hp(2)
    }
})