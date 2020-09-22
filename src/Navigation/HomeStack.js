import React,{ Component, useState, useEffect} from 'react'
import Home from './../screens/Home';
import Cart from './../screens/Cart'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationDrawer from '../Components/NavigationDrawer'

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => (
    <Drawer.Navigator s
    initialRouteName='Home' 
    screenOptions={{
        headerShown: false,
      }}
    drawerContent={(props) => (<NavigationDrawer
                            {...props}
                            
                        // navigation={this.props.navigation}
                        />)}
                        drawerContentOptions={{
                          }}   

    >
       <Drawer.Screen name="HomeScreen" component={Home} />
     
    </Drawer.Navigator>
)
const Homenavigator = createStackNavigator();
const HNavigator = ()=>(
        <Homenavigator.Navigator
            screenOptions={{
                headerShown: false
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
        </Homenavigator.Navigator>
)
export const HomeStack = () =>{
   return(
       
       <HNavigator/> 
       
         )
}
export default HomeStack