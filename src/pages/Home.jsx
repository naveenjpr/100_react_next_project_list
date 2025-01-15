import React from "react"
import Header from "../Common page/Header"
import Percentage from "./percentage"
import PrimeNumber from "./prime_number"
import Word_count from "./letter_count"
import Word_counter from "./Word_counter"
import Password from "./Password"
import WeatherApp from "./Weather"
import Product_filter from "./Product_filter"

export default function Home() {
  return (
    <div>
      <Header />
      <Product_filter/>
      <WeatherApp />
      <Password />
      <Percentage />
      <PrimeNumber />
      <Word_count />
      <Word_counter />
    </div>
  )
}
