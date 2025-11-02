import React, { useState } from "react";

export default function CharacterLimitedInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value.lenght);
    if (value.length <= 200) {
      setText(value);
    }
  };

  return (
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
          {text.length == "200" ? (
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
      <MultiInputForm/>
    </div>
  );
}



function MultiInputForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });


  const handleChange = (e) => {
    alert(e)
  };

  return (
    <div>
      <div>
        <label>Title:</label>
        <textarea           onChange={handleChange}
>



        </textarea>
        
       
      </div>
      
   
    </div>
  );
}