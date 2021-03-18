import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator,FlatList ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import {AuthContext} from '../Navigation/AuthProvider'
import CartCard from '../Components/CartComponents/CartCard'
import Toolbar from '../Components/NavigationComponents/Toolbar'
import { CommonActions } from '@react-navigation/native';
import {CartContext} from '../Components/CartProvider'
import {ProductContext} from '../Components/ProductProvider'
import PriceDetailCard from '../Components/CartComponents/PriceDetailCard'
import { Button } from 'react-native-paper'
const useForceUpdate = () => useState()[1];
export const Cart = ({navigation}) =>{
  const { Cart, setCart, removeCartItem} = useContext(CartContext)
  const [CartItems, setCartItems] = useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  const {Product}= useContext(ProductContext)
  const [isloading, setIsloading]=useState(true)
  // const forceUpdate = useForceUpdate();
  const [val1, updateState] = useState(false);
  useEffect(() => {
    if(Cart.size){
      setIsloading(false)
      for (const k of Cart.values()) {
        Product.forEach((item)=>{
            if(item.id==k){
              setCartItems(oldCart=>{
                item.Qty = 1
                var newState= [...oldCart,item]
                return (newState)
              })
            }
        })
      }
    }else{
      setIsloading(false)
    }
  }, []);

  useEffect(() => {
   if(CartItems.length){
     setIsloading(false)
    //  console.log(CartItems)
   }
  }, [CartItems]);

  function removeItem(id){
    removeCartItem(id)
    setCartItems((oldCart)=>{
      var newCart = oldCart.filter((item) => item.id !== id);
      return (newCart)
    })
    // console.log(Cart)
    }
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


function calLength(){
      if(CartItems.length){
        return true
      }else{
        return false
      }
    }

  return(

     <>
     {/* {console.log("hello", CartItems)} */}
     <Toolbar
     title={'Cart'}
     navigation={navigation}
     onIconPress={()=>{
      navigation.goBack();
      // navigation.dispatch(CommonActions.goBack())
    
    }}
     showDrawer={false}
     showIconCart={false}
     showIconSearch={false}
     showIconNoti={false}
     />
   
    {
    isloading ?
     <View style = {{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      justifyContent:'center',
      alignItems:'center',
      }}>
      
      <ActivityIndicator 
      size={50} color={AppColors.primary} />
  </View>
    :
    <>
    
  {
        CartItems.length==0?
         <Text>
           Your Cart is Empty. Add Products
         </Text>
        :
        <>
         <ScrollView
        contentContainerStyle={{ flexGrow: 1}}
        >
       <View>
           <FlatList
               data={CartItems}
               renderItem={({item})=>(
             <CartCard
                 decQty={decQty}
                 addQty={addQty}
                 navigation={navigation}
                 item={item}
                 removeItem={removeItem}
                 hideRemove={false}
                 showButtons={true}
                 />
                 )}
               keyExtractor={item => item.id}
             />
   
           <PriceDetailCard
           CartItems={CartItems}
           setPrice={setTotalPrice}
          //  val={val1}
           />

        </View>
         </ScrollView>
       
        <View style={styles.buttonContainer}>
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
         
         </View>
        
        </>
       
      // }
      // </>
      //  : <>
      // </>
  }

   
    
  
    </>
   }
    
 

  </>
    
         )
}
export default Cart

const styles = StyleSheet.create({
  totalPriceView:{
    // backgroundColor:'red'
    marginHorizontal:wp(4)
  },
  buttonContainer:{
    backgroundColor:AppColors.white,
    elevation:10,
    height:hp(8),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    // backgroundColor:'red'
  },
  button:{
    // elevation:0,
    // height:hp(6),
    width:wp(40),
    marginHorizontal:wp(4)
    // color:AppColors.primary,
    // borderRadius:5
}
})