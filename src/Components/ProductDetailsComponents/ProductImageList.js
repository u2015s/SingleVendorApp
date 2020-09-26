import React,{ Component, useState, useEffect,useContext} from 'react'
import {Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../../assests/AppColor'
import {AuthContext} from '../../Navigation/AuthProvider'
// import Toolbar from '../Components/Toolbar'
import { CommonActions } from '@react-navigation/native';
import Carousel, { Pagination }  from 'react-native-snap-carousel'
export const ProductImageList = ({navigation,data}) =>{
    const [activeSlide,setActiveSlide]=useState(0)
    var Data=data
    function pagination () {
        // const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={activeSlide}
              containerStyle={{  
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: "auto",
              marginTop: "auto",

              left: 0,
              right: 0,
              // top:0,
              bottom:-20
            }}
              dotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  marginHorizontal: 1,
                  backgroundColor: AppColors.white

              }}
              animatedFriction={1}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
                  backgroundColor: 'grey'

              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
    const HItem = ({name,icon,onPress}) => (

        <TouchableOpacity onPress={onPress}
        activeOpacity={1}
        >
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
                resizeMode={'contain'}
                />
              </View>
      
              {/* <View
              style={styles.TView}
              >
              <Text
                style={styles.Htext}
                >
                  {name}
                </Text>
              </View> */}
          </View>
        </TouchableOpacity>
          
              
            );

    const hrenderItem = ({item,index }) => (
             
        <HItem 
        icon={item}
        // onPress={() => {this.onPressDept(item)}} 
        />
      
    )
   return(
     <>
     <View
                    style={styles.Hlist}
                    >
                      {/* <FlatList
                      horizontal
                      data={Data}
                      renderItem={hrenderItem}
                      showsHorizontalScrollIndicator={false}
                      // stickyHeaderIndices={[1]}
                      /> */}
                    <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={Data}
                    renderItem={hrenderItem}
                    sliderWidth={wp('100%')}
                    itemWidth={wp('100%')}
                    onSnapToItem={(index) => setActiveSlide(index) }
                    // autoplay={true}
                    
                    // loop={true}
                    />
                    {pagination()}
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
        // paddingTop:hp('2%'),
        // paddingHorizontal: wp('2%'),
        // marginLeft:wp('-20%'),
        // marginBottom:hp('1%'),
        // paddingBottom:hp('1%'),
        // marginHorizontal: wp('-2%'),
        // width:wp('20%'),
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
        width:wp('60%'),
        height:hp('30%'),
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

        // borderWidth:1
      }
});
export default ProductImageList