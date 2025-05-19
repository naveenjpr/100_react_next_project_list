import React from "react";
import Header from "../../Common page/Header";
import { Link, useLocation } from "react-router-dom";

export default function Register() {
  const location = useLocation();

  return (
    <>
      <div>{location.pathname === "/Register" ? <Header /> : null}</div>;
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form className="space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <Link to="/Login">
            <button className="w-full bg-blue-600 text-white py-2 my-[10px] rounded-lg hover:bg-blue-700 transition duration-300">
            Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
