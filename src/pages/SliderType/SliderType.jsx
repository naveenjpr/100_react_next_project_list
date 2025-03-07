import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default function SliderType() {
  //npm i react-slick
  //npm install react-slick --save
  //npm install slick-carousel
  const settings = {
    //SimpleSlider
    dots: true, //नीचे डॉट्स (नेविगेशन पॉइंट्स) दिखेंगे।
    infinite: true, //स्लाइड्स लूप में चलेंगी (आखिरी के बाद पहली स्लाइड आ जाएगी)।
    speed: 500, //500ms में स्लाइड बदलेगी।
    slidesToShow: 1,
    slidesToScroll: 1, //एक बार में एक स्लाइड स्क्रॉल होगी।
  }
  //MultipleItems
  const settingsMultipleItems = {
    dots: true, //नीचे डॉट्स (नेविगेशन पॉइंट्स) दिखेंगे।
    infinite: true, //स्लाइड्स लूप में चलेंगी (आखिरी के बाद पहली स्लाइड आ जाएगी)।
    speed: 500, //500ms में स्लाइड बदलेगी।
    slidesToShow: 3,
    slidesToScroll: 3, // एक बार में three स्लाइड स्क्रॉल होगी।
  }

  //Responsive
  const settingsResponsive = {
    dots: true, //नीचे डॉट्स (नेविगेशन पॉइंट्स) दिखेंगे।
    infinite: false,
    speed: 500, //500ms में स्लाइड बदलेगी।
    slidesToShow: 4, //डिफ़ॉल्ट रूप से 4 स्लाइड्स दिखती हैं।
    slidesToScroll: 4, // एक बार में four स्लाइड स्क्रॉल होगी।
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, //स्क्रीन साइज़ 1024px से कम होने पर 3 स्लाइड्स दिखेंगी।

          slidesToScroll: 3,
          infinite: true, //स्लाइड्स लूप में चलेंगी (आखिरी के बाद पहली स्लाइड आ जाएगी)।
          dots: true, //नीचे डॉट्स (नेविगेशन पॉइंट्स) दिखेंगे।
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, //स्क्रीन साइज़ 600px से कम होने पर 2 स्लाइड्स दिखेंगी।
          slidesToScroll: 2, // एक बार में two स्लाइड स्क्रॉल होगी।
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, //स्क्रीन साइज़ 480px से कम होने पर सिर्फ 1 स्लाइड दिखेगी।
          slidesToScroll: 1, // एक बार में एक स्लाइड स्क्रॉल होगी।
        },
      },
    ],
  }

  //Resizable

  const [display, setDisplay] = useState(true) //display स्टेट स्लाइडर को छुपाने और दिखाने के लिए है।
  const [width, setWidth] = useState(600) //width स्टेट स्लाइडर की चौड़ाई को बदलने के लिए है।

  const settingsResizable = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large Screens (Below 1024px)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets (Below 768px)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile (Below 480px)
        settings: {
          slidesToShow: 1,
          dots: false, // मोबाइल में डॉट्स हटाएं
        },
      },
    ],
  }

  //MultipleRows
  const settingsMultipleRows = {
    className: "center", //"center" क्लास का उपयोग स्लाइडर को सेंटर में (center-aligned) रखने के लिए किया जाता है।
    centerMode: true, //स्लाइडर को सेंटर मोड में रखता है, जिससे वर्तमान स्लाइड बीच में दिखाई देती है और अन्य स्लाइड्स इसके दोनों ओर आंशिक रूप से दिखती हैं।
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  }

  //Center Mode
  const settingsCenterMode = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, // Large Screens (Below 1024px)
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // Tablets (Below 768px)
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480, // Mobile (Below 480px)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  }

  //Fade
  const settingsFade = {
    dots: true, //स्लाइडर के नीचे डॉट्स (pagination indicators) दिखाएगा, जिससे यूजर यह देख सके कि वे किस स्लाइड पर हैं।
    fade: true, //यह स्लाइडर को fade transition effect देगा, जिससे स्लाइड स्मूथ तरीके से dissolve होगी, बजाय साइड-स्वाइप के।
    infinite: true, //यह स्लाइडर को लूप में चलने की अनुमति देता है। यानी, जब आखिरी स्लाइड आ जाए, तो अगली स्लाइड पहली स्लाइड पर वापस आ जाएगी।
    slidesToShow: 1, //एक बार में सिर्फ 1 स्लाइड दिखेगी।
    slidesToScroll: 1, //जब यूजर नेक्स्ट/प्रिवियस बटन पर क्लिक करेगा, तो 1 स्लाइड ही स्क्रॉल होगी।
    waitForAnimate: true, //जब एक स्लाइड मूव हो रही होगी, तो कोई और एक्शन (जैसे यूजर क्लिक) होने पर पहले वाले को पूरा होने देगा। इससे smooth animation मिलेगा और कोई जर्क नहीं होगा।
    autoplay: true,
    speed: 2000, //स्लाइड चेंज होने की स्पीड 500ms (0.5 सेकंड) होगी। इससे ट्रांज़िशन स्मूथ होगा।
    autoplaySpeed: 2000,
    cssEase: "linear",
  }
  //LazyLoad

  const settingsLazyLoad = {
    dots: true,
    lazyLoad: "ondemand", // Lazy Loading enabled
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  //VariableWidth
  const settingsVariableWidth = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }
  //AdaptiveHeight
  const settingsAdaptiveHeight = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }
  //AutoPlay
  const settingsAutoPlay = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // जब स्क्रीन 1024px या उससे कम होगी
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // जब स्क्रीन 768px या उससे कम होगी
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  //PauseOnHover
  const settingsPauseOnHover = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Large Screens (Below 1024px)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablets (Below 768px)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile (Below 480px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // AutoPlayMethods
  let sliderRef = useRef(null)

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay() // ✅ Corrected
    }
  }

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause() // ✅ Corrected
    }
  }

  const settingsAutoPlayMethods = {
    dots: true, // नीचे नेविगेशन डॉट्स दिखेंगे
    infinite: true, // लूप में स्लाइड्स चलेंगी
    slidesToShow: 3, // Default: 3 स्लाइड्स दिखेंगी
    slidesToScroll: 1, // एक बार में 1 स्लाइड स्क्रॉल होगी
    autoplay: true, // स्लाइडर ऑटो-प्ले करेगा
    autoplaySpeed: 2000, // 2 सेकंड में एक स्लाइड बदलेगी
    speed: 1000, // स्लाइड ट्रांज़िशन स्पीड (स्मूदनेस के लिए)
    cssEase: "linear", // स्मूथ ऑटो-प्ले के लिए
    pauseOnHover: true, // माउस होवर करने पर ऑटो-प्ले रुकेगा
    responsive: [
      {
        breakpoint: 1024, // जब स्क्रीन 1024px से छोटी होगी
        settings: {
          slidesToShow: 2, // 2 स्लाइड्स दिखेंगी
        },
      },
      {
        breakpoint: 768, // जब स्क्रीन 768px से छोटी होगी
        settings: {
          slidesToShow: 1, // 1 स्लाइड दिखेगी
        },
      },
    ],
  }
  const images = [
    "https://pikaso.cdnpk.net/public/media/tti-examples/05.jpg",
    "https://pikaso.cdnpk.net/public/production/prompt-templates/119.png",
    "https://pikaso.cdnpk.net/public/media/tti-examples/30.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/30.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/25.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg",
  ]

  // AsNavFor
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])

  return (
    <>
      <div className="w-[100%] flex flex-col gap-[100px] h-screen bg">
        <div className="max-w-[90%] mx-auto  bg-[white] border border-[solid] border-[red]">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            simple slider
          </h2>

          {/* //SimpleSlider */}
          <Slider {...settings}>
            <div>
              <img
                src="https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="max-h-screen w-[100%]"
              />
            </div>
          </Slider>
        </div>
        <div className="max-w-[90%] mx-auto  bg-[white] border border-[solid] border-[red]">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            Multiple Items slider
          </h2>

          {/* settingsMultipleItems */}
          <Slider {...settingsMultipleItems}>
            <div className="m-3">
              <img
                src="https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
            <div className="m-3">
              <img
                src="https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
            <div className="m-3">
              <img
                src="https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
            <div className="m-3">
              <img
                src="https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
            <div className="m-3">
              <img
                src="https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
            <div className="m-3">
              <img
                src="https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid"
                alt=""
                className="h-[400px] w-[100%]"
              />
            </div>
          </Slider>
        </div>
        {/* Responsive slider */}
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            Responsive slider
          </h2>

          <Slider {...settingsResponsive}>
            {[
              "https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-[400px] w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Resizable */}
        <div className="w-[90%] mx-auto ">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            Resizable Collapsible slider{" "}
          </h2>

          <div className="grid grid-cols-3 gap-[10px]">
            <button
              className="table p-[10px] bg-[green] text-white"
              onClick={() => setWidth(width + 100)}
            >
              {" "}
              increase{" "}
            </button>
            <button
              className="table p-[10px] bg-[green] text-white"
              onClick={() => setWidth(width - 100)}
            >
              {" "}
              decrease{" "}
            </button>
            <button
              className="table p-[10px] bg-[green] text-white"
              onClick={() => setDisplay(!display)}
            >
              {" "}
              toggle{" "}
            </button>
          </div>

          <div
            style={{
              width: width + "px",
              display: display ? "block" : "none",
            }}
          >
            <Slider {...settingsResizable}>
              {[
                "https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
                "https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
                "https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
                "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
                "https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
                "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              ].map((src, index) => (
                <div key={index} className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[400px] w-full rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* MultipleRows */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">
            slider MultipleRows
          </h2>
          <Slider {...settingsMultipleRows}>
            {[
              "https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-[200px] w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* //Center Mode */}
        <div className="w-[95%] mx-auto border border-[solid] border-[#ccc]">
          <h2 className="text-center font-medium text-[35px]">
            slider CenterMode
          </h2>
          <Slider {...settingsCenterMode}>
            {[
              "https://pikaso.cdnpk.net/public/production/prompt-templates/122.png",
              "https://pikaso.cdnpk.net/public/media/character-examples/25.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/tti-examples/36.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/22.jpg",
              "https://pikaso.cdnpk.net/public/media/3d-examples/1.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/47.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/114.jpeg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/32.jpg",
              "blob:https://www.freepik.com/a38b33d2-2b29-4a5c-a2e5-7b39a51dc37c",
              "blob:https://www.freepik.com/58efcf9c-cd06-4eff-af4a-de975e865b62",
              "https://pikaso.cdnpk.net/private/production/1614935178/render.jpeg?token=exp=1746748800~hmac=108518089d852019f570c80739fd1d88627e0d264f6cc2337803d760f93cdbfc",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* {Fade} */}
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">slider Fade</h2>
          <Slider {...settingsFade}>
            {[
              "https://img.freepik.com/free-vector/modern-stand-peace-zoom-background_23-2149432616.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/aesthetic-artsy-orange-jelen-s-notion-cover_742173-9493.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/blurred-coloured-banner-design_1107-193.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/blue-wave-background-banner-modern-design_677411-1278.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/stylish-modern-web-banners-set-three-colors_1017-37325.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/modern-style-wide-web-business-banner-template-pack-three_1017-58125.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-vector/summer-sale-discount-week-modern-discount-web-banner-site_7993-4003.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-psd/poster-man-with-black-mask-his-face_1016189-1444.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/free-vector/web-menu-template-collection_1053-282.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
              "https://img.freepik.com/premium-photo/man-suit-with-purple-background-that-says-website-design-design-design-design-design_1313246-1524.jpg?ga=GA1.1.97809359.1737173852&semt=ais_hybrid",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full rounded-lg shadow-lg cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* {LazyLoad} */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">
            slider LazyLoad
          </h2>
          <Slider {...settingsLazyLoad}>
            {[
              "https://pikaso.cdnpk.net/public/media/tti-examples/19.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/38.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/03.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/17.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/113.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/16.jpg",
              "https://pikaso.cdnpk.net/public/media/3d-examples/4.jpg",
              "https://pikaso.cdnpk.net/public/media/illustration-examples/3.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/09.jpg",
              "https://pikaso.cdnpk.net/public/media/3d-examples/3.jpg",
              "https://pikaso.cdnpk.net/public/media/character-examples/26.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/14.jpg?v=1",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* {settingsVariableWidth} */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">
            Variable Width slider
          </h2>
          <Slider {...settingsVariableWidth}>
            <div style={{ width: 100 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/14.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                className="h-screen"
              />{" "}
            </div>
            <div style={{ width: 200 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                className="h-screen"
              />{" "}
            </div>
            <div style={{ width: 75 }}>
              <img
                src="https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg"
                alt="https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg"
                className="h-screen"
              />{" "}
            </div>
            <div style={{ width: 300 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg"
                className="h-screen"
              />{" "}
            </div>
            <div style={{ width: 225 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/illustration-examples/6.jpg"
                alt="https://pikaso.cdnpk.net/public/media/illustration-examples/6.jpg"
                className="h-screen"
              />{" "}
            </div>
            <div style={{ width: 175 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg"
                className="h-screen"
              />{" "}
            </div>
          </Slider>
        </div>

        {/* AdaptiveHeight */}
        <div className="w-[95%] mx-auto">
          <h1 className="text-center font-medium text-[35px]">
            {" "}
            slider AdaptiveHeight{" "}
          </h1>
          <Slider {...settingsAdaptiveHeight}>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/3d-examples/1.jpg"
                className="w-full h-screen"
              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/production/prompt-templates/116.jpeg"
                className="w-full h-screen"
              />{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                delectus ipsa voluptatum quas nemo architecto suscipit eos,
                aspernatur eligendi veritatis mollitia, nobis quisquam
                dignissimos adipisci laborum unde consectetur, ut nisi!
              </p>
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/production/prompt-templates/118.jpeg"
                className="w-full h-screen"
              />{" "}
              <p>See ....</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores quis eum, exercitationem sint mollitia vel soluta aut
                facere. Nostrum cumque earum blanditiis corrupti. Soluta
                delectus eaque perspiciatis! Explicabo, mollitia neque?
              </p>
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg"
                className="w-full h-screen"
              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/3d-examples/3.jpg"
                className="w-full h-screen"
              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/3d-examples/2.jpg"
                className="w-full h-screen"
              />
            </div>
          </Slider>
        </div>

        {/* settingsAutoPlay */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-[35px] font-medium">
            slider AutoPlay
          </h2>
          <Slider {...settingsAutoPlay}>
            {[
              "https://pikaso.cdnpk.net/public/media/character-examples/6.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/24.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/15.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/16.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/5.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/character-examples/1.jpg?v=1",
            ].map((src, index) => (
              <div key={index} className="p-3">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* PauseOnHover */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-[35px] font-medium text-center"> PauseOnHover</h2>
          <Slider {...settingsPauseOnHover}>
            {[
              "https://pikaso.cdnpk.net/public/production/prompt-templates/122.png",
              "https://pikaso.cdnpk.net/public/media/character-examples/25.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/tti-examples/36.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/22.jpg",
              "https://pikaso.cdnpk.net/public/media/3d-examples/1.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/47.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/114.jpeg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/32.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/11.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/12.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg",
            ].map((src, index) => (
              <div key={index} className="p-3 overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* AutoPlayMethods */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-xl font-bold mb-4">
            Auto Play & Pause with Buttons
          </h2>
          <Slider ref={sliderRef} {...settingsAutoPlayMethods}>
            {images.map((src, index) => (
              <div key={index} className="p-2">
                <img
                  src={src}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={play}
            >
              Play
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={pause}
            >
              Pause
            </button>
          </div>
        </div>
        {/* AsNavFor */}
        <div className="w-[95%] mx-auto h-screen">
          <h2 className="text-center font-medium text-[35px]">AsNavFor</h2>
          <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/bccecf37-559c-4b0d-97b5-b03e24728e1d.jpg?token=exp=1741367223~hmac=1e978b45377a9f2db625561bc88149a1dd7020819eda7a545530faf2b1dc7444"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/552c4bb1-48f9-4899-b4b9-3d8a0eaa4aec.jpg?token=exp=1741367223~hmac=3d9c50764b58792c636a6284707e5de8ea944956abb09cf0aff59bc3d45396be"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/29.jpg"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg"
                className="w-full h-[50vh]  object-cover"              />
            </div>
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/bccecf37-559c-4b0d-97b5-b03e24728e1d.jpg?token=exp=1741367223~hmac=1e978b45377a9f2db625561bc88149a1dd7020819eda7a545530faf2b1dc7444"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/552c4bb1-48f9-4899-b4b9-3d8a0eaa4aec.jpg?token=exp=1741367223~hmac=3d9c50764b58792c636a6284707e5de8ea944956abb09cf0aff59bc3d45396be"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/29.jpg"
                className="w-full h-[50vh]  object-cover"              />
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg"
                className="w-full h-[50vh]  object-cover"              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}
