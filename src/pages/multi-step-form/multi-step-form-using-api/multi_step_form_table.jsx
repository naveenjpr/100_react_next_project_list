import React, { useEffect, useState } from "react";
import { use } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Multi_step_form_table() {
  const [multiview, setmultiview] = useState([]);

  console.log("multiview:", multiview);
  let getCategory = async () => {
    let fetchData = await fetch(
      "https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/view",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // Agar body me kuch nahi to blank object theek hai
      }
    );

    let resData = await fetchData.json();
    setmultiview(resData.data); // API jo return karegi wo yaha milegi
  };


  let deleteEntry = async (id) => {

    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        let fetchData = await fetch(`https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/delete/${id}`, {
          method: "DELETE", // ✅ method uppercase likhna best practice
        });

        let resData = await fetchData.json(); // ✅ response read
        console.log(resData);

        if (resData.status) {
          console.log("Deleted Successfully");
          getCategory();

        } else {
          console.log("Delete Failed");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }


  };

  let statusChange = async (id, Status) => {
    console.log("id:", id);
    console.log("Status:", Status);

    let obj = {
      id: id,
      Status: !Status   // status ko toggle kar diya
    };

    let fetchData = await fetch(
      "https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/statuschange", // ✅ correct API
      {
        method: "PUT", // ✅ Ensure POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj), // ✅ object send kart diye
      }
    );

    let res = await fetchData.json();
    getCategory();

  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              No.
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              First Name
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Street
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              City
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              State
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Zip Code
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Highest Degree
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Institution
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Graduation Year
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Company
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Position
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Years
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Job Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Salary
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
              Location
            </th>
            <th>action</th>
            <th>status</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {multiview.length > 0
            ? multiview.map((v, i) => {
              console.log("v:", v);
              return (
                <tr key={i}>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {i + 1}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.firstName}&nbsp;{v.lastName}                    </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.email}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.phone}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.street}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.city}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.state}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.zipCode}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.highestDegree}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.institution}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.graduationYear
                    }                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.company}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.position}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.graduationYear
                    }                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.jobType
                    }                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v
                      .salary}                    </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">
                    {v.location}                    </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-blue-400">

                    <button onClick={() => deleteEntry(v._id)} className="text-red-500 hover:text-red-700">

                      <MdDelete className="h-5 w-5" />

                    </button>
                  </th>
                  <th>

                    <button onClick={() => statusChange(v._id, v.Status)}>


                      {v.Status ? (
                        <span className="text-green-500">✔️</span>
                      ) : (
                        <span className="text-red-500">❌</span>
                      )}
                    </button>
                  </th>
                  <th>



                    <button onClick={() => editEntry(v)} className="text-blue-500 hover:text-blue-700">

                      <Link to={`/multistep-form-api/${v._id}`}>                      <MdEdit className="h-5 w-5" />
                      </Link>

                    </button>
                  </th>
                </tr>
              );
            })
            : "No Data Found"}

        </tbody>
      </table>
    </div>
  );
}