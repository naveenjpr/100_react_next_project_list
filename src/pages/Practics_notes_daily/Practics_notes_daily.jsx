import React, { useContext, useEffect, useState } from "react";
import Header from "../../Common page/Header";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Colors, Lodingspinnerwithimageinside } from "../Loading/Loading";
import { LoginContext } from "../context_api/MainContext";

export default function Practics_notes_daily() {
  const location = useLocation();
  let navigate = useNavigate();

  const [activButton, setactivButton] = useState("button1");
  const { userinfo, setuserinfo } = useContext(LoginContext);
  // Logout function
  const logoutHandler = () => {
    // Cookies.remove("token");
    setuserinfo(null);
    navigate("/Login");
  };

  return (
    <>
      <div>
        {location.pathname === "/Practics_notes_daily" ? <Header /> : null}
      </div>
      {/* login register button start */}
      <div className="flex justify-center items-center gap-4 py-4">
        {userinfo ? (
          <button
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
            onClick={() => logoutHandler()}
          >
            Log out
          </button>
        ) : (
          <>
            <Link to="/Register">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Register
              </button>
            </Link>

            <Link to="/Login">
              <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
      {/* login register button End*/}

      {/* tabs start */}
      <div className="flex flex-wrap gap-2 bg-gray-100 p-3 rounded-lg shadow-md justify-center md:justify-start">
        {[
          { label: "JavaScript", id: "button1" },
          { label: "React", id: "button2" },
          { label: "Node.js", id: "button3" },
          { label: "Wordpress", id: "button4" },
          { label: "HTML or CSS", id: "button5" },
          { label: "English", id: "button6" },
        ].map(({ label, id }) => (
          <button
            key={id}
            className={`px-3 py-2 text-base sm:text-lg md:text-xl font-bold rounded-md transition-all duration-300 ${
              activButton === id
                ? "text-blue-600 border-b-4 border-black"
                : "text-[#a52a2a] hover:text-gray-800"
            }`}
            onClick={() => setactivButton(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* tabs end */}

      <div className="bg-slate-400">
        {activButton === "button1" ? (
          <Javascript />
        ) : activButton === "button2" ? (
          <Reactnotes />
        ) : activButton === "button3" ? (
          <Node_js />
        ) : activButton === "button4" ? (
          <Wordpress />
        ) : activButton === "button5" ? (
          <HTML_CSS />
        ) : activButton === "button6" ? (
          <English />
        ) : null}
      </div>
    </>
  );
}

function Javascript() {
  const [currentId, setCurrentId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [javascriptdatashow, setjavascriptdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const { userinfo, setuserinfo } = useContext(LoginContext);

  useEffect(() => {
    if (!userinfo) return; // अगर user login नहीं है तो कुछ भी fetch न करो

    axios

      .post(
        "https://rss-feed-node-js.onrender.com/api/frontend/javascript/view",
        {},
        {
          headers: {
            Authorization: `Bearer ${userinfo}`,
          },
        }
      )
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
      {javascriptdatashow.length > 0 ? (
        javascriptdatashow.map((v, i) => {
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}

function Reactnotes() {
  const [ReactcurrentId, ReactsetCurrentId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [reactdatashow, setreactdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios
      .post(
        "https://rss-feed-node-js.onrender.com/api/frontend/ReactNotes/view"
      )
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
      {reactdatashow.length > 0 ? (
        reactdatashow.map((v, i) => {
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}
function Node_js() {
  const [nodejsId, setnodejsId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [Node_jsdatashow, setNode_jsdatashow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios
      .post(
        "https://rss-feed-node-js.onrender.com/api/frontend/node-js-Notes/view"
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
      {Node_jsdatashow.length > 0 ? (
        Node_jsdatashow.map((v, i) => {
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}

function Wordpress() {
  const [wordpressId, setwordpressId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [wordpressshow, setwordpressshow] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    axios
      .post("https://rss-feed-node-js.onrender.com/api/frontend/WordPress/view")
      .then((result) => {
        setwordpressshow(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    console.log("javascript", id);
    setwordpressId(wordpressId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        WordPress
      </h2>
      {wordpressshow.length > 0 ? (
        wordpressshow.map((v, i) => {
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
                    {v._id === wordpressId ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <p
                  className={`p-3 bg-[black] text-white font-medium transition-all duration-1000 ease-in-out 
      ${v._id === wordpressId ? "block opacity-100" : "hidden opacity-0"}
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}

function HTML_CSS() {
  const [htmlcssId, sethtmlcssId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [htmlorcss, sethtmlorcss] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    //http://localhost:5000/api/frontend/HTML_CSS/view
    axios
      .post("https://rss-feed-node-js.onrender.com/api/frontend/HTML_CSS/view")
      .then((result) => {
        sethtmlorcss(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    sethtmlcssId(htmlcssId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        HTML OR CSS
      </h2>
      {htmlorcss.length > 0 ? (
        htmlorcss.map((v, i) => {
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
                    {v._id === htmlcssId ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <p
                  className={`p-3 bg-[black] text-white font-medium transition-all duration-1000 ease-in-out 
      ${v._id === htmlcssId ? "block opacity-100" : "hidden opacity-0"}
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}
function English() {
  const [EnglishId, setEnglishId] = useState(null); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है
  const [English, setEnglish] = useState([]); // currentId स्टेट बना रहे हैं, शुरुआत में यह null है

  useEffect(() => {
    //http://localhost:5000/api/frontend/HTML_CSS/view
    axios
      .post("https://rss-feed-node-js.onrender.com/api/frontend/English/view")
      .then((result) => {
        setEnglish(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const toggleFAQ = (id) => {
    setEnglishId(EnglishId === id ? null : id); // currentId को अपडेट कर रहे हैं, यदि वही FAQ फिर से क्लिक किया गया है तो इसे बंद करें
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 text-center py-[20px]">
        English spoken
      </h2>
      {English.length > 0 ? (
        English.map((v, i) => {
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
                    {v._id ===  EnglishId ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <p
                  className={`p-3 bg-[black] text-white font-medium transition-all duration-1000 ease-in-out 
      ${v._id === EnglishId  ? "block opacity-100" : "hidden opacity-0"}
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
      ) : (
        <div className="relative h-screen">
          <div className="absolute inset-0 flex justify-center items-center">
            <Lodingspinnerwithimageinside />
          </div>
        </div>
      )}
    </div>
  );
}
