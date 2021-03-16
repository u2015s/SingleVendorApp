import React,{ Component, useState, useEffect,useContext} from 'react'
import {KeyboardAvoidingView,Alert,ActivityIndicator ,Platform,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
// import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import { Button } from 'react-native-paper'

export const RateProduct = ({navigation}) =>{

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
        <View style={styles.containerView}>
            <View style={styles.starContainerView}>
                <Text style={{...material.title}}>
                    Give Rating to the Product
                </Text>

            </View>
            <View style={styles.reviewView}>
                <Text style={{...material.title}}>
                    Write A Review
                </Text>
                
                <TextInput
                style={styles.inputStyle}
                numberOfLines={10}
                />
            </View>
            <Button mode="contained" onPress={() => {
        
            }}
            style={styles.button}
            color={AppColors.primary}
            >
                Submit
            </Button>
        </View>
     {/* </KeyboardAvoidingView> */}
     
     
     </>
    
         )
}
export default RateProduct

const styles = StyleSheet.create({
    containerView:{
        flex:1,
        padding:wp(2)
    },
    starContainerView:{
        // backgroundColor:'red',
        height:hp(20),
    },
    reviewView:{
        // height:hp(20)

    },
    inputStyle:{
        marginTop:hp(1),
        backgroundColor:'white',
        textAlignVertical:'top',
        padding:wp(3)
    },
    button:{
        marginTop:'auto'
        // position: 'absolute',
        // bottom:0,

    }
})