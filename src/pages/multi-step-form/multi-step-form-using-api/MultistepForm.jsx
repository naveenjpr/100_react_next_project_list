import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2'
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(1);
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
    setCurrentStep(currentStep+1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep-1);
  };

//   const updateFormData = (data) => {

//     console.log('Updating form data:', data);
//     setFormData(prev => ({
//       ...prev,
//       ...data


//     }));
//   };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData}  nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData}  nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData}  nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData}  nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5 formData={formData} setFormData={setFormData}  prevStep={prevStep} onSubmit={handleSubmit} />;
      default:
        return <Step1 formData={formData} setFormData={setFormData}  nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
        <h1 className='text-center text-bold capitalize border-b-2 border-[red] border-t-2 bg-slate-400 '>Multi step Form</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          {/* Progress Bar - Same as before */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map(step => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    <span className={`text-xs mt-2 ${
                      currentStep >= step ? 'text-green-600 font-medium' : 'text-gray-500'
                    }`}>
                      Step {step}
                    </span>
                  </div>
                  {step < 5 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step ? 'bg-green-500' : 'bg-gray-300'
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