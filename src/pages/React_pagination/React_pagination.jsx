import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { useLocation } from "react-router-dom";
import Header from "../../Common page/Header";

export default function React_pagination() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  const [productdata, setproductdata] = useState([]);

  const limit = 10;

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (currentPage - 1) * limit
        }`
      )
      .then((result) => {
        setproductdata(result.data.products);
        settotalPages(Math.ceil(result.data.total / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <>
      <div>{location.pathname === "/React_pagination" ? <Header /> : null}</div>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 dark:text-white mb-8">
          React_pagination responsive
        </h2>
        <span className=" flex justify-center items-center text-center text-3xl font-extrabold text-blue-800 dark:text-white mb-8"> "total": 194 Entry</span>

        <div className="max-w-[1170px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {productdata.map((v, i) => (
            <WebsiteData key={v.id} data={v} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

function WebsiteData({ data }) {
  const { id, price, title } = data;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 transition duration-300 hover:shadow-xl">
      <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
        ID: <span className="text-indigo-600 dark:text-indigo-400">{id}</span>
      </h5>
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h5>
      <h5 className="text-md font-medium text-green-600 dark:text-green-400">
        Price: ${price}
      </h5>
    </div>
  );
}
// npm i react-responsive-pagination

//import ResponsivePagination from 'react-responsive-pagination';
//import 'react-responsive-pagination/themes/classic-light-dark.css';
//  const [currentPage, setCurrentPage] = useState(8);
//const totalPages = 20;
{
  /* <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    /> */
}
