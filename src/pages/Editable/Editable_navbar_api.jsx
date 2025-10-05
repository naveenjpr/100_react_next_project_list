// React और आवश्यक हुक्स को आयात करें
import React, { useState, useEffect } from "react";
// HTTP अनुरोधों के लिए axios आयात करें
import axios from "axios";
// आइकन्स आयात करें
import { IoPencilOutline } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
// टोस्ट नोटिफिकेशन के लिए आयात करें
import { toast, ToastContainer } from "react-toastify";

// मुख्य कंपोनेंट फंक्शन
export default function Edit_navbar_or_logo_api() {
  // बेस URL डेफाइन करें
  const baseurl = "http://localhost:5000/";
  
  // मेनू आइटम्स की स्टेट
  const [menuItems, setMenuItems] = useState([
    "Our Courses",
    "Test Series",
    "Study Material",
    "Toppers",
    "Media",
    "About Us",
  ]);

  // एडिटिंग मोड की स्टेट
  const [isEditing, setIsEditing] = useState(false);
  // इमेज URL की स्टेट
  const [imageUrl, setImageUrl] = useState("");
  // लोगो URL की स्टेट
  const [logoUrl, setLogoUrl] = useState("");
  // इमेज एडिटिंग मोड की स्टेट
  const [imageEditing, setImageEditing] = useState(false);
  // प्रिव्यू इमेज पाथ की स्टेट
  const [preImagePath, setPreImagePath] = useState("");
  // चयनित फाइल की स्टेट
  const [selectedFile, setSelectedFile] = useState(null);

  // कंपोनेंट माउंट होने पर API से डेटा लोड करें
  useEffect(() => {
    // API से नेवबार डेटा फ़ेच करें
    axios
      .get("http://localhost:5000/api/backend/navbar/view")
      .then((res) => {
        // अगर रेस्पॉन्स सफल है तो डेटा सेट करें
        if (res.data.status && res.data.data) {
          // लोगो URL सेट करें
          setLogoUrl(res.data.data.logoUrl);
          // इमेज पाथ सेट करें
          setImageUrl(res.data.imagepath);
          // मेनू आइटम्स सेट करें
          setMenuItems(res.data.data.menuItems || []);
          
          // कंसोल में लोगो URL लॉग करें
          console.log("Logo URL:", res.data.data.logoUrl);
          // कंसोल में इमेज पाथ लॉग करें
          console.log("Image path:", res.data.imagepath);
        }
      })
      .catch((err) => {
        // एरर हेंडलिंग
        console.error("Failed to load navbar:", err);
        // एरर टोस्ट दिखाएं
        toast.error("Failed to load navbar data");
      });
  }, []);

  // मेनू इनपुट में बदलाव हेंडल करें
  const handleChange = (e, index) => {
    // नए आइटम्स की कॉपी बनाएं
    const newItems = [...menuItems];
    // इंडेक्स के अनुसार वैल्यू अपडेट करें
    newItems[index] = e.target.value;
    // अपडेटेड आइटम्स सेट करें
    setMenuItems(newItems);
  };

  // मेनू को API में सेव करें
  const saveMenuToAPI = () => {
    // फॉर्म डेटा ऑब्जेक्ट बनाएं
    const formData = new FormData();
    // मेनू आइटम्स को JSON स्ट्रिंग के रूप में ऐड करें
    formData.append('menuItems', JSON.stringify(menuItems));
    
    // अगर लोगो के लिए फाइल चुनी गई है तो इसे ऐड करें
    if (selectedFile) {
      // लोगो फाइल ऐड करें
      formData.append('logoUrl', selectedFile);
    }

    // API को POST रिक्वेस्ट भेजें
    axios
      .post("http://localhost:5000/api/backend/navbar/add", formData)
      .then((res) => {
        // अगर रेस्पॉन्स सफल है
        if (res.data.status) {
          // सक्सेस टोस्ट दिखाएं
          toast.success("Navbar updated successfully!");
          // एडिटिंग मोड बंद करें
          setIsEditing(false);
          
          // अगर लोगो बदला गया है तो अपडेट करें
          if (res.data.data.logoUrl) {
            // नया लोगो URL सेट करें
            setLogoUrl(res.data.data.logoUrl);
            // सेलेक्टेड फाइल रीसेट करें
            setSelectedFile(null);
            // प्रिव्यू इमेज पाथ रीसेट करें
            setPreImagePath("");
          }
        } else {
          // फेलियर टोस्ट दिखाएं
          toast.error("Failed to update navbar.");
        }
      })
      .catch((err) => {
        // एरर हेंडलिंग
        console.error("Save menu error:", err);
        // एरर टोस्ट दिखाएं
        toast.error("Failed to update navbar.");
      });
  };

  // लोगो फाइल बदलाव हेंडल करें
  const handleLogoChange = (event) => {
    // चुनी गई फाइल प्राप्त करें
    const file = event.target.files[0];
    // अगर फाइल है तो प्रोसेस करें
    if (file) {
      // सेलेक्टेड फाइल सेट करें
      setSelectedFile(file);
      try {
        // फाइल से URL बनाएं
        const currentUrl = URL.createObjectURL(file);
        // प्रिव्यू इमेज पाथ सेट करें
        setPreImagePath(currentUrl);
      } catch {
        // एरर केस में प्रिव्यू पाथ रीसेट करें
        setPreImagePath("");
      }
    }
  };

  // लोगो बदलाव सेव करें
  const saveLogoChanges = () => {
    // अगर कोई फाइल नहीं चुनी गई है
    if (!selectedFile) {
      // वार्निंग टोस्ट दिखाएं
      toast.warning("Please select a logo file first.");
      return;
    }

    // फॉर्म डेटा ऑब्जेक्ट बनाएं
    const formData = new FormData();
    // मेनू आइटम्स ऐड करें
    formData.append('menuItems', JSON.stringify(menuItems));
    // लोगो फाइल ऐड करें
    formData.append('logoUrl', selectedFile);

    // API को POST रिक्वेस्ट भेजें
    axios
      .post("http://localhost:5000/api/backend/navbar/add", formData)
      .then((res) => {
        // अगर रेस्पॉन्स सफल है
        if (res.data.status) {
          // सक्सेस टोस्ट दिखाएं
          toast.success("Logo updated successfully!");
          // इमेज एडिटिंग मोड बंद करें
          setImageEditing(false);
          // अगर नया लोगो URL है
          if (res.data.data.logoUrl) {
            // लोगो URL अपडेट करें
            setLogoUrl(res.data.data.logoUrl);
            // प्रिव्यू पाथ रीसेट करें
            setPreImagePath("");
            // सेलेक्टेड फाइल रीसेट करें
            setSelectedFile(null);
          }
        } else {
          // फेलियर टोस्ट दिखाएं
          toast.error("Failed to update logo.");
        }
      })
      .catch((err) => {
        // एरर हेंडलिंग
        console.error("Logo upload error:", err);
        // एरर टोस्ट दिखाएं
        toast.error("Failed to update logo.");
      });
  };

  // लोगो एडिटिंग कैंसल करें
  const cancelLogoEdit = () => {
    // इमेज एडिटिंग मोड बंद करें
    setImageEditing(false);
    // प्रिव्यू इमेज पाथ रीसेट करें
    setPreImagePath("");
    // सेलेक्टेड फाइल रीसेट करें
    setSelectedFile(null);
  };

  // कंपोनेंट रेंडरिंग
  return (
    // हेडर सेक्शन
    <header className="w-full h-[80px] bg-slate-400">
      {/* टोस्ट कंटेनर */}
      <ToastContainer />
      {/* नेविगेशन सेक्शन */}
      <nav className="flex justify-between items-center py-[10px] text-black font-bold gap-5 max-w-[1170px] mx-auto">
        {/* मेनू लिस्ट */}
        <ul className="flex gap-5 items-center">
          {/* लोगो सेक्शन */}
          <li className="relative">
            {/* अगर इमेज एडिटिंग मोड में है */}
            {imageEditing ? (
              // एडिटिंग इंटरफेस
              <div className="flex flex-col items-start gap-2">
                {/* फाइल इनपुट */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="border px-2 py-1 rounded w-[200px] text-sm"
                />
                {/* अगर प्रिव्यू इमेज है */}
                {preImagePath && (
                  // प्रिव्यू सेक्शन
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Preview:</span>
                    {/* प्रिव्यू इमेज */}
                    <img
                      src={preImagePath}
                      className="w-[80px] h-[40px] object-contain border"
                      alt="Preview"
                    />
                  </div>
                )}
                {/* एक्शन बटन्स */}
                <div className="flex gap-2 mt-1">
                  {/* सेव बटन */}
                  <button
                    onClick={saveLogoChanges}
                    className="text-xs bg-green-600 text-white px-2 py-1 rounded flex items-center gap-1"
                  >
                    <IoIosSave /> Save
                  </button>
                  {/* कैंसल बटन */}
                  <button
                    onClick={cancelLogoEdit}
                    className="text-xs bg-gray-600 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // नॉर्मल लोगो डिस्प्ले
              logoUrl && (
                <div className="relative flex items-center gap-2">
                  {/* लोगो इमेज */}
                  <img
                    src={`${baseurl}${imageUrl}${logoUrl}`}
                    alt="Website Logo"
                    className="w-[120px] h-[50px] object-contain"
                  />
                  {/* एडिट आइकन */}
                  <IoPencilOutline
                    className="cursor-pointer absolute right-0 top-0 text-red-600 text-lg"
                    onClick={() => setImageEditing(true)}
                    title="Edit Logo"
                  />
                </div>
              )
            )}
          </li>

          {/* मेनू आइटम्स लूप */}
          {menuItems.map((item, index) => (
            // प्रत्येक मेनू आइटम
            <li key={index} className="w-auto min-w-[100px]">
              {/* अगर एडिटिंग मोड में है */}
              {isEditing ? (
                // एडिटेबल इनपुट
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full border px-2 py-1 rounded text-sm"
                />
              ) : (
                // डिस्प्ले टेक्स्ट
                <span className="text-sm whitespace-nowrap">{item}</span>
              )}
            </li>
          ))}
        </ul>

        {/* मेनू एडिट/सेव सेक्शन */}
        <div>
          {/* अगर एडिटिंग मोड में है */}
          {isEditing ? (
            // सेव और कैंसल बटन्स
            <div className="flex gap-2">
              {/* सेव बटन */}
              <button
                className="text-xs font-bold bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
                onClick={saveMenuToAPI}
              >
                Save Menu
              </button>
              {/* कैंसल बटन */}
              <button
                className="text-xs font-bold bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            // एडिट बटन
            <button
              className="text-xs font-bold bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition"
              onClick={() => setIsEditing(true)}
            >
              Edit Menu
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}