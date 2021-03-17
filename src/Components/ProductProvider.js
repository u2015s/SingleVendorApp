import React,{ Component, useState, useEffect, createContext} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) =>{
  const [Product,setProduct]= useState([])
  useEffect(()=>{
    firestore()
      .collection('products')
      .get()
      .then((res)=>{
          var data=[]
          res.forEach((doc) => {
            data.push(doc.data())
        });
        setProduct(data)
      })
      .catch(e=>{console.log(e)});
  },[])

  function getProductDetails(id,callback){ 
       firestore()
      .collection('products')
      .doc(id)
      .collection('moreDetail')
      .doc('moreDetail')
      .get()
      .then((res)=>{
        res.data()
      callback(res.data())
         
      })
      .catch(e=>{console.log(e)});

  }
  function getReviews(id,callback){ 

    firestore()
    .collection('products')
    .doc(id)
    .collection('reviews')
    .get()
    .then((res)=>{
      var data=[]
        res.forEach((doc) => {
          data.push(doc.data())
      });
    callback(data)
       
    })
    .catch(e=>{console.log(e)});
  }

   return(
   <ProductContext.Provider
    value={{Product,getProductDetails,getReviews}}
  >
    {children}
  </ProductContext.Provider>
  )
}
