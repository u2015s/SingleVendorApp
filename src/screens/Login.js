import React,{useContext, Component, useState, useEffect} from 'react'
import {Alert,ActivityIndicator,View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import { AuthContext }  from '../Navigation/AuthProvider'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { material } from 'react-native-typography'
import AppColors from '../../assests/AppColor'
import { validateAll } from 'indicative/validator';
export const Login = ({navigation}) =>{
  const [error,setError]=useState({})
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const [isLoading, setLoading] = useState(false)
  const {login} = useContext(AuthContext);

  // const [email,]
  function onClickSignin(){
    const rules = {
      email: 'required|email',
      password: 'required|string|min:6|max:40',
      
  };

  const data = {
      email: email,
      password: password,
  };

  const messages = {
      required: field => `${field} is required`,
      'username.alpha': 'Username contains unallowed characters',
      'email.email': 'Please enter a valid email address',
      'password.min':
          'Password is too short. Must be greater than 6 characters',
  };

  validateAll(data, rules, messages)
      .then(async () => {
          setLoading(true)
          const res = await login(email, password)
          if(res&&res.user){
            navigation.navigate('Home')
            // Alert.alert("Success","You are Signed in sucessfully"); 
            setLoading(false)

          }else{
            setLoading(false)
            // console.log(res)
            var msg = res
            Alert.alert(msg); 
          }

        //   setTimeout(function(){ 
        //     setLoading(false)

        // }, 3000);

      })
      .catch(err => {
          const formatError = {};
          // console.log(err)
          err.forEach(err => {
              formatError[err.field] = err.message;
          });
          setError(formatError);
          // console.log(formatError)
          
      });
  }

  function showActivity(){
    return(
     <View style = {styles.overlayLoadingContainer}>
    
         <ActivityIndicator 
                     size={50} color={AppColors.primary} />
     </View>
     
      )
    } 
   return(
     <>
     {isLoading ?
      showActivity()
      :null}
       <ScrollView 
       contentContainerStyle={styles.container}
      //  contentContainerStyle={{ flexGrow: 1 }}
       >
          <SafeAreaView style={styles.formContainer}>
              <View style={styles.logoContainer}>
                <Image
                style={styles.logo}
                source={require("../../assests/Logo.png")}
                />
              </View>

              <View style={styles.inputContainer}>
                {/* <TextInput
                style={styles.input1}
                /> */}
                {/* <TextInput
                style={styles.input2}
                /> */}
                <Fumi
                label={'Email'}
                iconClass={FontAwesomeIcon}
                iconName={'user'}
                iconColor={AppColors.primary}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                style={styles.input}
                labelStyle={{marginTop:-4}}
                onChangeText={setEmail}
              />
                               
              <Fumi
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={AppColors.primary}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                style={styles.input}
                labelStyle={{marginTop:-4}}
                secureTextEntry={true}
               onChangeText={setPassword}
              />

              {/* <Fumi
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={AppColors.primary}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                style={styles.input}
                labelStyle={{marginTop:-4}}
                secureTextEntry={true}
              /> */}
            
              </View>

              <View style={styles.errorContainer}>
                {
                Object.keys(error).length?
                <Text style={styles.errorText}>
                  {/* {error[0]} */}
                  {error[Object.keys(error)[0]]}
                </Text>
                :
                <></>
                }
                
              </View>
              
          <View
          style={styles.buttonContainer}
          >
          {/* <Pressable onPress={()=>{console.log("press")}}
          style={styles.button}
          >
            
          </Pressable> */}
          <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={()=>{onClickSignin()}}
          >
              <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            
          <Text style={styles.text}>Do not have an account? 
          </Text>

          <TouchableOpacity
          onPress={()=>{navigation.navigate('Signup')}}
          > 
            <Text style={styles.text1}>
             Register
            </Text>
           </TouchableOpacity>
          </View>

          <View style={styles.FpView}>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Fpass')}}
          > 
            <Text style={styles.text1}>
             Forgot Password?
            </Text>
           </TouchableOpacity>
          </View>

          </SafeAreaView>
       
      </ScrollView>
      
     </>
    
         )
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1  
    // backgroundColor:'red'
  },
  formContainer:{
    flex:1,
    flexGrow : 1,
    // backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },
  logoContainer:{
    // height:hp("20%"),
    // width:wp("40%"),
    marginTop:hp("-4%"),
    marginBottom:hp("4%"),
    // backgroundColor:'black'
  },
  inputContainer:{
    // backgroundColor:'blue',
  },
  input:{
    marginVertical:hp('0.5%'),
    borderRadius:30,
    width:wp("70%"),
    elevation:1
  },
  input1:{
    backgroundColor:'rgba(128,128,128,0.3)',
    paddingLeft:wp("6%"),
    borderRadius:25,
    marginVertical:hp('0.5%')
  },
  input2:{
    backgroundColor:'rgba(128,128,128,0.3)',
    paddingLeft:wp("6%"),
    marginVertical:hp('0.5%')


  },
  errorContainer:{
    // backgroundColor:'black',
    marginVertical:hp('0.5%'),
    alignItems:'center',
    width:wp("70%")

  },
  logo:{
    width: wp("35%"),
    height:hp('21%')
  },
  errorText:{
    ...material.subheading,
    color:'red',
    fontStyle: 'italic'
  },
  button:{
    // width:wp("1%")
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    backgroundColor:AppColors.primary,
    height:hp("7%"),
    width:wp("70%"),
    elevation: 4
  },
  buttonContainer:{
  },
  buttonText:{
    ...material.title,
    color:'white',
  },
  textContainer:{
    marginTop:hp("0.5%"),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    ...material.subheading
  },
  text1:{
    ...material.title,
    color:AppColors.primary,
    marginLeft:wp('1%')
  },
  overlayLoadingContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent:'center',
    alignItems:'center',
    zIndex: 1,
    opacity: 0.4,
    backgroundColor: 'black'
 },
 FpView:{
 }
})
export default Login