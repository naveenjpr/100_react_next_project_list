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
import ImagetoWebPConverte from "./pages/Image-to-WebP-Converter/Image-to-WebP-Converte.jsx"
import Count_Down from "./pages/digital-clock/Digital-clock.jsx"
import To_do_list from "./pages/To_do_List/To_do_list.jsx"
import QuizApp from "./pages/Quiz_app/Quiz.jsx"
import Reserved_Keywords from "./pages/Reserved_Keywords/Reserved_Keywords.jsx"
import Wordpress from "./pages/wordpress/Wordpress.jsx"
import Practics_notes_daily from "./pages/Practics_notes_daily/Practics_notes_daily.jsx"
import Loading from "./pages/Loading/Loading.jsx"
import UseRef from "./pages/useRef/useRef.jsx"
import React_pagination from "./pages/React_pagination/React_pagination.jsx"
import Login from "./pages/Authentication/Login.jsx"
import Register from "./pages/Authentication/Register.jsx"
import MainContext from "./pages/context_api/MainContext.jsx"
import Toolkit from "./pages/toolkit-project/toolkit.jsx"
import { Provider } from "react-redux"
import store from "./pages/toolkit-project/store/store.js"
import Editable_navbar from "./pages/Editable/Editable_navbar.jsx"
import Edit_logo from "./pages/Editable/Edit_logo.jsx"
import Edit_navbar_or_logo_localstorage from "./pages/Editable/Edit_navbar_or_logo_localstorage.jsx"
import Editable_navbar_api from "./pages/Editable/Editable_navbar_api.jsx"
import Add_new_field_localStorage from "./pages/Add_new_field/Add_new_field.jsx"
import Add_new_field_api from "./pages/Add_new_field/Add_new_field_api.jsx"
import MultistepForm from "./pages/multi-step-form/multi -step-form/MultistepForm.jsx"

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
 
  //Image-to-WebP-Converte
  {
    path: "/Image-to-WebP-Converte",
    element: <ImagetoWebPConverte/>,
  },
  {
    path: "/Count_Down",
    element: <Count_Down/>,
  },
  {
    path: "/To_do_list",
    element: <To_do_list/>,
  },
  {
    path: "/QuizApp",
    element: <QuizApp/>,
  },
  {
    path: "/Reserved_Keywords",
    element: <Reserved_Keywords/>,
  },
  {
    path: "/Wordpress",
    element: <Wordpress/>,
  },
  {
    path:"/Practics_notes_daily",
    element:<Practics_notes_daily/>
  },
  {
    path:"/Loading",
    element:<Loading/>
  },
  {
    path:"/UseRef",
    element:<UseRef/>
  },
  {
    path:"/React_pagination",
    element:<React_pagination/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"Toolkit",
    element:<Toolkit/>
  },
  {
    path:"/Editable/navbar",
    element:<Editable_navbar/>
  },
  {
    path:"/Editable/logo",
    element:<Edit_logo/>
  },
  {
    path:"/Edit_navbar_or_logo_localstorage",
    element:<Edit_navbar_or_logo_localstorage/>
  },
  {
    path:"/Editable_navbar_api",
    element:<Editable_navbar_api/>
  },
  {
    path:"/Add_new_field_localStorage",
    element:<Add_new_field_localStorage/>

  },
  {
    path:"/Add_new_field_api",
    element:<Add_new_field_api/>
  },
  {
  path: "/multistep-form/*",
  element: <MultistepForm/>,
},
])
createRoot(document.getElementById("root")).render(
  <Provider store={store}>

  <MainContext>
    <RouterProvider router={router} />
  </MainContext>
  </Provider>
)
