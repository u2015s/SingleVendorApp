import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Toolbar from '../NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
export const CategoryList = ({navigation}) =>{
// const [Data,setData]= useState([])
// useEffect(()=>{

// })
    const Data =[
    {
        name:"Shirts",
        icon:"https://images-na.ssl-images-amazon.com/images/I/71DBklVte9L._UL1200_.jpg"
    },{
        name:"Pants",
        icon:"https://cdn.shopify.com/s/files/1/0023/9901/0881/products/M-Coburn-Pant-Storm-Cloud_5f952c4f-d899-484f-b891-acf4f37f6269_1400x1400.jpg?v=1582657066"
    },
    {
        name:"Books",
        icon:"https://lh3.googleusercontent.com/proxy/3hFP9blLU5rdGDJkdh0oMHpVn4mp0CX4SQ4DUSwZvW8--VywcPdDvUjfwRWW9Gy6XrR9huKcmgDikECOXLLjMs0dyucLEDB5Do6XID4S_jCCqbHOso362-gFwA"
    },
    {
        name:"Electronics",
        icon:"https://images.herzindagi.info/image/2020/Apr/Electronics.jpg"
    },
    {
      name:"shoes",
      icon:"https://freepngimg.com/thumb/adidas_shoes/1-2-adidas-shoes-png.png"
  },
    
    ]
    const HItem = ({name,icon,onPress}) => (

        <TouchableOpacity onPress={onPress}>
              <View 
          style={styles.Hitem}
          >
              <View 
              style={styles.IView}
              >
                <Image
              //   source={require('../../../lib/order.png')}
                source={{uri:icon}}
                style={styles.Himage}
                resizeMode='contain'
                />
              </View>
      
              <View
              style={styles.TView}
              >
              <Text
                style={styles.Htext}
                >
                  {name}
                </Text>
              </View>
          </View>
        </TouchableOpacity>
          
              
            );

    const hrenderItem = ({item}) => (
             
        <HItem 
        name={item.name}
        icon={item.icon}
        // onPress={() => {this.onPressDept(item)}} 
        />
      
    )
   return(
     <>
     <View
                    style={styles.Hlist}
                    >
                      <FlatList
                      horizontal
                      data={Data}
                      renderItem={hrenderItem}
                      showsHorizontalScrollIndicator={false}
                      keyExtractors={(item)=>(item.name)}
                      // stickyHeaderIndices={[1]}
                      />
                    </View>
     </>
    
         )
}

const styles = StyleSheet.create({
    container: {
        // height:hp('50%'),
        flex:1,
        backgroundColor: "white",
        // height:hp('15%')
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    txtContainer: {
        color: AppColors.primary,
        fontSize: 20,
        alignSelf: "center",
        justifyContent: "center"
    },
    bottomtab:{
        justifyContent:'flex-end',
    },
    Hitem:{
        // backgroundColor: 'white',
        // padding: wp('3%'),
        paddingTop:hp('2%'),
        // paddingHorizontal: wp('2%'),
        // marginLeft:wp('-20%'),
        // marginBottom:hp('1%'),
        paddingBottom:hp('1%'),
        // marginHorizontal: wp('-0.5%'),
        width:wp('20%'),
        // marginRight:wp('2%'),
        // marginLeft:wp('5%'),

        // marginBottom:hp('1%'),
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // justifyContent:''
      },
      IView:{
        alignItems: 'center'
      },
      TView:{
        alignItems: 'center'

      },
      Himage:{
        width:wp('10%'),
        height:hp('6%'),
        // marginHorizontal:hp('1%')
        // alignItems: 'center',

      },
      Htext:{
        fontSize:14,
        textAlign: 'center'
      },
      Hlist:{
        backgroundColor: 'white',
        // elevation:2,
        // marginBottom:hp('1%'),
        // borderWidth:0.2

        // borderWidth:1
      }
});
export default CategoryList