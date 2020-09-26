import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
// import BottomNavigation from '../Components/NavigationComponents/BottomNavigation'
import CategoryList from '../Components/HomeComponents/CategoryList'
import BannerList from '../Components/HomeComponents/BannerList'
import ProductContainer from '../Components/HomeComponents/ProductContainer'
const bannerData =[
  {      name:"Shirts",
      icon:"https://image.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg"
  },{
      name:"Pants",
      icon:"https://img.freepik.com/free-vector/modern-sale-banner-products_1361-1341.jpg?size=626&ext=jpg"
  },
  {
      name:"Sarees",
      icon:"https://img.freepik.com/free-vector/cyber-monday-sale-banner-with-abstract-3d-background_1361-1916.jpg?size=626&ext=jpg"
  },
  {
    name:"Sarees",
    icon:"https://img.freepik.com/free-vector/cyber-monday-sale-banner-with-abstract-3d-background_1361-1916.jpg?size=626&ext=jpg"
},
  
 
  ]
export const Home = ({navigation}) =>{
  function onIconPress(){
    console.log('pressed')
  }
   return(
     <>
     {/* <SafeAreaView> */}
      <Toolbar
      navigation={navigation}
      title={'Home'}
      onIconPress={()=>{nasvigation.openDrawer()}}
      showDrawer={true}
      showIcons={true}
      />
      <ScrollView 
        contentContainerStyle={styles.container}
      //  contentContainerStyle={{ flexGrow: 1 }}
        >
      
      <CategoryList/>
      <BannerList
      data={bannerData}
      />
      <View>
      <ProductContainer
      navigation={navigation}
      />

      </View>
      </ScrollView>

     {/* </SafeAreaView> */}
    
     </>
     
    
         )
}
export default Home
const styles = StyleSheet.create({
  container:{
    flexGrow: 1  
    // backgroundColor:'red'
  },
})