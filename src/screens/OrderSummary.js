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
import CartButton from '../Components/CartComponents/CartButton'
export const OrderSummary = ({navigation,route}) =>{
    const {userDetail}= useContext(AuthContext)
    const [CartItems, setCartItems] = useState([...route.params.CartItems])
    const [totalPrice,setTotalPrice] = useState(0)
    const [, reRender] = useState(0);
    const [val1, updateState] = useState(false);

    useEffect(()=>{
        // console.log(route.params.CartItems)
        // console.log(CartItems)
    })
    function addQty(id,qty){
        setCartItems(oldCart=>{
         oldCart.forEach((item)=>{
            if(item.id==id){
              item.Qty=qty
              console.log("itemqty",item.Qty)
            }
            // console.log(oldCart)
        })
        updateState(!val1)
        
        return (oldCart)
        })
      }
      function decQty(id,qty){
        setCartItems(oldCart=>{
          oldCart.forEach((item)=>{
            if(item.id==id){
              if(item.Qty==1){
                item.Qty=qty
                // return 0
              }else{
              // item.Qty=qty
              item.Qty=qty
            }
          }
          
        })
         updateState(!val1)
         return (oldCart)
         })
      
      
        
      }
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
               data={CartItems}
               renderItem={({item})=>(
                 <CartCard
                 navigation={navigation}
                 item={item}
                //  removeItem={removeItem}
                 hideRemove={true}
                 showButtons={false}
                 decQty={decQty}
                 addQty={addQty}
                 />
                 )}
               keyExtractor={item => item.id}
             />
   
           <PriceDetailCard
           CartItems={route.params.CartItems}
           setPrice={setTotalPrice}
           decQty={decQty}
           addQty={addQty}
           />
        </View>
        </ScrollView>

        <CartButton
        totalPrice={totalPrice}
        onPressFn={()=>{console.log("hello")}}
        ButtonText="Continue"
        />
        {/* <View style={styles.buttonContainer}>
          <View style={styles.totalPriceView}> 
                 <Text style={{...material.headline,fontWeight:'bold'}}>
                 Rs {totalPrice}
                 </Text>
          </View>
   
          <View>
             <Button mode="contained" onPress={() => {
               // console.log(item)
               // updateCart(item.id)
               navigation.navigate('OrderSummary',{CartItems:CartItems,totalPrice:totalPrice})
             }}
             style={styles.button}
             color={AppColors.primary}
             >
             Place Order
             </Button>
          </View>
         
         </View> */}
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