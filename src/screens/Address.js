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
export const Address = ({navigation,route}) =>{
const {user}= useContext(AuthContext)
const [address,setAddress] = useState({})
   
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
   function addAddress(){
       console.log(address)
    // if(checkChange()){
    //     console.log("back")
    //     console.log(userData)

    // }else{
    //      console.log(userData)
         firestore()
        .collection('users')
        .doc(user.uid)
        .update({
            address: address,
        })
        .then((res)=>{
            // console.log(res.data())
            // setuserData(res.data())
            navigation.goBack()
            Alert.alert(
                'Successful', 
                'Your Address is added Sucessfully')
        })
        .catch(e=>{console.log(e)});
       
    }
    // }
 function handleBack(){
    //  if((userData.name===route.params.userData.name)&&(userData.email===route.params.userData.email)){
        navigation.goBack()
    //  }else{
    //     Alert.alert("Warning",
    //     "Your profile contains unsaved changes",
    //     [
    //        {
    //          text: 'Cancel',
    //          onPress: () => console.log('Ask me later pressed'),
    //          style: 'cancel'
    //        },
    //        {
    //          text: 'GO Back',
    //          onPress: () => (navigation.goBack()),
    //                },
    //      ])
    //  }
     
 }

//  useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         if (checkChange()) {
//           handleBack()
//           return true;
//     }else{
//         handleBack()
//         return true
//     }
        
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () =>
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//     }, [userData])
//   );

// useEffect(() => {
//     BackHandler.addEventListener("hardwareBackPress",  handleBack());

//     return () =>
//       BackHandler.removeEventListener("hardwareBackPress",  handleBack());
//   }, []);

   return(
     <>
     <Toolbar
     title={'Set Delivery Address'}
     onIconPress={()=>{handleBack()}}
     showDrawer={false}
     showIcons={false}
     navigation={navigation}
     />

     <ScrollView>

     <View style={styles.container}>
            <View style={styles.profileView}>
                <Text style={{...material.title}}>
                 Add an address for delivery
                </Text>
            </View>
        <View>
            <Hoshi
                label={'Name'}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                // defaultValue={navigation.route.userData.address?userData.address.name:""}
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                backgroundColor={'#F9F7F6'}
                // defaultValue={userData.name}
                style={styles.TextInput}
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.name=val
                    return oldData
                })}}
            />
            <Hoshi
            label={'Mobile No.'}
            // this is used as active border color
            borderColor={AppColors.primary}
            // active border height
            borderHeight={3}
            inputPadding={16}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={'#F9F7F6'}
            // defaultValue={userData.name}
            style={styles.TextInput}
            onChangeText={(val)=>{
                setAddress((oldData)=>{
                oldData.mobile=val
                return oldData
            })}}
        />
            <Hoshi
                label={'House No, Building No'}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                backgroundColor={'#F9F7F6'}
                // defaultValue={userData.name}
                style={styles.TextInput}
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.house=val
                    return oldData
                })}}
            />

            <Hoshi
                label={'Area, Colony'}
                // defaultValue={userData.email}
                // value={userData.email}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.area=val
                    return oldData
                })}}
                backgroundColor={'#F9F7F6'}
                style={styles.TextInput}

            />
            <Hoshi
                label={'Pincode'}
                // defaultValue={userData.email}
                // value={userData.email}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.pincode=val
                    return oldData
                })}}
                backgroundColor={'#F9F7F6'}
                style={styles.TextInput}

            />
            <Hoshi
                label={'City'}
                // defaultValue={userData.email}
                // value={userData.email}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.city=val
                    return oldData
                })}}
                backgroundColor={'#F9F7F6'}
                style={styles.TextInput}

            />
            <Hoshi
                label={'State'}
                // defaultValue={userData.email}
                // value={userData.email}
                // this is used as active border color
                borderColor={AppColors.primary}
                // active border height
                borderHeight={3}
                inputPadding={16}
                // this is used to set backgroundColor of label mask.
                // please pass the backgroundColor of your TextInput container.
                onChangeText={(val)=>{
                    setAddress((oldData)=>{
                    oldData.state=val
                    return oldData
                })}}
                backgroundColor={'#F9F7F6'}
                style={styles.TextInput}

            />
        </View>
        <Button 
                    mode="contained" 
                    onPress={()=>{addAddress()}}
                    style={[styles.button,styles.passwordButton]}
                    color={AppColors.primary}
                    >
                    Save Address
            </Button>
    </View>

     </ScrollView>
     
            
    
     </>
    
         )
            }
export default Address
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
        // top:hp(2),
        // position: 'absolute',
        // bottom:0,
    },
    TextInput:{
        marginVertical:hp(1)
    },
    
})