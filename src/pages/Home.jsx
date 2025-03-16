import React from "react"
import Header from "../Common page/Header"
import Percentage from "./percentage/percentage.jsx"
import PrimeNumber from "./prime_number/prime_number.jsx"
import Word_counter from "./Word_counter/Word_counter.jsx"
import Password from "./password_generator/Password.jsx"
import WeatherApp from "./Weather_app/Weather.jsx"
import Product_filter from "./Product_filter/Product_filter.jsx"
import Tapinng from "./Tapinng/Tapinng.jsx"
import Product_find_price_filter from "./Product_find_price_filter/Product_find_price_filter.jsx"
import Calculator from "./Calculator/Calculator.jsx"
import Randomcolor from "./Randomcolor/Randomcolor.jsx"
import ImageToText from "./ImageToText/imageconverttotext.jsx"
import Modalshow from "./Modalshow/modalshow.jsx"
import Form_data_show_to_table from "./form_data_show_to_table/form_data_show_to_table.jsx"
import Movie from "./Movie/Movie.jsx"
import Mega_Menu from "./Mega_Menu/Mega_Menu.jsx"
import Letter_count from "./letter_count/letter_count.jsx"
import Header_Menu_navbar from "./Header_Menu_navbar/Header_Menu_navbar.jsx"
import Light_box from "./Light_box/Light_box.jsx"
import Faq from "./Accordion/Faq.jsx"
import All_pdf_convert_one_pdf from "./All_pdf_convert_one_pdf/All_pdf_convert_one_pdf.jsx"
import Tooltip from "./Tooltip/Tooltip.jsx"
import SliderType from "./SliderType/SliderType.jsx"
import BgRemover from "./Bg Remover/BgRemover.jsx"
import HashtagGenerator from "./Hastag_generaator/Hastag_generaator.jsx"

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
      <Letter_count />
      <Word_counter />
      <Percentage />
      <PrimeNumber />
      <Header_Menu_navbar />
      <Light_box />
      <Faq />
      <All_pdf_convert_one_pdf />
      <Form_data_show_to_table />
      <Tooltip />
      <SliderType />
      <BgRemover />
      <HashtagGenerator/>
    </div>
  )
}
