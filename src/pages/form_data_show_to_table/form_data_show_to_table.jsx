import React, { useEffect, useState } from "react"
import { useRef } from "react"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"

export default function FormDataShowToTable() {
  const [user, setUser] = useState([])
  const tableRef = useRef(null)
  console.log(tableRef)

  let getData = (event) => {
    event.preventDefault()

    let userDetails = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      address: event.target.address.value,
      message: event.target.message.value,
    }
    setUser([...user, userDetails])
    event.target.reset()
  }
  // entery delete

  let delid = (currentindex) => {
    let delfilter = user.filter((value, index) => index != currentindex)

    setUser(delfilter)

    getData()
  }
  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUser(savedUsers)
  }, [])

  // Save to localStorage whenever 'user' state updates
  useEffect(() => {
    if (user.length > 0) {
      tableRef.current?.scrollIntoView({ behavior: "smooth" })

      localStorage.setItem("users", JSON.stringify(user))
    }
  }, [user]) // Runs when 'user' state updates

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1">
        {/* Form */}
        <div className="border border-solid md:w-[50%] w-[95%] mx-auto my-4 p-4 rounded-lg shadow-lg bg-white">
          <h3 className="text-center font-semibold text-lg mb-4">
            Personal Information
          </h3>
          <form onSubmit={getData} className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">First Name</span>
                <input
                  type="text"
                  name="first_name"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Last Name</span>
                <input
                  type="text"
                  name="last_name"
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Doe"
                  required
                />
              </label>
            </div>

            {/* Email Address */}
            <label className="block">
              <span className="text-gray-700">Email Address</span>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="example@mail.com"
                required
              />
            </label>

            {/* Phone Number */}
            <label className="block">
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="+1234567890"
                required
              />
            </label>

            {/* Gender */}
            <label className="block">
              <span className="text-gray-700">Gender</span>
              <select
                name="gender"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Address */}
            <label className="block">
              <span className="text-gray-700">Address</span>
              <textarea
                name="address"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
                required
              ></textarea>
            </label>

            {/* Message */}
            <label className="block">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message"
              ></textarea>
            </label>

            {/* Submit Button */}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white text-sm md:text-base">
                <th className="py-2 px-2 md:px-4 border">No:</th>
                <th className="py-2 px-2 md:px-4 border">Full Name</th>
                <th className="py-2 px-2 md:px-4 border">Email</th>
                <th className="py-2 px-2 md:px-4 border">Phone</th>
                <th className="py-2 px-2 md:px-4 border">Gender</th>
                <th className="py-2 px-2 md:px-4 border">Address</th>
                <th className="py-2 px-2 md:px-4 border">Message</th>
                <th className="py-2 px-2 md:px-4 border">del || edit</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((v, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-100 text-sm md:text-base "
                    ref={tableRef}
                  >
                    <td className="py-2 px-2 md:px-4 border">{i + 1}</td>
                    <td className="py-2 px-2 md:px-4 border">{`${v.first_name} ${v.last_name}`}</td>
                    <td className="py-2 px-2 md:px-4 border">{v.email}</td>
                    <td className="py-2 px-2 md:px-4 border">{v.phone}</td>
                    <td className="py-2 px-2 md:px-4 border">{v.gender}</td>
                    <td className="py-2 px-2 md:px-4 border   ">
                    <div className="max-h-[75px] max-w-[100%] overflow-auto p-1">{v.address}</div>
                    </td>
                    <td className="py-2 px-2 md:px-4 border   ">
                      <div className="max-h-[75px] max-w-[100%] overflow-auto p-1">{v.message}</div>
                    </td>
                    <td className="py-2 px-2 md:px-4 border">
                      <button onClick={() => delid(i)}>
                        <MdDelete />
                      </button>
                      <button>
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-3 text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
