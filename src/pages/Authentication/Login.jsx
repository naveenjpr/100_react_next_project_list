import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Common page/Header";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { LoginContext } from "../context_api/MainContext";

export default function Login() {
  const location = useLocation();
    const { userinfo, setuserinfo } = useContext(LoginContext);
  
let navigate=useNavigate()
  let loginHandler = (event) => {
    event.preventDefault();
    let obj = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // /javascript/view
    axios
      .post("https://rss-feed-node-js.onrender.com/api/frontend/users/login", obj)
      .then((result) => {
        if (result.data.status == true) {
          toast.success("Login successful!");
          setuserinfo(result.data.token); // or whatever structure your API returns

          setTimeout(()=>{

            navigate("/Practics_notes_daily")
          },2000)
        } else {
          toast.error("Login failed: " + result.data.message);

        }

        console.log(result.data);
      })
      .catch((error) => {

        console.error("Login error:", error);
        toast.error("Something went wrong. Please try again.");
      });
  };
  useEffect(() => {
    if( userinfo){

      navigate('/Practics_notes_daily')
    }
  }, [])
  

  return (
    <>
      <div>{location.pathname === "/Login" ? <Header /> : null}</div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ToastContainer position="top-right" autoClose={3000} />

        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form className="space-y-4" onSubmit={loginHandler}>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
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
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <Link to="/Register">
            <button className="w-full bg-blue-600 text-white py-2 my-[10px] rounded-lg hover:bg-blue-700 transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
