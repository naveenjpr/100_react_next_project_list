import React, { useEffect, useState, useRef } from "react"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"

export default function FormDataShowToTable() {
  const [user, setUser] = useState([]) // सभी यूजर्स को स्टोर करता है
  const [filteredUser, setFilteredUser] = useState([]) // फिल्टर्ड यूजर्स को स्टोर करता है
  const [searchTerm, setSearchTerm] = useState("") // सर्च टर्म को स्टोर करता है
  const [editUser, setEditUser] = useState(null) // एडिट हो रहे यूजर को ट्रैक करता है
  const tableRef = useRef(null) // टेबल बॉडी के लिए रेफरेंस

  const handleSubmit = (event) => {
    event.preventDefault()

    const userDetails = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      address: event.target.address.value,
      message: event.target.message.value,
    }

    if (editUser !== null) {
      const updatedUsers = user.map((u, index) =>
        index === editUser ? userDetails : u
      )
      setUser(updatedUsers)
      setEditUser(null)
    } else {
      setUser([userDetails, ...user]) // नई एंट्री को टॉप पर जोड़ता है

      event.target.reset()
    }
    //Delete User
    const handleDelete = (index) => {
      if (window.confirm("Are you sure you want to delete this?")) {
        const updatedUsers = user.filter((_, i) => i !== index)
        setUser(updatedUsers)
      }
    }
    // Edit User
    const handleEdit = (index) => {
      setEditUser(index)
      // window.scrollTo({ top: 0, behavior: "smooth" }) // Scroll to the top of the page smoothly
    }

    useEffect(() => {
      const savedUsers = JSON.parse(localStorage.getItem("users")) || []
      setUser(savedUsers)
    }, [])
  }
  useEffect(() => {
    if (tableRef.current) {
      const lastRow = tableRef.current.querySelector("tr:last-child")
      if (lastRow) {
        lastRow.scrollIntoView({ behavior: "smooth", block: "start" })

        // Add a highlight effect
      }
    }
    localStorage.setItem("users", JSON.stringify(user))
  }, [user])

  //. सर्च टर्म के आधार पर फिल्टर करना
  useEffect(() => {
    const filtered = user.filter((u) =>
      `${u.first_name} ${u.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    setFilteredUser(filtered)
  }, [searchTerm, user])

  return (
    <div className="w-full p-4 min-h-screen">
      <h1 className="text-center font-medium md:text-[25px] text-[13px]">
        "React Application: <span> add User Data </span>
        <span className="font-medium text-[red]">"Create</span>,
        <span className="font-medium text-[red]">Read</span>,
        <span className="font-medium text-[red]">Update</span>,
        <span className="font-medium text-[red]">edit</span>,
        <span className="font-medium text-[red]">search</span>,
        <span className="font-medium text-[red]">and Delete Operations"</span>
      </h1>
      <div className="grid grid-cols-1">
        <div className="border border-solid md:w-[50%] w-[95%] mx-auto my-4 p-4 rounded-lg shadow-lg bg-white">
          <h3 className="text-center font-semibold text-lg mb-4">
            {editUser !== null ? "Edit User" : "Add User"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4" id="xyz">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <span className="text-gray-700">First Name</span>
                <input
                  type="text"
                  name="first_name"
                  defaultValue={
                    editUser !== null ? user[editUser].first_name : ""
                  }
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John"
                  required
                />
              </label>
              <label>
                <span className="text-gray-700">Last Name</span>
                <input
                  type="text"
                  name="last_name"
                  defaultValue={
                    editUser !== null ? user[editUser].last_name : ""
                  }
                  className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Doe"
                  required
                />
              </label>
            </div>
            <label>
              <span className="text-gray-700">Email Address</span>
              <input
                type="email"
                name="email"
                defaultValue={editUser !== null ? user[editUser].email : ""}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="example@mail.com"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                name="phone"
                maxLength={12} // Limits input to 10 characters
                defaultValue={editUser !== null ? user[editUser].phone : ""}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="+1234567890"
                required
              />
            </label>
            <label>
              <span className="text-gray-700">Gender</span>
              <select
                name="gender"
                defaultValue={editUser !== null ? user[editUser].gender : ""}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              <span className="text-gray-700">Address</span>
              <textarea
                name="address"
                defaultValue={editUser !== null ? user[editUser].address : ""}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
                required
              ></textarea>
            </label>
            <label>
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                defaultValue={editUser !== null ? user[editUser].message : ""}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              {editUser !== null ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        <div className="overflow-x-auto max-h-screen overflow-auto">
          <h1 className="text-lg font-semibold mb-2">Users</h1>
          <input
            type="text"
            placeholder="Search users..."
            className="border border-[grey] p-2 rounded w-[30%] mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Table to display users */}

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
                <th className="py-2 px-2 md:px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody ref={tableRef}>
              {filteredUser.length > 0 ? (
                filteredUser.map((u, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-100 text-sm md:text-base"
                  >
                    <td className="py-2 px-2 md:px-4 border">{i + 1}</td>
                    <td className="py-2 px-2 md:px-4 border">
                      {u.first_name} {u.last_name}
                    </td>
                    <td className="py-2 px-2 md:px-4 border">{u.email}</td>
                    <td className="py-2 px-2 md:px-4 border">{u.phone}</td>
                    <td className="py-2 px-2 md:px-4 border">{u.gender}</td>
                    <td className="py-2 px-2 md:px-4 border">
                      <div className="max-h-[100px] overflow-auto">
                        {u.address}
                      </div>
                    </td>
                    <td className="py-2 px-2 md:px-4 border">
                      <div className="max-h-[100px] overflow-auto">
                        {u.message}
                      </div>
                    </td>
                    <td className="py-2 px-2 md:px-4 border">
                      {/* यह बटन्स यूजर को डिलीट और एडिट करने के लिए हैं। */}
                      <button
                        onClick={() => handleDelete(i)}
                        className="mr-2 text-red-500"
                        aria-label="Delete user"
                      >
                        <MdDelete />
                      </button>
                      <button
                        onClick={() => handleEdit(i)}
                        className="text-blue-500"
                        aria-label="Edit user"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-3 text-gray-500">
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
