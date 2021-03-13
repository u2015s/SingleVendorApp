import React,{ Component, useState, useEffect,useContext} from 'react'
import {FlatList, Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import PriceDetailCard from '../Components/CartComponents/PriceDetailCard'
import CartCard from '../Components/CartComponents/CartCard'

export const OrderSummary = ({navigation,route}) =>{
    const {userDetail}= useContext(AuthContext)
    const [CartItems, setCartItems] = useState({...route.params.CartItems})
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        console.log(route.params.CartItems)
    },[])
   return(
     <>
     <Toolbar
     title={'Order Summary'}
     onIconPress={()=>{navigation.dispatch(CommonActions.goBack())}}
     showDrawer={false}
     showIcons={false}
     navigation={navigation}
     />
     <ScrollView
        contentContainerStyle={{ flexGrow: 1}}
        >
    <View style={styles.addressView}>
        <Text style={{...material.title}}>
            Delivery Address
        </Text>

        {
            userDetail.address?
            <>
            <Text style={{...material.subheading}}>
            {/* {userData.address} */}
            {
                userDetail.address.name + ",     " +userDetail.address.mobile          
            }
            </Text>
            <Text style={{...material.subheading}}>
            {/* {userData.address} */}
            {
                

                userDetail.address.house+",  " +userDetail.address.area+",  " +userDetail.address.city+",  " + userDetail.address.state
            
                    
            }
        </Text>
            </>
            
            :
            <>Set address</>
        }
        
    </View>
    
       <View>
           <FlatList
               data={route.params.CartItems}
               renderItem={({item})=>(
                 <CartCard
                 navigation={navigation}
                 item={item}
                //  removeItem={removeItem}
                hideRemove={true}
                 />
                 )}
               keyExtractor={item => item.id}
             />
   
           <PriceDetailCard
           CartItems={route.params.CartItems}
           setPrice={setTotalPrice}
          
           />
        </View>
        </ScrollView>

     </>
    
         )
}
export default OrderSummary

const styles = StyleSheet.create({
    addressView:{
        // backgroundColor:'red',
        height:hp(15),
        padding:wp(2)
    }
})