import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper'

export const AccountSettings = ({navigation,route}) =>{
const {user}= useContext(AuthContext)
const [userData,setuserData] = useState({})
   useEffect(() => {
    firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((res)=>{
        // console.log(res.data())
        setuserData(res.data())
    })
    .catch(e=>{console.log(e)});
   },[])

   useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((res)=>{
            // console.log(res.data())
            setuserData(res.data())
        })
        .catch(e=>{console.log(e)});
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
   return(
     <>
     <Toolbar
     title={'Account Settings'}
     onIconPress={()=>{navigation.dispatch(CommonActions.goBack())}}
     showDrawer={false}
     showIcons={false}
     navigation={navigation}
     />
    {Object.keys(userData).length?
     <View style={styles.container}>
     <View style={styles.profileView}>
         <Text style={{...material.title}}>
             Profile Information
         </Text>
         <View>
             <View style={styles.infoView}>
                 <Text style={{...material.subheading,}}>
                     Name:
                 </Text>
                 <Text style={{...material.subheading,marginLeft:wp(2)}}>
                     {userData.name}
                 </Text>
             </View>

             <View style={styles.infoView}>
                 <Text style={{...material.subheading,}}>
                     Email:
                 </Text>
                 <Text style={{...material.subheading,marginLeft:wp(2)}}>
                     {userData.email}
                 </Text>
             </View>
         </View>
         
     </View>
     <Button mode="contained" onPress={() =>{navigation.navigate('EditProfileInfo',{userData})}}
             style={styles.button}
             color={AppColors.primary}
             >
             Edit Profile info
     </Button>

     <View style={styles.addressView}>
        <Text style={{...material.title}}>
                Address Information
        </Text>
     {userData.address?
     <>
     <View style={styles.innerAddressView}>
        <Text style={{...material.subheading, fontWeight:'bold'}}>
            Address:
        </Text>
        <Text style={{...material.subheading}}>
            {/* {userData.address} */}
            {
                "Delivery Name: " + userData.address.name          
            }
        </Text>
        <Text style={{...material.subheading}}>
            {/* {userData.address} */}
            {
                "Mobile Number: " + userData.address.mobile          
            }
        </Text>
        <Text style={{...material.subheading}}>
            {/* {userData.address} */}
            {
                

                userData.address.house+",  " + userData.address.area+",  " + userData.address.city+",  " +  userData.address.state
            
                    
            }
        </Text>
     </View>
     <Button mode="contained" onPress={() => navigation.navigate('Address',{userData})}
             style={styles.button}
             color={AppColors.primary}
             >
            Edit Delivery Address
     </Button>
     </>
     :<>
     <Text style={{...material.subheading,}}>
     You currently donot have an address set for orders. Click the below button to set an address
     </Text>
     <Button mode="contained" onPress={() => navigation.navigate('Address',{userData})}
             style={styles.button}
             color={AppColors.primary}
             >
             Set Address
     </Button>
     </>}

     
     </View>
     <Button mode="contained" onPress={() => console.log('Pressed')}
             style={[styles.button,styles.passwordButton]}
             color={AppColors.primary}
             >
             Change Password
     </Button>
</View>
    
    
    :
    <View style = {styles.overlayLoadingContainer}>
    
    <ActivityIndicator 
                size={50} color={AppColors.primary} />
    </View>
    }


    
    
     </>
    
         )
}
export default AccountSettings

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
        height:hp(12),
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
    overlayLoadingContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent:'center',
        alignItems:'center',
        zIndex: 1,
        opacity: 0.4,
        backgroundColor: 'black'
     },
     innerAddressView:{
        // flexDirection:'row',
    }
})