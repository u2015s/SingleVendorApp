import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabSection1 from '../Components/TabSection1'
export const BottomNavigation = ({navigation}) =>{
    const Tab = createMaterialBottomTabNavigator();

   return(
     <>
     <Tab.Navigator
                    initialRouteName="Section1"
                    style={styles.bottomtab}
                    activeColor={AppColors.primary}
                    inactiveColor={"grey"}
                    barStyle={{ backgroundColor: "white" }}
                    backBehavior={"none"}
                    labeled={true}
                    >
                    <Tab.Screen
                        name="Section1"
                        component={TabSection1}
                        options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <Icon name="home" color={color} size={22} />
                        ),
                        }}
                    />
                    <Tab.Screen
                        name="Section2"
                        component={TabSection1}
                        options={{
                        tabBarLabel: 'Ideology',
                        tabBarIcon: ({color}) => (
                            <Icon name="info-circle" color={color} size={22} />
                        ),
                        }}
                    />
                    <Tab.Screen
                        name="Section3"
                        component={TabSection1}
                        options={{
                        tabBarLabel: 'Video',
                        tabBarIcon: ({color}) => (
                            <Icon name="video" color={color} size={22} />
                        ),
                        }}
                    />
                    <Tab.Screen
                        name="Section4"
                        component={TabSection1}
                        options={{
                        tabBarLabel: 'Publications',
                        tabBarIcon: ({color}) => (
                            <Icon name="book" color={color} size={22} />
                        ),
                        }}
                    />
                    <Tab.Screen
                        name="Section5"
                        component={TabSection1}
                        options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({color}) => (
                            <Icon name="calendar-alt" color={color} size={22} />
                        ),
                        }}
                        labeled={false}
                    />
                    </Tab.Navigator>
     
     </>
    
         )
}
export default BottomNavigation

const styles = StyleSheet.create({
    bottomtab:{
        justifyContent:'flex-end',
    },
})