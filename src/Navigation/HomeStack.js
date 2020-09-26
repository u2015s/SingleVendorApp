import React,{ Component, useState, useEffect} from 'react'
import Home from './../screens/Home';
import Cart from './../screens/Cart'
import MyOrder from './../screens/MyOrder'
import ProductDetails from './../screens/ProductDetails'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawer from '../Components/NavigationComponents/NavigationDrawer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CardStyleInterpolators } from '@react-navigation/stack';

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => (
    <Drawer.Navigator s
    initialRouteName='Home' 
    screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    drawerContent={(props) => (<NavigationDrawer
                            {...props}
                            
                        // navigation={this.props.navigation}
                        />)}
    drawerContentOptions={{   }}  
    >
       <Drawer.Screen name="HomeScreen" component={Home} />
     
    </Drawer.Navigator>
)
const Homenavigator = createStackNavigator();
const HNavigator = ()=>(
        <Homenavigator.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Homenavigator.Screen
                name="Home"
                component={DrawerNavigator}
                />
                <Homenavigator.Screen
                name="Cart"
                component={Cart}
                />
                <Homenavigator.Screen
                name="MyOrder"
                component={MyOrder}
                
                />
                <Homenavigator.Screen
                name="ProductDetails"
                component={ProductDetails}
                
                />
        </Homenavigator.Navigator>
)
export const HomeStack = () =>{
   return(
       
       <HNavigator/> 
       
         )
}
export default HomeStack