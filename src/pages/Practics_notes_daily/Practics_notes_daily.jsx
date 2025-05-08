import React, { useEffect, useState } from "react";
import Header from "../../Common page/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Practics_notes_daily() {
  const location = useLocation();

  const [activButton, setactivButton] = useState("button1");

  return (
    <>
      <div>
        {location.pathname === "/Practics_notes_daily" ? <Header /> : null}
      </div>

      {/* tabs start */}
      <div className="flex space-x-4 bg-gray-100 p-3 rounded-lg shadow-md">
        <button
          className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold rounded-md transition-all duration-300 ${
            activButton === "button1"
              ? "text-blue-600 border-b-4 border-black"
              : "text-[#a52a2a] hover:text-gray-800"
          }`}
          onClick={() => setactivButton("button1")}
        >
          JavaScript
        </button>

        <button
          className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold rounded-md transition-all duration-300 ${
            activButton === "button2"
              ? "text-blue-600 border-b-4 border-black"
              : "text-[#a52a2a] hover:text-gray-800"
          }`}
          onClick={() => setactivButton("button2")}
        >
          React
        </button>

        <button
          className={`md:px-4 px-2 py-2 text-lg md:text-xl font-bold rounded-md transition-all duration-300 ${
            activButton === "button3"
              ? "text-blue-600 border-b-4 border-black"
              : "text-[#a52a2a] hover:text-gray-800"
          }`}
          onClick={() => setactivButton("button3")}
        >
          Node.js
        </button>
      </div>

      {/* tabs end */}

      <div className="bg-slate-400 ">
        {activButton === "button1" ? (
          <Javascript />
        ) : activButton === "button2" ? (
          <Reactnotes />
        ) : activButton === "button3" ? (
          <Node_js />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

function Javascript() {
  const [currentId, setCurrentId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [javascriptdatashow, setjavascriptdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios

      .post("https://rss-feed-node-js.onrender.com/api/backend/javascript/view")
      .then((result) => {
        setjavascriptdatashow(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    console.log("javascript", id);
    setCurrentId(currentId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        JavaScript
      </h2>
      {javascriptdatashow.length > 0
        ? javascriptdatashow.map((v, i) => {
            return (
              <div key={i}>
                <div className="border rounded-xl p-4 shadow-md">
                  <button
                    className="w-full text-left font-semibold text-lg text-gray-800 focus:outline-none relative"
                    onClick={() => toggleFAQ(v._id)}
                  >
                    <span className="mx-2">{i + 1}</span> {v.Question}
                    <span className="absolute right-[0px] top-[10px]">
                      {v._id === currentId ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <p
                    className={`p-3 bg-[black] text-white font-bold  transition-all duration-1000 ease-in-out 
    ${v._id === currentId ? "block opacity-100" : "hidden opacity-0"}
  `}
                  >
                    <pre className="whitespace-pre-wrap break-words">
                      {v.Answers}
                    </pre>
                  </p>
                </div>
              </div>
            );
          })
        : "no data show"}
    </div>
  );
}

function Reactnotes() {
  const [ReactcurrentId, ReactsetCurrentId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [reactdatashow, setreactdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios
      .post("https://rss-feed-node-js.onrender.com/api/backend/ReactNotes/view")
      .then((result) => {
        setreactdatashow(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    ReactsetCurrentId(ReactcurrentId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        React
      </h2>
      {reactdatashow.length > 0
        ? reactdatashow.map((v, i) => {
            return (
              <div key={i}>
                <div className="border rounded-xl p-4 shadow-md">
                  <button
                    className="w-full text-left font-semibold text-lg text-gray-800 focus:outline-none relative"
                    onClick={() => toggleFAQ(v._id)}
                  >
                    <span className="mx-2">{i + 1}</span> {v.Question}
                    <span className="absolute right-[10px] top-[10px]">
                      {v._id === ReactcurrentId ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <p
                    className={`p-3 bg-[black] text-white font-medium transition-all duration-1000 ease-in-out 
      ${v._id === ReactcurrentId ? "block opacity-100" : "hidden opacity-0"}
    `}
                  >
                    <pre className="whitespace-pre-wrap break-words">
                      {v.Answers}
                    </pre>
                  </p>
                </div>
              </div>
            );
          })
        : "no data show"}
    </div>
  );
}
function Node_js() {
  const [nodejsId, setnodejsId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [Node_jsdatashow, setNode_jsdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios
      .post(
        "https://rss-feed-node-js.onrender.com/api/backend/node-js-Notes/view"
      )
      .then((result) => {
        setNode_jsdatashow(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    console.log("javascript", id);
    setnodejsId(nodejsId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        Node.js
      </h2>
      {Node_jsdatashow.length > 0
        ? Node_jsdatashow.map((v, i) => {
            return (
              <div key={i}>
                <div className="border rounded-xl p-4 shadow-md">
                  <button
                    className="w-full text-left font-semibold text-lg text-gray-800 focus:outline-none relative"
                    onClick={() => toggleFAQ(v._id)}
                  >
                    <span className="mx-2">{i + 1}</span>
                    {v.Question}
                    <span className="absolute right-[10px] top-[10px]">
                      {v._id === nodejsId ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <p
                    className={`p-3 bg-[black] text-white font-medium transition-all duration-1000 ease-in-out 
      ${v._id === nodejsId ? "block opacity-100" : "hidden opacity-0"}
    `}
                  >
                    <pre className="whitespace-pre-wrap break-words">
                      {v.Answers}
                    </pre>
                  </p>
                </div>
              </div>
            );
          })
        : "no data show"}
    </div>
  );
}
