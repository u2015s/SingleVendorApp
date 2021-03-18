import React,{ Component, useState, useEffect, createContext} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null);
    const [userDetail, setuserDetail] = useState(null);
    // useEffect(()=>{
    //   if(user){
    //     firestore()
    //     .collection('users')
    //     .doc(user.uid)
    //     .get()
    //     .then((res)=>{
    //         // console.log(res.data())
    //         setuserDetail(res.data())
    //     })
    //     .catch(e=>{console.log(e)});
    //   }
    // },[])
    function getDetails(user){

      if(user){
        firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((res)=>{
            // console.log(res.data())
            setuserDetail(res.data())
        })
        .catch(e=>{console.log(e)});
      }
      
    }
   return(
   <AuthContext.Provider
    value={{
      userDetail,
      user,
      setUser,
      login: async (email, password) => {
        try { 
          let res = await auth().signInWithEmailAndPassword(email, password);
          if(!res){
            return res
          }
        } catch (e) {
          // console.log(e);
          // return e
          switch(e.code){
            case "auth/invalid-email":
                return "Enter a valid Email Address"
            case "auth/user-disabled":
                return "User has been disabled"
            case "auth/user-not-found":
                return "User Does Not exists"
            case "auth/wrong-password":
                return "Please Enter a vaild password"            
        }       
        }
      },
      register: async (email, password, name, gender, category, contactno) => {
        try {
          let res = await auth().createUserWithEmailAndPassword(email, password);
          if(res.user){
            firestore()
            .collection('users')
            .doc(res.user.uid)
            .set({
              uid:res.user.uid,
              email:email,
              name:name,
              // contactno:contactno,
              // gender:gender,
              // category:category
            }).catch(e=>{console.log(e)});
          }
          // console.log("user_id", auth().currentUser.uid);
          
        } catch (e) {
          console.log(e);
          switch(e.code){
            case "auth/email-already-in-use":
                return "Email is in use"
            case "auth/invalid-email":
                return "Enter a valid email address"
            case "auth/operation-not-allowed":
                return "Email is not enabled in firebase"
            case "auth/weak-password":
                return "Password is Too Weak"
        }
        }
      },
      logout: async () => {
        try {
          await auth().signOut();
          console.log('signout')
        } catch (e) {
          console.error(e);
        }
      },
      getDetails
    }}
  >
    {children}
  </AuthContext.Provider>
  )
}
