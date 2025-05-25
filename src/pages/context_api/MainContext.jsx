import React, { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

export let LoginContext = createContext() 

export default function MainContext({children}) {
// localStorage.getItem("key");

    let [userinfo, setuserinfo] =  useState(
        JSON.parse(localStorage.getItem("NAVEEN")) ?? null
      );

   let obj={
        userinfo,
        setuserinfo
    }
    useEffect(()=>{
        localStorage.setItem("NAVEEN", JSON.stringify(userinfo));
 
    },[userinfo])
    return (
    <LoginContext.Provider value={obj} >
        {children}
    </LoginContext.Provider >
  )
}
// localStorage.setItem("key", "value");
// localStorage.getItem("key");
//localStorage.removeItem("key");
//localStorage.clear();
