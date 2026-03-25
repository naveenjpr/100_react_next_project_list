import { useState, useEffect } from "react";
import axios from "axios";

export default function Insurance() {
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [formData, setFormData] = useState({
    user_id: "amit.test-IT001",
    designation: "hod",
    vehicle_type: "GCV",
    sub_type: "",
    rate_type: "OUT",
    date: "2026-03-12",
    query_type: "STATE",
    query_value: "RJ",
    policy_id: "thirdParty,comprehensive",
    fuel_id: "",
    seating_capacity: "",
    cc: "",
    gvw: "0-3500",
    make_id: "",
    model_id: "",
    insurer:
      "SBI General Insurance Company Limited,The Oriental Insurance Company Limited,Tata AIG General Insurance Company Limited,Universal Sompo General Insurance Company Limited",
  });

  const viewapi = async () => {
    const token =
      "Tm58bPsHeMZsqBB8JGY2cV4YYs9O2poZvJKBLbISxrfYXPogZad3USgLFOJrrOjGwFDJZ3lIyQ4";

    try {
      const res = await axios.post(
        "http://192.168.0.227:10001/api/vehicle-data",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      console.log(res.data);
      setData(res.data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    viewapi();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    viewapi();
  };

  const toggleRowExpansion = (index) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(index)) {
      newExpandedRows.delete(index);
    } else {
      newExpandedRows.add(index);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <>
      <section className="bg-gray-300 p-5 min-h-screen">
        <h2 className="text-blue-500 text-xl mb-4">Insurance Vehicles Data</h2>

        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg font-semibold mb-4">Vehicle Data Form</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User ID
              </label>
              <input
                type="text"
                name="user_id"
                value={formData.user_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Type
              </label>
              <input
                type="text"
                name="vehicle_type"
                value={formData.vehicle_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub Type
              </label>
              <input
                type="text"
                name="sub_type"
                value={formData.sub_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rate Type
              </label>
              <input
                type="text"
                name="rate_type"
                value={formData.rate_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Query Type
              </label>
              <input
                type="text"
                name="query_type"
                value={formData.query_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Query Value
              </label>
              <input
                type="text"
                name="query_value"
                value={formData.query_value}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Policy ID
              </label>
              <input
                type="text"
                name="policy_id"
                value={formData.policy_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fuel ID
              </label>
              <input
                type="text"
                name="fuel_id"
                value={formData.fuel_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seating Capacity
              </label>
              <input
                type="text"
                name="seating_capacity"
                value={formData.seating_capacity}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CC
              </label>
              <input
                type="text"
                name="cc"
                value={formData.cc}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GVW
              </label>
              <input
                type="text"
                name="gvw"
                value={formData.gvw}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Make ID
              </label>
              <input
                type="text"
                name="make_id"
                value={formData.make_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model ID
              </label>
              <input
                type="text"
                name="model_id"
                value={formData.model_id}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Insurer
              </label>
              <textarea
                name="insurer"
                value={formData.insurer}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Fetch Vehicle Data
          </button>
        </form>

        {/* {data.length > 0 && (
        <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">API Response:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} */}
      </section>

      <section className="bg-gray-100 p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Insurance Data Results
        </h2>

        {data.length > 0 ? (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deal ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <>
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.Deal_ID}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.COMPANY}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.PRODUCT_NAME}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                        {item.OUT_NET}%
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => toggleRowExpansion(index)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200"
                        >
                          {expandedRows.has(index) ? "Collapse" : "Expand"}
                        </button>
                      </td>
                    </tr>
                    {expandedRows.has(index) && (
                      <tr className="bg-gray-50">
                        <td colSpan="5" className="px-4 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Age Range:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.AGE_MIN} - {item.AGE_MAX} years
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                GVW Range:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.GVW_MIN} - {item.GVW_MAX} kg
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Policy Type:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.POLICY_TYPE}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Fuel Type:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.FUEL_TYPE}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Deal Type:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.DEAL_TYPE}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                GCV Type:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.GCV_TYPE}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Branch:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.BRANCH_NAME}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                RTO Category:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.RTO_CATEGORY}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <span className="font-medium text-gray-700">
                                Updated By:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.Updated_By}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded border col-span-1 md:col-span-2 lg:col-span-3">
                              <span className="font-medium text-gray-700">
                                Remarks:
                              </span>
                              <span className="ml-2 text-gray-600">
                                {item.REMARKS}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-gray-500 text-lg">No data available</div>
            <p className="text-gray-400 mt-2">
              Submit the form above to fetch insurance data
            </p>
          </div>
        )}

        {/* Summary Stats */}
        {data.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-blue-600">
                {data.length}
              </div>
              <div className="text-gray-500">Total Deals</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-green-600">
                {Math.min(...data.map((item) => item.OUT_NET))}% -{" "}
                {Math.max(...data.map((item) => item.OUT_NET))}%
              </div>
              <div className="text-gray-500">Rate Range</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(data.map((item) => item.COMPANY)).size}
              </div>
              <div className="text-gray-500">Insurance Companies</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-orange-600">
                {new Set(data.map((item) => item.PRODUCT_NAME)).size}
              </div>
              <div className="text-gray-500">Product Types</div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
