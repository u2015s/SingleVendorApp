import React,{ Component, useState, useEffect,useRef} from 'react'
import {View,Text,StyleSheet,SafeAreaView, TextInput,Image,Pressable, Button,TouchableOpacity,ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {isAndroid,logErrorWithMessage } from '../Utilities/HelperFunction'
import { material } from 'react-native-typography'
// import 'react-phone-number-input/style.css'
import AppColors from '../../assests/AppColor'
import RNOtpVerify from 'react-native-otp-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export const Otpv2 = ({route,navigation}) =>{
    const [Otp, setOtp] = useState('')
    const [otpArray, setOtpArray] = useState(['', '', '', '']);


    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);
    useEffect(() => {
      // docs: https://github.com/faizalshap/react-native-otp-verify
     
    // RNOtpVerify.getHash()
    // .then(console.log)
    // .catch(console.log);

      console.log('hello')
      RNOtpVerify.getOtp()
        .then(p =>
          RNOtpVerify.addListener(message => {
            try {
              console.log('hi32')
              // console.log(message)
              if (message) {
                const messageArray = message.split("\n");
                console.log(messageArray[1])
                if (messageArray[1]) {
                  const otp = messageArray[1].split(' ')[0];
                  console.log(otp)
                  setOtp(otp)
                  // if (otp.length === 4) {
                  //   setOtpArray(otp.split(''));
                  //   // console.log('hi38')
                    
                  //   console.log(otpArray)
                  //   // to auto submit otp in 4 secs
                  //   // setAutoSubmitOtpTime(AUTO_SUBMIT_OTP_TIME_LIMIT);
                  //   // startAutoSubmitOtpTimer();
                  // }
                }
              }
            } catch (error) {
              // logErrorWithMessage(
              //   error.message,
              //   'RNOtpVerify.getOtp - read message, OtpVerification',
              // );
              console.log(error)
            }
          }),
        )
        .catch(error => {
          // logErrorWithMessage(
          //   error.message,
          //   'RNOtpVerify.getOtp, OtpVerification',
          // );
          console.log(error)

        });
  
      // remove listener on unmount
      return () => {
        RNOtpVerify.removeListener();
      };
    }, []);
//     getHash = () =>
//     RNOtpVerify.getHash()
//     .then(console.log)
//     .catch(console.log);

// startListeningForOtp = () =>
//     RNOtpVerify.getOtp()
//     .then(p => RNOtpVerify.addListener(this.otpHandler))
//     .catch(p => console.log(p));

//  otpHandler = (message) => {
//         const otp = /(\d{4})/g.exec(message)[1];
//         this.setState({ otp });
//         RNOtpVerify.removeListener();
//         Keyboard.dismiss();
// }


    const onOtpChange = index => {

        return value => {
          if (isNaN(Number(value))) {
            // do nothing when a non digit is pressed
            return;
          }
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index] = value;
          setOtpArray(otpArrayCopy);
    
          // auto focus to next InputText if value is not blank
          if (value !== '') {
            if (index === 0) {
              secondTextInputRef.current.focus();
            } else if (index === 1) {
              thirdTextInputRef.current.focus();
            } else if (index === 2) {
              fourthTextInputRef.current.focus();
            }
          }
        };
      };
      const onOtpKeyPress = index => {
        return ({nativeEvent: {key: value}}) => {
          // auto focus to previous InputText if value is blank and existing value is also blank
          if (value === 'Backspace'&& otpArray[index] === '') {
            if (index === 1) {
              firstTextInputRef.current.focus();
            } else if (index === 2) {
              secondTextInputRef.current.focus();
            } else if (index === 3) {
              thirdTextInputRef.current.focus();
            }
    
            /**
             * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
             * doing this thing for us
             * todo check this behaviour on ios
             */
            if (isAndroid && index > 0) {
              const otpArrayCopy = otpArray.concat();
              otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
              setOtpArray(otpArrayCopy);
            }
          }
        };
      };
      const refCallback = textInputRef => node => {
        textInputRef.current = node;
      };
      function submitOTP(){
          console.log(Otp)
          
      }


   return(
    <SafeAreaView style={styles.container}>
        <View style={styles.headtext}>
            <Text style={material.title}>
             Enter OTP Sent to {"+"+route.params.number}
            </Text>
        </View>
        <View style={styles.contactInputView}>

        {/* {[  firstTextInputRef,
            secondTextInputRef,
            thirdTextInputRef,
            fourthTextInputRef,].map((textInputRef,index)=>(
            <TextInput
            style={styles.contactInput}
            keyboardType={'numeric'}
            maxLength={1}
            key={index}
            onChangeText={onOtpChange(index)}
            value={otpArray[index]}
            autoFocus={index === 0 ? true : undefined}
            onKeyPress={onOtpKeyPress(index)}
            ref={refCallback(textInputRef)}
            />
        ))
        } */}
        
        <OTPInputView 
        pinCount={4} 
        style={{width: wp('60%'), height: hp('10%')}}
        code={Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged = {code => { setOtp(code)}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled = {(code) => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
        />

        </View>
        <View style={styles.buttonContainer}>

        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={()=>{submitOTP()}}
          >
              <Text style={styles.buttonText}>Submit OTP </Text>
          </TouchableOpacity>
    </SafeAreaView>
         )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"

    },
headtext:{
marginTop:hp("10%")
},
contactInputView:{
    // backgroundColor:'red',
    // borderWidth:1,
    marginTop:hp("2%"),
    flexDirection:'row',
    alignItems:'center'
},
contactInput:{
    marginHorizontal:wp('1%'),
    borderWidth:1,
    // borderBottomWidth:1,
    width:wp('15%'),
    height:hp('6%'),
    alignItems:'center',
    borderRadius:3,
    // paddingLeft:wp("2%"),
    fontSize:18,
    textAlign:'center'
},
button:{
    // width:wp("1%")
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    backgroundColor:AppColors.primary,
    height:hp("6%"),
    width:wp("50%"),
    elevation: 4
  },
  buttonContainer:{
      marginTop:hp("2%")
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: wp('10%'),
    height: hp('7%'),
    borderWidth: 0.7,
    borderColor:'black',
    color:'black'
  },

  underlineStyleHighLighted: {
    borderColor: AppColors.primary,
  },
})
export default Otpv2