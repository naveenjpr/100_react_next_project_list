import axios from "axios"
import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import prbackgroundimage from "../../assets/prbackgroundimageProducts.webp"
import loadingImg from "../../assets/Spinning line.gif"

export default function ProductFilter() {
  const [categoryshow, setcategoryshow] = useState([]) // category show
  const [catname, setcatname] = useState("") // product show logic
  const [productshow, setproductshow] = useState([]) // product show logic

  const productList = () => {
    if (catname === "") {
      axios
        .get("https://dummyjson.com/products")
        .then((result) => {
          setproductshow(result.data.products)
        })
        .catch((error) => {
          toast.error(error)
        })
    } else {
      axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((result) => {
          setproductshow(result.data.products)
        })
        .catch((error) => {
          toast.error(error)
        })
    }
  }

  const categorydata = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((result) => {
        setcategoryshow(result.data)
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  useEffect(() => {
    categorydata()
    productList()
  }, [catname])

  return (
    <section
      className="w-full grid md:grid-cols-[20%_auto] grid-cols-[30%_auto] md:gap-4 gap-[2px] md:p-4 p-0"
      style={{ backgroundImage: `url(${prbackgroundimage})` }}
    >
      {/* Sidebar */}
      <div className="border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow md:p-4 p-2 bg-[#ff7f50] sticky top-4 h-screen overflow-scroll">
        <h1 className="text-lg font-bold mb-4">Category</h1>
        <ul className="space-y-2">
          <li
            className="cursor-pointer flex items-center space-x-2"
            onClick={() => setcatname("")}
          >
            <input type="radio" checked={catname === ""} />
            All products
          </li>

          {categoryshow.length > 0 ? (
            categoryshow.map((v, i) => (
              <>
                <li
                  key={i}
                  className="cursor-pointer flex items-center space-x-2"
                  onClick={() => setcatname(v)}
                >
                  <input type="radio" checked={catname === v} value={v} />
                  <span className="text-sm">{v}</span>
                </li>
              </>
            ))
          ) : (
            <li>
              {" "}
              <img src={loadingImg} alt="" className="w-[100%]  h-[100%]" />
            </li>
          )}
          <li
            className="cursor-pointer flex items-center space-x-2"
            onClick={() => setcatname("")}
          >
            <input type="radio" checked={catname === ""} />
            All products
          </li>
        </ul>
      </div>

      {/* Products */}
      <div className="border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
        <h2 className="text-center text-2xl font-bold mb-4 text-[white]">
          Products search by category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-screen overflow-y-auto relative">
          {productshow.length > 0 ? (
            productshow.map((v, i) => <ProductCart key={i} vale={v} />)
          ) : (
            <div className="col-span-4 text-center absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[50%]">
              <img src={loadingImg} alt="" className="w-[100%]  h-[100%]" />
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

function ProductCart({ vale }) {
  return (
    <div className="max-w-sm h-[500px] mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={vale.thumbnail || "https://via.placeholder.com/300"}
        alt={vale.title}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{vale.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {vale.description.slice(0, 100)}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${vale.price.toFixed(2)}
          </span>
          {vale.discountPercentage && (
            <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded">
              {`-${vale.discountPercentage}%`}
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-gray-500">{`Category: ${vale.category}`}</p>
        {/* <button className="mt-4 w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600 transition">
          Add to Cart
        </button> */}
      </div>
    </div>
  )
}
