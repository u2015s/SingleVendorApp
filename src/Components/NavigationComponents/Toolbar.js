import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import {CartContext,CartProvider} from '../CartProvider'


export const Toolbar = ({title,onIconPress,showDrawer,navigation,showIconSearch,showIconNoti,showIconCart,cartItemNumbers}) =>{
   const {logout} = useContext(AuthContext)
   const { Cart, setCart, removeCartItem} = useContext(CartContext)
   var itemsincart = Cart.size
//    const {title,onIconPress,showDrawer} = props
   const [cartItemNumber,setcartItemNumber]= useState(Cart.size)
   useEffect(() => {
    // console.log("latest Cart",Cart.size)
    setcartItemNumber(Cart.size)
  })
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // console.log("18",Cart.size)
      // itemsincart = Cart.size
      setcartItemNumber(Cart.size)
      // console.log(Cart.size)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

   return(
    // <CartProvider>
          <View
          style={styles.container}
          >
           {/* {console.log(Cart)} */}

           {/* {console.log(Cart)} */}

          <View style={styles.logocontainer}>	

          <View style={{ flexDirection: 'row',alignItems: 'center'}}>

          <View style={styles.iconView}>
                      <Ripple
                      rippleCentered={true}
                      onPress={onIconPress}
                      >
                        <Icon.Button
                            name={showDrawer ? "menu":"arrow-back"}
                            size={30}
                            color={'white'}
                            backgroundColor={'transparent'}
                            underlayColor="transparent" 
                            />
                      </Ripple>
                      
                  </View>

                  <View style={styles.textView}>
                      <Text style={styles.toolbarheadertext}>
                          {title}
                      </Text>
                  </View>
          </View>

             
              <View style={styles.IconContainer}>

              {
              showIconCart?
              <>
              <Icon.Button
              name={"cart"}
              size={25}
              color={'white'}
              iconStyle={styles.iconStyle}
              onPress={()=>{navigation.navigate('Cart')}}
              backgroundColor={'transparent'}
              underlayColor="transparent" 
              />
              </>
              
              :<></>}

              {cartItemNumber? 
              <View style={styles.cartItemsNumber}>
                <Text style={{...material.caption,fontWeight:'bold'}}>
                  {cartItemNumber}
                </Text>
              </View>:<></>}

              {showIconSearch?
              <Icon.Button
              name={"search"}
              size={25}
              color={'white'}
              style={styles.iconStyle}
              backgroundColor={'transparent'}
              onPress={()=>{navigation.navigate('SearchScreen')}}
              underlayColor="transparent" 
              />
              :<></>}

              {showIconNoti?
              <Icon.Button
              name={"notifications"}
              size={25}
              color={'white'}
              style={styles.iconStyle}
              backgroundColor={'transparent'}
              underlayColor="transparent" 
              />
              :<></>}

              
                    
                  
              </View>
              
          </View>
          </View>
     
          // </CartProvider>
    
    
         )
}
export default Toolbar

const styles=StyleSheet.create({
    container:{
        height:hp('8%'),
        backgroundColor:AppColors.Secondary,
        paddingLeft:wp('3%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView:{
        marginLeft:wp('-2%'),
    },
    logocontainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        height: hp("100%"),
        width: wp("100%"),
        
        // marginLeft: 12
      },
      toolbarheadertext: {
          ...material.headline,
        color: AppColors.white,
        alignSelf: 'center',
        justifyContent: "flex-start",
        // backgroundColor:"black"
      },
      textView:{
        marginLeft:wp('-1%')
      },
      IconContainer: {
        // marginLeft:wp('23%'),
        marginRight:wp('1%'),
        flexDirection: 'row',
        // justifyContent:'space-between'
      },
      iconStyle: {
        //   marginHorizontal:wp('1%')
        opacity: 1,
      },
      cartItemsNumber:{
        backgroundColor:AppColors.primary,
        position: 'absolute',
        borderRadius:25,
        width:wp(4),
        height:wp(4),
alignItems: 'center',
justifyContent:'center',
        top:hp(0.5),
        left:wp(7),
        // right:wp(1)

      }
})