import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function MultistepFormApi() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Step 2
    street: '',
    city: '',
    state: '',
    zipCode: '',

    // Step 3
    highestDegree: '',
    institution: '',
    graduationYear: '',

    // Step 4
    company: '',
    position: '',
    years: '',

    // Step 5
    jobType: '',
    salary: '',
    location: ''
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  let params = useParams();
  let paramsid = params.id;
  useEffect(() => {
    if (paramsid) {
      fetch(`https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/details/${paramsid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({})
      })
        .then((res) => res.json()) // ✅ convert to JSON
        .then((result) => {

          if (result.status) {
            setFormData({
              firstName: result.data.firstName || "",
              lastName: result.data.lastName || "",
              email: result.data.email || "",
              phone: result.data.phone || "",
              street: result.data.street || "",
              city: result.data.city || "",
              state: result.data.state || "",
              zipCode: result.data.zipCode || "",
              highestDegree: result.data.highestDegree || "",
              institution: result.data.institution || "",
              graduationYear: result.data.graduationYear || "",
              company: result.data.company || "",
              position: result.data.position || "",
              years: result.data.years || "",
              jobType: result.data.jobType || "",
              salary: result.data.salary || "",
              location: result.data.location || ""
            });

          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  }, [paramsid]);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    setLoading(true);

    if (paramsid) {
      // Update existing data
      fetch(`https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/update/${paramsid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Update API Response:", result);
          if (result.status) {
            alert('Data updated successfully!');
            navigate('/multi_step_form_table');
          } else {
            alert(`Update failed: ${result.message}`);
          }
        })
        .catch((error) => {
          console.log("Update API Error:", error);
          alert('Error updating form data');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Add new data
      fetch("https://node-j-my-portfolio-mail-send.onrender.com/api/backend/MultiStepFrom/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Add API Response:", result);
          if (result.status) {
            alert('Form submitted successfully!');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              street: '',
              city: '',
              state: '',
              zipCode: '',
              highestDegree: '',
              institution: '',
              graduationYear: '',
              company: '',
              position: '',
              years: '',
              jobType: '',
              salary: '',
              location: ''
            });
            setCurrentStep(1);

          } else {
            alert(`Submission failed: ${result.message}`);
          }
          navigate('/multi_step_form_table');

        })
        .catch((error) => {
          console.log("Add API Error:", error);
          alert('Error submitting form');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          onSubmit={handleSubmit}
          loading={loading}
          isEditing={paramsid ? true : false}

        />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className='text-center text-bold capitalize border-b-2 border-[red] border-t-2 bg-slate-400 py-2'>
        Multi step Form API - Working Successfully! ✅
      </h1>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map(step => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= step
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 text-gray-500'
                      }`}>
                      {step}
                    </div>
                    <span className={`text-xs mt-2 ${currentStep >= step ? 'text-green-600 font-medium' : 'text-gray-500'
                      }`}>
                      Step {step}
                    </span>
                  </div>
                  {step < 5 && (
                    <div className={`flex-1 h-1 mx-2 ${currentStep > step ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="form-content">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}