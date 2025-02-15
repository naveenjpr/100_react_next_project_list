import React from "react"
import Header from "../Common page/Header"
import Percentage from "./percentage"
import PrimeNumber from "./prime_number"
import Word_count from "./letter_count"
import Word_counter from "./Word_counter"
import Password from "./password_generator/Password.jsx"
import WeatherApp from "./Weather_app/Weather.jsx"
import Product_filter from "./Product_filter"
import Tapinng from "./Tapinng"
import Product_find_price_filter from "./Product_find_price_filter.jsx"
import Calculator from "./Calculator/Calculator.jsx"
import Randomcolor from "./Randomcolor.jsx"
import ImageToText from "./ImageToText/imageconverttotext.jsx"
import Modalshow from "./Modalshow/modalshow.jsx"
import Form_data_show_to_table from "./form_data_show_to_table/form_data_show_to_table.jsx"
import Movie from "./Movie/Movie.jsx"
import Mega_Menu from "./Mega_Menu/Mega_Menu.jsx"

export default function Home() {
  return (
    <div>
      <Header />
      <Mega_Menu />
      <Movie />
      <Modalshow />
      <ImageToText />
      <Randomcolor />
      <Calculator />
      <Product_find_price_filter />

      <Tapinng />
      <Product_filter />
      <WeatherApp />
      <Password />
      <Word_count />
      <Word_counter />
      <Percentage />
      <PrimeNumber />
      <Form_data_show_to_table />
    </div>
  )
}
