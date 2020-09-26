import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Icon from 'react-native-vector-icons/Ionicons';
export const Toolbar = ({title,onIconPress,showDrawer,showIcons,navigation}) =>{
   const {logout} = useContext(AuthContext)
//    const {title,onIconPress,showDrawer} = props

   return(
    <View
    style={styles.container}
    >
    <View style={styles.logocontainer}>	

        <View style={styles.iconView}>
            <Icon.Button
            name={showDrawer ? "menu":"arrow-back"}
            size={30}
            color={'white'}
            onPress={onIconPress}
            backgroundColor={'transparent'}
            underlayColor="transparent" 
            />
        </View>

        <View style={styles.textView}>
        <Text style={styles.toolbarheadertext}>
            {title}
        </Text>
        </View>

        {showIcons?
         <View style={styles.IconContainer}>
         <Icon.Button
         name={"search"}
         size={25}
         color={'white'}
         style={styles.iconStyle}
         backgroundColor={'transparent'}
         underlayColor="transparent" 

         />
         <Icon.Button
         name={"notifications"}
         size={25}
         color={'white'}
         style={styles.iconStyle}
         backgroundColor={'transparent'}
         underlayColor="transparent" 

         />
         <Icon.Button
         name={"cart"}
         size={25}
         color={'white'}
         iconStyle={styles.iconStyle}
         onPress={()=>{navigation.navigate('Cart')}}
         backgroundColor={'transparent'}
         underlayColor="transparent" 
         />
         
         </View>
         :null}
       
    </View>
    </View>
         )
}
export default Toolbar

const styles=StyleSheet.create({
    container:{
        height:hp('8%'),
        backgroundColor:AppColors.Secondary,
        paddingLeft:wp('3%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView:{
        marginLeft:wp('-2%'),
    },
    logocontainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row",
        height: hp("100%"),
        width: wp("100%"),
        // marginLeft: 12
      },
      toolbarheadertext: {
          ...material.headline,
        color: AppColors.white,
        alignSelf: 'center',
        justifyContent: "flex-start"
      },
      textView:{
        marginLeft:wp('-1%')
      },
      IconContainer: {
        marginLeft:wp('34%'),
        flexDirection: 'row',
        // justifyContent:'space-between'
      },
      iconStyle: {
        //   marginHorizontal:wp('1%')
        opacity: 1,
      }
})