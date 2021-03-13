import React,{ Component, useState, useEffect, createContext} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const CartContext = createContext();
// const ThemeContext = React.createContext(["light", () => {}]);

export const CartProvider = ({ children }) =>{
    const [Cart, setCart] = useState(new Set());
    // const [Cartsize,]
   function updateCart(item){
    setCart(oldState => {
      var newState = oldState.add(item)
      return(newState)
    });
    // console.log(Cart.size)
   }
   function removeCartItem(id){
    //  console.log(id)
    setCart(oldState => {
      for (const k of oldState.values()) {
        if(k==id){
          oldState.delete(k)
        }
        }
      return(oldState)
    });
    
   }
   return(
  <CartContext.Provider
    value={{Cart,updateCart,removeCartItem}}
  >
    {children}
  </CartContext.Provider>
  )
}
