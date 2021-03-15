import React,{ Component, useState, useEffect,useContext, useRef} from 'react'
import {FlatList,Alert,ActivityIndicator ,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
// import {AuthContext} from '../Navigation/AuthProvider'
// import Toolbar from '../Components/Toolbar'
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ResultCard=(item)=>{
    return(
        <>
        <View style={styles.itemView}>
            <Text>
                {item.text}
            </Text>
        </View>
        
        </>
    )
}

export const SearchScreen = ({navigation}) =>{
    const[showIcon,setShowIcon]= useState(false)
    const [searchText,setSearchText]= useState('')
    const inputEl = useRef(null);
    const [Data,setData]= useState(["Search 1","Search 2"])
    const [searchResult, setSearchResult]=useState([])
useEffect(() => {
    inputEl.current.focus();
})

useEffect(() => {
    if(searchText==''){
        setShowIcon(false)
    }else{
        setShowIcon(true)
        // console.log(searchText)
        searchData(searchText)
    }
}, [searchText])

function searchData(text){
Data.forEach((s)=>{
    if(s==text){
        console.log(s)
        setSearchResult(state=>{
            var newState=[...state,text]
            return newState
        })
    }
})
}
   return(
     <>
     <View style={styles.container}>
        <View style={styles.headerView}>
                <Icon.Button
                name={"arrow-back"}
                size={30}
                color={'grey'}
                backgroundColor={'transparent'}
                onPress={()=>{navigation.goBack()}} 
                underlayColor="transparent"
                iconStyle={{marginRight:0}}
                />
            <View style={styles.innerheaderView}>
                <TextInput
                placeholder="Search Products"
                value={searchText}
                ref={inputEl}
                style={styles.searchInput}
                onChangeText={setSearchText}
                />

                {showIcon?
                <Icon.Button
                name={"add-outline"}
                size={32}
                color={'grey'}
                backgroundColor={'transparent'}
                onPress={()=>{setSearchText('')}} 
                underlayColor="transparent"
                iconStyle={styles.IconStyle}
                // style={{marginRight:wp(1)}}
                />
                :<></>}
            </View>
        </View>
        <View style={styles.resultsView}>
                {searchResult.length?
                <> 
                <FlatList
                data={searchResult}
                renderItem={({item})=>(
                <ResultCard text={item}/>
                )}
                />
                </>
                :
                 <></>
                }
            
        </View>
     </View>
   
     
     
     </>
    
         )
}
export default SearchScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'blue'
    },
    headerView:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems: 'center',
        // justifyContent:'space-between',
        width:wp(100),
        height:hp(8),
        // elevation:7,

        elevation:2,
        // borderBottomWidth:1
        // shadow:20
    },
    searchInput:{
        fontSize:16,
        width:wp(75),
        // backgroundColor:'red'
    },
    IconStyle:{
    transform: [{ rotate: "45deg" }], 
    // backgroundColor:'red',
    // width:wp(10),
    // paddingRight:20,
    marginRight:0
    // alignItems: "center",
    },
    innerheaderView:{
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems: 'center',
    },
    resultsView:{
    },
    itemView:{
        // backgroundColor:'blue',
        height:hp(8),
        borderBottomWidth:1,
        borderBottomColor:'grey',
        padding:hp('2%'),
    }
})