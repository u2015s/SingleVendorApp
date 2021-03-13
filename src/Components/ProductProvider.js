import React,{ Component, useState, useEffect, createContext} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) =>{
   return(
   <ProductContext.Provider
    value={{
        Product:[{
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "The King of Drugs",
          src:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
          price:'1000',
          MRP:'2000',
          rating:3.5,
          totalRatings:5,
          totalReviews:5,
          }]

    }
    }
  >
    {children}
  </ProductContext.Provider>
  )
}
