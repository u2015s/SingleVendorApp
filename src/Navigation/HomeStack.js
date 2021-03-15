import React,{ Component, useState, useEffect} from 'react'
import Home from './../screens/Home';
import Cart from './../screens/Cart'
import MyOrder from './../screens/MyOrder'
import ProductDetails from './../screens/ProductDetails'
import OrderSummary from './../screens/OrderSummary'
import AccountSettings from './../screens/AccountSettings'
import EditProfileInfo from './../screens/EditProfileInfo'
import Address from './../screens/Address'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawer from '../Components/NavigationComponents/NavigationDrawer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {CartProvider,CartContext} from '../Components/CartProvider'
import SearchScreen from './../screens/SearchScreen'
const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => (
    <Drawer.Navigator
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
    // <CartProvider>

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
                <Homenavigator.Screen
                name="OrderSummary"
                component={OrderSummary}
                
                />
                <Homenavigator.Screen
                name="AccountSetting"
                component={AccountSettings}
                />
                <Homenavigator.Screen
                name="EditProfileInfo"
                component={EditProfileInfo}
                />
                <Homenavigator.Screen
                name="Address"
                component={Address}
                />
                <Homenavigator.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ cardStyleInterpolator: forFade }}

                />
                
        </Homenavigator.Navigator>
        // </CartProvider>

)
export const HomeStack = () =>{
   return(
    <CartProvider>
       <HNavigator/> 
    </CartProvider>
         )
}
export default HomeStack