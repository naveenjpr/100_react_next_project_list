import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import All_pdf_convert_one_pdf from "./pages/All_pdf_convert_one_pdf/All_pdf_convert_one_pdf.jsx"
import Faq from "./pages/Accordion/Faq.jsx"
import Calculator from "./pages/Calculator/Calculator.jsx"
import FormDataShowToTable from "./pages/form_data_show_to_table/form_data_show_to_table.jsx"
import Header_Menu_navbar from "./pages/Header_Menu_navbar/Header_Menu_navbar.jsx"
import ImageToText from "./pages/ImageToText/imageconverttotext.jsx"
import Letter_count from "./pages/letter_count/letter_count.jsx"
import LightBox from "./pages/Light_box/Light_box.jsx"
import Modalshow from "./pages/Modalshow/modalshow.jsx"
import Mega_Menu from "./pages/Mega_Menu/Mega_Menu.jsx"
import Movie from "./pages/Movie/Movie.jsx"
import Password from "./pages/password_generator/Password.jsx"
import Percentage from "./pages/percentage/percentage.jsx"
import PrimeNumber from "./pages/prime_number/prime_number.jsx"
import ProductFilter from "./pages/Product_filter/Product_filter.jsx"
import Product_find_price_filter from "./pages/Product_find_price_filter/Product_find_price_filter.jsx"
import Randomcolor from "./pages/Randomcolor/Randomcolor.jsx"
import Tapinng from "./pages/Tapinng/Tapinng.jsx"
import WeatherApp from "./pages/Weather_app/Weather.jsx"
import Word_counter from "./pages/Word_counter/Word_counter.jsx"
import Tooltip from "./pages/Tooltip/Tooltip.jsx"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx"
import SliderType from "./pages/SliderType/SliderType.jsx"
import BgRemover from "./pages/Bg Remover/BgRemover.jsx"
import HashtagGenerator from "./pages/Hastag_generaator/Hastag_generaator.jsx"
import RssFeed from "./pages/Rss Feed/Rss-Feed.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  //NotFoundPage
  {
    path: "*",
    element: <NotFoundPage />,
  },
  //Faq
  {
    path: "/Faq",
    element: <Faq />,
  },
  //All_pdf_convert_one_pdf
  {
    path: "/All_pdf_convert_one_pdf",
    element: <All_pdf_convert_one_pdf />,
  },

  //Calculator
  {
    path: "/calculator",
    element: <Calculator />,
  },
  //FormDataShowToTable
  {
    path: "/FormDataShowToTable",
    element: <FormDataShowToTable />,
  },

  //Header_Menu_navbar
  {
    path: "/Header_Menu_navbar",
    element: <Header_Menu_navbar />,
  },
  //ImageToText
  {
    path: "/ImageToText",
    element: <ImageToText />,
  },
  {
    path: "/Letter_count",
    element: <Letter_count />,
  },
  {
    path: "/LightBox",
    element: <LightBox />,
  },
  {
    path: "/Mega_Menu",
    element: <Mega_Menu />,
  },

  //Modalshow
  {
    path: "/Modalshow",
    element: <Modalshow />,
  },

  //Movie
  {
    path: "/Movie",
    element: <Movie />,
  },
  //Password
  {
    path: "/Password",
    element: <Password />,
  },

  //Percentage
  {
    path: "/Percentage",
    element: <Percentage />,
  },
  //PrimeNumber
  {
    path: "/PrimeNumber",
    element: <PrimeNumber />,
  },

  //ProductFilter
  {
    path: "/ProductFilter",
    element: <ProductFilter />,
  },

  //Product_find_price_filter
  {
    path: "/Product_find_price_filter",
    element: <Product_find_price_filter />,
  },

  //Randomcolor
  {
    path: "/Randomcolor",
    element: <Randomcolor />,
  },

  //Tapinng
  {
    path: "/Tapinng",
    element: <Tapinng />,
  },

  //WeatherApp
  {
    path: "/WeatherApp",
    element: <WeatherApp />,
  },
  //Word_counter
  {
    path: "/Word_counter",
    element: <Word_counter />,
  },
  //Faq
  {
    path: "/Faq",
    element: <Faq />,
  },
  //Tooltip
  {
    path: "/Tooltip",
    element: <Tooltip />,
  },
  //SliderType
  {
    path: "/SliderType",
    element: <SliderType />,
  },
  //BgRemover
  {
    path: "/BgRemover",
    element: <BgRemover/>,
  },
  //HashtagGenerator
  {
    path: "/Hash-tag-Generator",
    element: <HashtagGenerator/>,
  },
  {
    path: "/Rss-Feed",
    element: <RssFeed/>,
  },
])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
