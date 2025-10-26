import React from "react";

export default function Step5({
  formData,
  setFormData,
  prevStep,
  onSubmit,
  loading = false,
    isEditing = false,

}) {
  const handleChange = (event) => {
    const newItems = { ...formData };
    newItems[event.target.name] = event.target.value;
    setFormData(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.jobType && formData.salary) {
    onSubmit(e); // event object pass करें
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <>
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Job Preferences & Review
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Job Type *
              </label>
              <select
                value={formData.jobType}
                onChange={handleChange}
                name="jobType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Salary ($) *
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
            >
              Previous
            </button>
           <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
            >
              {isEditing ? 'Update Application' : 'Submit Application'}
            </button>
          </div>
        </form>

        
      </div>
   
    </>
  );
}
