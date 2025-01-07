
import React from "react"
import Header from "../Common page/Header"
import Percentage from "./percentage"
import PrimeNumber from "./prime_number"
import Word_count from "./letter_count"
import Word_counter from "./Word_counter"
import Password from "./Password"


export default function Home() {
  return (
    <div>
    
      <Header />
      <Password/>
      <Percentage/>
      <PrimeNumber/>
      <Word_count/>
      <Word_counter/>
    </div>
  )
}
