import React, { useState,useEffect, useRef } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch,TouchableOpacity } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
// import { CountryCode, Country } from './src/types'



export const Countrypicker=({sendCountryCode})=> {
  const [countryCode, setCountryCode] = useState('IN')
  const [country, setCountry] = useState(null)
  const [callingCode, setcallingCode] = useState('91')
  const [withCountryNameButton, setWithCountryNameButton] = useState(
    false,
  )
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(true)
  const [isOpen, setisOpen] = useState(false)
// var isOpen = false
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  const codeRef = useRef(null)
  useEffect(() => {
    //   effect
    //   return () => {
    //       cleanup
    //   }
    // console.log(country.callingCode)
    if(country){
        setcallingCode(country.callingCode)
        sendCountryCode(country.callingCode)
    }else{
        sendCountryCode('91')
    }
  }, [country])
 
  function onClickCode(){
    //   console.log(codeRef)
      setisOpen(!isOpen)

    //   if(isOpen){
    //     isOpen=false
    //     return false
    //   }else{
    //     isOpen=true
    //     return true
    //   }
  }
useEffect(() => {
    
}, [isOpen])
  return (
    <View style={styles.container}>
      {/* <Option
        title='With country name on button'
        value={withCountryNameButton}
        onValueChange={setWithCountryNameButton}
      />
      <Option title='With flag' value={withFlag} onValueChange={setWithFlag} />
      <Option
        title='With emoji'
        value={withEmoji}
        onValueChange={setWithEmoji}
      />
      <Option
        title='With filter'
        value={withFilter}
        onValueChange={setWithFilter}
      />
      <Option
        title='With calling code'
        value={withCallingCode}
        onValueChange={setWithCallingCode}
      />
      <Option
        title='With alpha filter code'
        value={withAlphaFilter}
        onValueChange={setWithAlphaFilter}
      /> */}
      <View
      ref={codeRef}
      >
        <CountryPicker
            {...{
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,
            withEmoji,
            onSelect,
            }}
            animationType={'slide'}
            visible={isOpen}
            onClose={()=>{setisOpen(false)}}
            // visible
        />
      </View>
      
      <TouchableOpacity onPress={onClickCode} activeOpacity={1}>
        <Text >
            {'+'+callingCode}
        </Text>
      </TouchableOpacity>
      
      {/* <View>
              <Text>h</Text>
          </View> */}
      {/* <Text style={styles.instructions}>Press on the flag to open modal</Text>
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )} */}
    </View>
  )
}
export default Countrypicker
const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row'
    },
    welcome: {
      fontSize: 17,
      textAlign: 'center',
      margin: 5,
    },
    instructions: {
      fontSize: 10,
      textAlign: 'center',
      color: '#888',
      marginBottom: 0,
    },
    data: {
      maxWidth: 250,
      padding: 10,
      marginTop: 7,
      backgroundColor: '#ddd',
      borderColor: '#888',
      borderWidth: 1 / PixelRatio.get(),
      color: '#777',
    },
  })