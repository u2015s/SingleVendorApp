import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from './Toolbar'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';

export const NavigationDrawer = ({navigation}) =>{
    const {logout} = useContext(AuthContext)

   return(
     <>
     
     <DrawerContentScrollView
    //  style={{padding: 0}}
    >
       <View >
            <View style={styles.userSection}>
            {/* <Avatar
                rounded
                // source={{
                //     uri:'',
                // }}
                overlayContainerStyle={{backgroundColor: AppColors.primary}}
                color={AppColors.primary}
                title={this.state.userLetter}
                size="xlarge"
                // activeOpacity={0.3}
            />
                <Text style={styles.nameText}>
                    Welcome, {this.state.username}
                 </Text> */}
                 <Text style={styles.nameText}>APPNAME</Text>
            </View>

            <View style={styles.drawerItems}>
            <DrawerItem
                // icon={() => ( <Icon
                // name='location-arrow'
                // color={'grey'}
                // size={25}
                // />)}
                icon={({ focused, color, size }) => <Icon color={color}                style={{marginLeft:wp(2)}}
                style={{marginLeft:wp(2)}}
                 size={size} name={focused ? 'location-arrow' : 'location-arrow'} />}
                label="My orders"
                labelStyle={styles.labelStyle}
                onPress={(focused) => {navigation.closeDrawer()
                                    navigation.navigate('MyOrder')}}
                activeTintColor={AppColors.primary}
                style={styles.itemStyle}
                // style={{backgroundColor:"red"}}
                // inactiveBackgroundColor={AppColors.primary}
            />
            
            <DrawerItem
                icon={() => (
                <Icon
                style={{marginLeft:wp(2)}}
                name='list-alt'
                color={'grey'}
                size={25}
                />)}
                label="Wishlist"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
                style={styles.itemStyle}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='user-friends'
                style={{marginLeft:wp(2)}}
                color={'grey'}
                size={20}
                />)}
                label="Categories"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
                style={styles.itemStyle}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='user-friends'
                style={{marginLeft:wp(2)}}
                color={'grey'}
                size={20}
                />)}
                label="Offers"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
                style={styles.itemStyle}
            />
            </View>
        </View>
            <View style={styles.comItems}>
            {/* <Text style={styles.headingText}>
                Communicate
            </Text> */}
            
            {/* <DrawerItem
                icon={() => ( <Icon
                name='share'
                color={'grey'}
                size={20}
                />)}
                label="Share With Friends"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
            /> */}
            <DrawerItem
                icon={() => ( <Icon
                name='share'
                color={'grey'}
                style={{marginLeft:wp(2)}}
                size={20}
                />)}
                label="About Us"
                labelStyle={[styles.labelStyle, {marginLeft:wp('1%')}]}
                onPress={() => {}}
                style={styles.itemStyle}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='info'
                color={'grey'}
                size={25}
                style={{marginLeft:wp(2)}}
                />)}
                label="Account Settings"
                onPress={(focused) => {
                    navigation.closeDrawer()
                    navigation.navigate('AccountSetting')}}
                labelStyle={[styles.labelStyle, {marginLeft:wp('3.5%')}]}
                style={styles.itemStyle}
            />
             <DrawerItem
                icon={() => ( <Icon
                name='mobile'
                style={{marginLeft:wp(2)}}
                color={'grey'}
                size={24}
                />)}
                label="Help"
                labelStyle={[styles.labelStyle,{marginLeft:wp('2.5%')}]}
                onPress={() => {}}
                style={styles.itemStyle}
            />
            {/* <DrawerItem
                icon={() => ( <Icon
                name='address-book'
                color={'grey'}
                size={25}
                />)}
                label="Contact Us"
                labelStyle={[styles.labelStyle,{marginLeft:wp('1%')}]}
                onPress={() => {}}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='comment'
                color={'grey'}
                size={24}
                />)}
                label="Feedback"
                labelStyle={[styles.labelStyle,{marginLeft:wp('1%')}]}
                onPress={() => {}}
            /> */}
            </View>
            
            <View style={styles.buttonView}>
                <View >
                <DrawerItem
                    icon={() => ( <Icon
                    name='external-link-alt'
                    color={'grey'}
                    style={{marginLeft:wp(2)}}
                    size={24}
                    />)}
                    label="SignOut"
                    labelStyle={[styles.labelStyle,]}
                    onPress={() =>{logout()}}
                    style={styles.itemStyle}
                />
                </View>
            </View>
            
    </DrawerContentScrollView>
     
     </>
    
         )
}
export default NavigationDrawer

const styles = StyleSheet.create({
    container:{
        
        // backgroundColor:'red'
    },
    userSection:{
        // backgroundColor:"green",
        paddingTop:hp('2%'),
        marginTop:hp('-1%'),
        // alignItems: 'center',
        paddingBottom: hp('2%'),
        // borderBottomWidth:0.2,
        backgroundColor:AppColors.Secondary,
    },
    nameText:{
        fontSize:25,
        color: AppColors.white,
        marginLeft:wp('6%')
    },
    drawerItems: {
        // paddingBottom: hp2dp('1%'),
        borderBottomWidth:0.2
    },
    labelStyle:{
        fontSize:16,
        // fontWeight:'500'
        color:'black'
    },
    comItems:{
        borderBottomWidth:0.2
    },
    headingText:{
        fontSize:16,
        padding: wp('3%')
    },
    buttonView:{
        // marginTop:hp2dp('25%'),
        // backgroundColor: 'yellow',
        flex:1,
        // marginVertical:'auto'
        // alignItems:'flex-end'
    },
    itemStyle:{
        marginHorizontal:0,
        marginVertical:0,
        borderRadius:0,
        // marginLeft:10
        // paddingLeft:10,
        // backgroundColor:'red'
        // paddingHorizontal:wp(2)
    }
    // labelPos:{marginLeft:wp('3%')}
})