import React, { useState } from "react";

export default function CharacterLimitedInput() {


  return (

    <>
    <FirstCharacterLimitedInput/>
    <SecondCharacterLimitedInput/>
    
    </>
  );
}



function FirstCharacterLimitedInput() {

    const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value.length);
    if (value.length <= 200) {
      setText(value);
    }
  };

  return(
        <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">
        Character Limited Input
      </h2>{" "}
      <div className="p-4 max-w-7xl mx-auto">
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Text:</label>
        <textarea
          value={text}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Type up to 200 characters..."
        />
        <p className="text-sm text-gray-600 mt-1 flex">
          {text.length}
          {text.length === 200 ? (
            <div>
              <span className="font-bold text-[15px] text-[red]">
                You have reached the character limit!
              </span>
            </div>
          ) : (
            ""
          )}
          /200 characters
        </p>
      </div>
    </div>
  )
    
}

function SecondCharacterLimitedInput(){

  const [maxLengthstate, setMaxLengthstate] = useState({

    name: "",
    lastName: "",
    email: "",
    address: "",
    message: ""
  });

  return(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us form Character Limit
        </h2>
        
        <form className="space-y-4">
          {/* Name and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            {/* First Name */}
            <div className="relative">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                value={maxLengthstate.name}
                onChange={(e)=>setMaxLengthstate({...maxLengthstate,name:e.target.value})}
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
                maxLength={30}
              />
              {
                maxLengthstate.name.length >= 30 ?(
                  <span className="text-red-500 absolute top-0 right-0">
                    {`reached the character limit!  ${maxLengthstate.name.length}/20`}
                  </span>
                ):(
                  <span className="text-red-500 absolute top-0 right-0">
                    {`remaining character ${30 - maxLengthstate.name.length}`}
                  </span>
                )
              }
    
            </div>

            {/* Last Name */}
            <div className="relative">
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={maxLengthstate.lastName}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
                onChange={(e)=>{setMaxLengthstate({...maxLengthstate,lastName:e.target.value})}}
                maxLength={20}
              />
              {
                maxLengthstate.lastName.length >= 20 ?(
                  <span className="text-red-500 absolute top-0 right-0">
                    {`reached the character limit!  ${maxLengthstate.lastName.length}/20`}
                  </span>
                ):(
                  <span className="text-red-500 absolute top-0 right-0">
                    {`remaining character ${20 - maxLengthstate.lastName.length}`}
                  </span>
                )
              }
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              value={maxLengthstate.email}
              onChange={(e)=>{setMaxLengthstate({...maxLengthstate,email:e.target.value})}}
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
              maxLength={50}
            />
            {
              maxLengthstate.email.length >= 50 ?(
                <span className="text-red-500 absolute top-0 right-0">
                  {`reached the character limit!  ${maxLengthstate.email.length}/50`}
                </span>
              ):(
                <span className="text-red-500 absolute top-0 right-0">
                  {`remaining character ${50 - maxLengthstate.email.length}`}
                </span>
              )
            }
          </div>

          {/* Address */}
          <div className="relative">
            <label 
              htmlFor="address" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={maxLengthstate.address}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123 Main Street, City"
              onChange={(e)=>{setMaxLengthstate({...maxLengthstate,address:e.target.value})}}
            />
            {
              maxLengthstate.address.length >= 50 ?(
                <span className="text-red-500 absolute top-0 right-0">
                  {`reached the character limit!  ${maxLengthstate.address.length}/50`}
                </span>
              ):(
                <span className="text-red-500 absolute top-0 right-0">
                  {`remaining character ${50 - maxLengthstate.address.length}`}
                </span>
              )
            }
          </div>

          {/* Message */}
          <div className="relative">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={(e)=>{setMaxLengthstate({...maxLengthstate,message:e.target.value})}}
              value={maxLengthstate.message}
              maxLength={200}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your message here..."
            ></textarea>
            {
              maxLengthstate.message.length >= 200 ?(
                <span className="text-red-500 absolute top-0 right-0">
                  {`reached the character limit!  ${maxLengthstate.message.length}/200`}
                </span>
              ):(
                <span className="text-red-500 absolute top-0 right-0">
                  {`remaining character ${200 - maxLengthstate.message.length}`}
                </span>
              )
            }
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}