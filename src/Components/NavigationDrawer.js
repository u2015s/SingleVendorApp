import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/Toolbar'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
export const NavigationDrawer = ({navigation}) =>{
  
   return(
     <>
     
     <DrawerContentScrollView
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
                icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'location-arrow' : 'location-arrow'} />}
                label="My orders"
                labelStyle={styles.labelStyle}
                onPress={(focused) => {this.props.navigation.navigate('Navigation')}}
                activeTintColor={AppColors.primary}
                // inactiveBackgroundColor={AppColors.primary}
            />
            
            <DrawerItem
                icon={() => ( <Icon
                name='list-alt'
                color={'grey'}
                size={25}
                />)}
                label="Wishlist"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='user-friends'
                color={'grey'}
                size={20}
                />)}
                label="Categories"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='user-friends'
                color={'grey'}
                size={20}
                />)}
                label="Offers"
                labelStyle={styles.labelStyle}
                onPress={() => {}}
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
                size={20}
                />)}
                label="About Us"
                labelStyle={[styles.labelStyle, {marginLeft:wp('1%')}]}
                onPress={() => {}}
            />
            <DrawerItem
                icon={() => ( <Icon
                name='info'
                color={'grey'}
                size={25}
                />)}
                label="Account Settings"
                labelStyle={[styles.labelStyle, {marginLeft:wp('3.5%')}]}
                onPress={() => {}}
            />
             <DrawerItem
                icon={() => ( <Icon
                name='mobile'
                color={'grey'}
                size={24}
                />)}
                label="Help"
                labelStyle={[styles.labelStyle,{marginLeft:wp('2.5%')}]}
                onPress={() => {}}
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
                    size={24}
                    />)}
                    label="SignOut"
                    labelStyle={[styles.labelStyle,]}
                    onPress={() => {}}
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
    }
    // labelPos:{marginLeft:wp('3%')}
})