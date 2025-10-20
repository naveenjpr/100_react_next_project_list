import React from 'react';

export default function Step4({ formData, setFormData, nextStep, prevStep }) {
    const handleChange = (event) => {
        const newItems = { ...formData };
        newItems[event.target.name] = event.target.value;
        setFormData(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.company && formData.position) {
            nextStep();
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company *
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Position *
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Years of Experience
                        </label>
                        <input
                            type="number"
                            name="years"
                            value={formData.years}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            min="0"
                            max="50"
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
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}