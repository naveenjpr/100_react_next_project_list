import axios from "axios"
import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import prbackgroundimage from "../../assets/prbackgroundimageProducts.webp"
import loadingImg from "../../assets/Spinning line.gif"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"

export default function ProductFilter() {
  const location = useLocation()

  const [categoryshow, setcategoryshow] = useState([]) // कैटेगरी की सूची को स्टोर करने के लिए।
  const [catname, setcatname] = useState("") // चुनी हुई कैटेगरी का नाम स्टोर करने के लिए।
  const [productshow, setproductshow] = useState([]) // उत्पादों की सूची को स्टोर करने के लिए।

  const productList = () => {
    if (catname === "") {
      // अगर कोई कैटेगरी नहीं चुनी गई है, तो सभी उत्पाद fetch करें।
      axios
        .get("https://dummyjson.com/products")
        .then((result) => {
          setproductshow(result.data.products) // उत्पादों की सूची सेट करें।
        })
        .catch((error) => {
          toast.error(error) // एरर होने पर टोस्ट मैसेज दिखाएं।
        })
    } else {
      // अगर कैटेगरी चुनी गई है, तो उस कैटेगरी के उत्पाद fetch करें।
      axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((result) => {
          setproductshow(result.data.products) // उत्पादों की सूची सेट करें।
        })
        .catch((error) => {
          toast.error(error) // एरर होने पर टोस्ट मैसेज दिखाएं।
        })
    }
  }

  const categorydata = () => {
    axios
      .get("https://dummyjson.com/products/category-list") // कैटेगरी की सूची fetch करें।
      .then((result) => {
        setcategoryshow(result.data) // कैटेगरी की सूची सेट करें।
      })
      .catch((error) => {
        toast.error(error) // एरर होने पर टोस्ट मैसेज दिखाएं।
      })
  }

  useEffect(() => {
    categorydata() // कैटेगरी डेटा fetch करें।
    productList() // उत्पाद डेटा fetch करें।
  }, [catname]) // जब भी catname बदले, उत्पादों की सूची को अपडेट करें।

  return (
    <>
      <div>{location.pathname === "/ProductFilter" ? <Header /> : null}</div>

      <section
        className="w-full grid md:grid-cols-[20%_auto] grid-cols-[30%_auto] md:gap-4 gap-[2px] md:p-4 p-0"
        style={{ backgroundImage: `url(${prbackgroundimage})` }} // बैकग्राउंड इमेज सेट करें।
      >
        {/* Sidebar */}
        <div className="border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow md:p-4 p-2 bg-[#ff7f50] sticky top-4 h-screen overflow-scroll">
          <h1 className="text-lg font-bold mb-4">Category</h1>
          <ul className="space-y-2">
            <li
              className="cursor-pointer flex items-center space-x-2"
              onClick={() => setcatname("")} // "All products" पर क्लिक करने पर catname को रीसेट करें।
            >
              <input type="radio" checked={catname === ""} />
              All products
            </li>

            {categoryshow.length > 0 ? ( // अगर कैटेगरी डेटा उपलब्ध है, तो उसे दिखाएं।
              categoryshow.map((v, i) => (
                <>
                  <li
                    key={i}
                    className="cursor-pointer flex items-center space-x-2"
                    onClick={() => setcatname(v)} // कैटेगरी पर क्लिक करने पर catname सेट करें।
                  >
                    <input type="radio" checked={catname === v} value={v} />
                    <span className="text-sm">{v}</span>
                  </li>
                </>
              ))
            ) : (
              <li>
                {" "}
                <img
                  src={loadingImg}
                  alt=""
                  className="w-[100%]  h-[100%]"
                />{" "}
                {/* लोडिंग इमेज दिखाएं। */}
              </li>
            )}
          </ul>
        </div>
        {/* Products */}
        <div className="border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
          <h2 className="text-center text-2xl font-bold mb-4 text-[white]">
            Products search by category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-screen overflow-y-auto relative">
            {productshow.length > 0 ? ( // अगर उत्पाद डेटा उपलब्ध है, तो उसे दिखाएं।
              productshow.map((v, i) => <ProductCart key={i} vale={v} />)
            ) : (
              <div className="col-span-4 text-center absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[50%]">
                <img src={loadingImg} alt="" className="w-[100%]  h-[100%]" />{" "}
                {/* लोडिंग इमेज दिखाएं। */}
              </div>
            )}
          </div>
        </div>
        <ToastContainer /> {/* टोस्ट मैसेज दिखाने के लिए कंटेनर। */}
      </section>
    </>
  )
}

function ProductCart({ vale }) {
  return (
    <div className="max-w-sm h-[500px] mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={vale.thumbnail || "https://via.placeholder.com/300"} // उत्पाद की थंबनेल इमेज।
        alt={vale.title}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{vale.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {vale.description.slice(0, 100)} // उत्पाद का विवरण (100 अक्षरों तक)।
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${vale.price.toFixed(2)} // उत्पाद की कीमत।
          </span>
          {vale.discountPercentage && ( // अगर डिस्काउंट है, तो उसे दिखाएं।
            <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
              {`-${vale.discountPercentage}%`}
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-gray-500">{`Category: ${vale.category}`}</p>
      </div>
    </div>
  )
}
