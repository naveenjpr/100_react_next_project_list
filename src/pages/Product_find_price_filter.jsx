import React, { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import ratingImage from "../assets/colorful-rating-icons-set_.jpg"

export default function Product_find_price_filter() {
  const [productshow, setproductshow] = useState([]) // All products
  const [filteredProducts, setFilteredProducts] = useState([]) // Filtered products
  const [minPrice, setMinPrice] = useState(100) // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(2000) // Maximum price filter
  const [minRating, setMinRating] = useState(3) // Minimum rating filter

  // Fetch products from API
  const productList = () => {
    axios
      .get("https://dummyjson.com/products/category/smartphones")
      .then((result) => {
        setproductshow(result.data.products)
        setFilteredProducts(result.data.products) // Initialize with all products
      })
      .catch((error) => {
        toast.error(error.message || "Failed to fetch products")
      })
  }

  // Filter products based on price and rating
  const filterProducts = () => {
    const filtered = productshow.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.rating >= minRating
    )
    setFilteredProducts(filtered)
  }

  let clearData = () => {
    setMinPrice(100) // Reset minimum price
    setMaxPrice(2000) // Reset maximum price
    setMinRating(3) // Reset minimum rating
    setFilteredProducts(productshow) // Reset filtered products to show all
  }

  // Re-filter whenever price or rating changes
  useEffect(() => {
    filterProducts()
  }, [minPrice, maxPrice, minRating])

  // Fetch products on initial render
  useEffect(() => {
    productList()
  }, [])

  return (
    <>
      <div className="w-full px-4 md:px-8 h-screen overflow-scroll">
        <h1 className="text-center py-[10px] font-[500] text-[25px] text-[red]">
          Product Finder with Price and Rating Filter
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-4"
          style={{ backgroundImage: `url(${ratingImage})` }}
        >
          <aside className="md:h-auto max-h-[calc(100vh-20px)] h-auto border-solid bg-[#00ced1] shadow-lg md:p-4 p-2 rounded-lg sticky top-0 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-center font-bold text-sm md:text-base">
                FILTERS
              </h1>
              <button
                className="text-red-500 underline text-sm"
                onClick={clearData}
              >
                Clear
              </button>
            </div>

            {/* Price Filter */}
            <div className="mt-2 md:mt-4 border-2 border-solid border-[#682aee] p-0 md:p-4 rounded-lg">
              <h3 className="font-semibold text-center text-base md:text-lg text-brown-500">
                Price
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <label className="text-sm w-12">Min</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={minPrice}
                  className="flex-1 accent-pink-500"
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  type="number"
                  value={minPrice}
                  className="w-16 text-sm border rounded text-center"
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <label className="text-sm w-12">Max</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  className="flex-1 accent-pink-500"
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <input
                  type="number"
                  value={maxPrice}
                  className="w-16 text-sm border rounded text-center"
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
              <p className=" md:block hidden text-sm font-medium mt-2">
                Price: ${minPrice} - ${maxPrice}
              </p>
            </div>

            {/* Rating Filter */}
            <div className="mt-1 md:mt-4 border-2 border-solid border-[#682aee] p-0 md:p-4 rounded-lg">
              <h3 className="font-semibold text-center text-base md:text-lg text-brown-500">
                Rating
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={minRating}
                  className="flex-1 accent-green-500"
                  onChange={(e) => setMinRating(Number(e.target.value))}
                />
                <input
                  type="number"
                  value={minRating}
                  className="w-16 text-sm border rounded text-center"
                  onChange={(e) => setMinRating(Number(e.target.value))}
                />
              </div>
              <p className="text-sm font-medium mt-2">
                Minimum Rating: {minRating}+
              </p>
            </div>
          </aside>

          {/* Product Display */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((v, i) => (
                <div
                  key={i}
                  className="border p-4 bg-[gold] shadow-lg rounded-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]"
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-40 rounded mb-2"
                  />
                  <h2 className="font-bold text-lg truncate">{v.title}</h2>
                  <p className="text-sm text-gray-700">${v.price}</p>
                  <p className="text-sm text-gray-700">Rating: {v.rating}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No products available under the selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
