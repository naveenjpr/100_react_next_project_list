import React from "react";
import Header from "../../Common page/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context_api/MainContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
  const location = useLocation();
  const { userinfo, setuserinfo } = useContext(LoginContext);

  let navigate = useNavigate();
  let register = (event) => {
    event.preventDefault();

    let obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile_number: event.target.mobile_number.value,
      password: event.target.password.value,
    };
    axios
      .post("https://rss-feed-node-js.onrender.com/api/frontend/users/register", obj)
      .then((result) => {

        if (result.data.status) {
          toast.success(result.data.message);
          // setuserinfo(result.data.userData);

          setTimeout(()=>{

            navigate("/Practics_notes_daily")
          },2000)
        } else {
          toast.error(result.data.error );
        }
      })
      .catch((error) => {
        console.log("AxiosError Details:", error);

        // ✅ FRONTEND में error toast से दिखाएं:
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message); // जैसे: "Email ID already registered!"
        } else {
          toast.error("कुछ गलत हो गया, कृपया फिर से प्रयास करें।");
        }
      });     
  };

  return (
    <>
      <div>{location.pathname === "/Register" ? <Header /> : null}</div>;
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
              <ToastContainer position="top-right" autoClose={3000} />
        
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form onSubmit={register} className="space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
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
                name="mobile_number"
                required
                placeholder="Enter your mobile number"
                maxLength={10}
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
                required
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
