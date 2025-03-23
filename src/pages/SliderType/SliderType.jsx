import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useLocation } from "react-router-dom"
import Header from "../../Common page/Header"
export default function SliderType() {
  //npm i react-slick
  //npm install react-slick --save
  //npm install slick-carousel

  const location = useLocation()

  //SimpleSlider
  const settings = {
    dots: true, // Show navigation dots below the slider
    infinite: true, // Loop through slides infinitely
    speed: 500, // Slide transition speed (500ms)
    slidesToShow: 1, // Default: Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    responsive: [
      {
        breakpoint: 1024, // Large screens (≥1024px)
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets (≥768px)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile screens (≤480px)
        settings: {
          slidesToShow: 1, // Show only 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  }
  //MultipleItems
  const settingsMultipleItems = {
    dots: true, // नीचे डॉट्स दिखेंगे
    infinite: true, // स्लाइड्स लूप में चलेंगी
    speed: 500, // 500ms में स्लाइड बदलेगी
    slidesToShow: 3, // डेस्कटॉप पर 3 स्लाइड दिखेंगी
    slidesToScroll: 3, // एक बार में 3 स्लाइड स्क्रॉल होंगी
    responsive: [
      {
        breakpoint: 1024, // 1024px से छोटे स्क्रीन पर
        settings: {
          slidesToShow: 2, // 2 स्लाइड दिखेंगी
          slidesToScroll: 2, // 2 स्लाइड स्क्रॉल होंगी
        },
      },
      {
        breakpoint: 768, // 768px से छोटे स्क्रीन पर (Tablet)
        settings: {
          slidesToShow: 1, // 1 स्लाइड दिखेगी
          slidesToScroll: 1, // 1 स्लाइड स्क्रॉल होगी
        },
      },
      {
        breakpoint: 480, // 480px से छोटे स्क्रीन पर (Mobile)
        settings: {
          slidesToShow: 1, // 1 स्लाइड दिखेगी
          slidesToScroll: 1, // 1 स्लाइड स्क्रॉल होगी
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2,
          rows: 2, // Keep 2 rows
          centerMode: false, // Disable centering on smaller screens
        },
      },
      {
        breakpoint: 768, // Mobile (Large)
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 2, // Keep 2 rows but 1 slide per row
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // Mobile (Small)
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 1, // Change to 1 row for small screens
          centerMode: false,
        },
      },
    ],
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

  //   #Play .slick-dots li  {
  //     width: 40px;

  // }

  //  #Play .slick-dots li button {
  //     width: 40px;

  // }

  // #Play .slick-dots li button:before {
  //     width: 40px;
  //     height: 7px;
  //     content: '' !important;
  //     border-radius: 3px;
  //     background: black;
  // }
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

  //SwipeToSlide
  const settingsSwipeToSlide = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`)
    },
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // Large Mobile
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  }
  //CustomPaging

  const imagesCustomPaging = [
    "https://pikaso.cdnpk.net/public/media/tti-examples/13.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/33.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/37.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/07.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/02.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg",
  ]
  const settingsCustomPaging = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={imagesCustomPaging[i]} // Ensure thumbnails match slides
            className="w-[100px] h-[50px] object-cover rounded-md border border-gray-300"
            alt={`Thumbnail ${i + 1}`}
          />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // FocusOnSelect
  const settingsFocusOnSelect = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  }
  //Right to Left

  const settingsRightoLeft = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  //SlickGoTo
  const [slideIndex, setSlideIndex] = useState(0)
  const [updateCount, setUpdateCount] = useState(0)
  let sliderRefSlickGoTo = useRef(null)
  const settingsSlickGoTo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: Show 3 slides
    slidesToScroll: 1,
    afterChange: () => setUpdateCount((prev) => prev + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  //DynamicSlides
  const [slides, setSlides] = useState([
    "https://pikaso.cdnpk.net/public/media/tti-examples/08.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/02.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/08.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/02.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/08.jpg",
    "https://pikaso.cdnpk.net/public/media/tti-examples/02.jpg",
  ])

  const handleClick = () => {
    setSlides((prevSlides) =>
      prevSlides.length === 6
        ? [
            ...prevSlides,
            "https://pikaso.cdnpk.net/public/media/tti-examples/50.jpg",
            "https://pikaso.cdnpk.net/public/media/tti-examples/08.jpg",
            "https://pikaso.cdnpk.net/public/media/tti-examples/50.jpg",
          ]
        : prevSlides.slice(0, 6)
    )
  }
  const settingsDynamicSlides = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // For screens < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For screens < 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // VerticalSwipeToSlide

  const settingsVerticalSwipeToSlide = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide)
    },
    responsive: [
      {
        breakpoint: 1024, // Medium screens (<1024px)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (<768px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  //Previous Next Methods

  // #prenext .slick-prev,
  // #prenext .slick-next {
  //   background-color: black !important;
  //   border-radius: 50%;
  //   width: 30px;
  //   height: 30px;
  // }

  // #prenext .slick-prev:before,
  // #prenext .slick-next:before {
  //   font-size: 20px;
  //   color: red;
  // }
  const sliderRefnextprev = useRef(null)
  const next = () => {
    if (sliderRefnextprev.current) {
      sliderRefnextprev.current.slickNext()
    }
  }
  const previous = () => {
    if (sliderRefnextprev.current) {
      sliderRefnextprev.current.slickPrev()
    }
  }

  const settingsnextprev = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  //Append Dots
  const settingsAppendDots = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div>{location.pathname === "/SliderType" ? <Header /> : null}</div>

      <div
        className={`w-[100%]  flex flex-col gap-[100px] ${
          location.pathname === "/" ? "h-screen overflow-auto" : ""
        } `}
      >
        {/* simple slider */}
        <div className="max-w-[90%] mx-auto  bg-[white] ">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            simple slider
          </h2>

          {/* //SimpleSlider */}
          <Slider {...settings}>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/0a5e7bca-6a98-4925-ac7f-296d43c9d21d.jpg?token=exp=1741369997~hmac=6c32b667af1ab03792e61af0b98e116a5e64615135369a6b6d2b8f00fe53f00c"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/6a2b6af1-f3c9-4dcb-adec-f7c0fa6fbf0b.jpg?token=exp=1741369997~hmac=891eb8ed40cbe5f57f943945de971a9866abc0ef382acdbfb56353e21e066eec"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/dddb88ce-ba92-4409-bb39-c27c7deebc38.jpg?token=exp=1741369997~hmac=bb40581348b432d729b4a6d18410f7e53238230d91cf8e238c572595ed5370bf"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/fc7f08e0-1a88-474b-903c-27d18d38ad43.jpg?token=exp=1741369997~hmac=70130db815a757341c5235e3e7991c791715ac60fab48c1d1473fdc0a6bd5078"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/ebfdb5a6-47e5-4983-b71f-479824ef4cc5.jpg?token=exp=1741369997~hmac=3addf4a9adc94425ad8b748857725745dccbbff57ae55864bbc4f2aec3da7baa"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
            <div>
              <div className="p-3">
                <img
                  src="https://cdn-cm.freepik.com/previews/32f13ec4-6edc-46d1-8de2-fe5f2031fd4b.jpg?token=exp=1741369997~hmac=eca81522316e814e274c22cbbaaa94e92323c8a89748f536fbc57fe94e711895"
                  alt="test"
                  className="h-[50vh] w-[100%]"
                />
              </div>
            </div>
          </Slider>
        </div>

        {/*             Multiple Items slider
         */}
        <div className="max-w-[90%] mx-auto  bg-[white] ">
          <h2 className="text-center font-medium text-[35px]">
            {" "}
            Multiple Items slider
          </h2>

          {/* settingsMultipleItems */}
          <Slider {...settingsMultipleItems}>
            {[
              "https://cdn-cm.freepik.com/previews/8724d168-840b-453d-a7d0-d1d2cfe6d972.jpg?token=exp=1741369997~hmac=5d91234ba50ed8cd24e439f71db76a0e5563c83cca74e5eb6127250751c33f95",
              "https://cdn-cm.freepik.com/previews/1f189c17-80f8-455e-b7d9-8d35db6d29fe.jpg?token=exp=1741369997~hmac=8d6a92fa6efaa252461b8899f4bbd9348290ac555e939758a51b243dcac27f02",
              "https://cdn-cm.freepik.com/previews/a4c68a36-a4bf-4e4a-b388-66c5a56381e5.jpg?token=exp=1741369997~hmac=17401634b235166f150e58a9f78426e5d4744e2de4f02d1516c3b8a1e6b2b716",
              "https://cdn-cm.freepik.com/previews/f66f651a-31ec-4d6b-8008-c882a6ead817.jpg?token=exp=1741369997~hmac=9e4ccfbf04507048b67542ab5addea56a2e310f36856f5ffd8cf1c1946336367",
              "https://cdn-cm.freepik.com/previews/7550ccb1-d3b6-40fc-a72e-77d5c9254c09.jpg?token=exp=1741369997~hmac=630b0c96b5efc884990656c5d3f095cf8471851fbf87cd11fea4f4e87e90ba76",
            ].map((src, index) => (
              <div key={index}>
                <div className="p-2">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Responsive slider */}
        <div className="w-[90%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">
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
              <div key={index}>
                <div className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Resizable */}
        <div className="w-[90%] mx-auto overflow-auto">
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
                <div key={index}>
                  <div className="p-1">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="h-[50vh] w-full rounded-lg shadow-lg"
                    />
                  </div>
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
              "https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg",
              "https://pikaso.cdnpk.net/public/media/character-examples/2.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/26.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg",
              "https://pikaso.cdnpk.net/public/media/character-examples/2.jpg?v=1",
              "https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/26.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg",
              "https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg",
            ].map((src, index) => (
              <div key={index}>
                <div className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg"
                  />
                </div>
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
              <div key={index}>
                <div className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg"
                  />
                </div>
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
              <div key={index}>
                <div className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg cover"
                  />
                </div>
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
              <div>
                <div key={index} className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg"
                  />
                </div>
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
            <div className="p-1" style={{ width: 100 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/14.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                className="h-[50vh]"
              />{" "}
            </div>
            <div className="p-1" style={{ width: 200 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/43.jpg"
                className="h-[50vh]"
              />{" "}
            </div>
            <div className="p-1" style={{ width: 75 }}>
              <img
                src="https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg"
                alt="https://pikaso.cdnpk.net/public/production/prompt-templates/121.jpeg"
                className="h-[50vh]"
              />{" "}
            </div>
            <div className="p-1" style={{ width: 300 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/20.jpg"
                className="h-[50vh]"
              />{" "}
            </div>
            <div className="p-1" style={{ width: 225 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/illustration-examples/6.jpg"
                alt="https://pikaso.cdnpk.net/public/media/illustration-examples/6.jpg"
                className="h-[50vh]"
              />{" "}
            </div>
            <div className="p-1" style={{ width: 175 }}>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg"
                alt="https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg"
                className="h-[50vh]"
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
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/3d-examples/1.jpg"
                  className="w-full h-[50vh]"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/production/prompt-templates/116.jpeg"
                  className="w-full h-[50vh]"
                />{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  delectus ipsa voluptatum quas nemo architecto suscipit eos,
                  aspernatur eligendi veritatis mollitia, nobis quisquam
                  dignissimos adipisci laborum unde consectetur, ut nisi!
                </p>
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/production/prompt-templates/118.jpeg"
                  className="w-full h-[50vh]"
                />{" "}
                <p>See ....</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores quis eum, exercitationem sint mollitia vel soluta aut
                  facere. Nostrum cumque earum blanditiis corrupti. Soluta
                  delectus eaque perspiciatis! Explicabo, mollitia neque?
                </p>
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/production/prompt-templates/117.jpeg"
                  className="w-full h-[50vh]"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/3d-examples/3.jpg"
                  className="w-full h-[50vh]"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/3d-examples/2.jpg"
                  className="w-full h-[50vh]"
                />
              </div>
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
              <div key={index}>
                <div className="p-3">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg"
                  />
                </div>
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
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* AutoPlayMethods */}
        <div className="w-[95%] mx-auto" id="Play">
          <h2 className="text-center text-xl font-bold mb-4">
            Auto Play & Pause with Buttons
          </h2>
          <Slider ref={sliderRef} {...settingsAutoPlayMethods}>
            {images.map((src, index) => (
              <div>
                <div key={index} className="p-2">
                  <img
                    src={src}
                    className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
                  />
                </div>
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
        <div className="w-[95%] mx-auto ">
          <h2 className="text-center font-medium text-[35px]">AsNavFor</h2>
          <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            <div>
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/bccecf37-559c-4b0d-97b5-b03e24728e1d.jpg?token=exp=1741367223~hmac=1e978b45377a9f2db625561bc88149a1dd7020819eda7a545530faf2b1dc7444"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>

            <div>
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/552c4bb1-48f9-4899-b4b9-3d8a0eaa4aec.jpg?token=exp=1741367223~hmac=3d9c50764b58792c636a6284707e5de8ea944956abb09cf0aff59bc3d45396be"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                className="w-full h-[50vh]  object-cover"
              />
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/tti-examples/29.jpg"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
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
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/bccecf37-559c-4b0d-97b5-b03e24728e1d.jpg?token=exp=1741367223~hmac=1e978b45377a9f2db625561bc88149a1dd7020819eda7a545530faf2b1dc7444"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <img
                src="https://cdn-cm.freepik.com/previews/552c4bb1-48f9-4899-b4b9-3d8a0eaa4aec.jpg?token=exp=1741367223~hmac=3d9c50764b58792c636a6284707e5de8ea944956abb09cf0aff59bc3d45396be"
                className="w-full h-[50vh]  object-cover"
              />
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://cdn-cm.freepik.com/previews/92c7b2d0-0242-4eb2-b699-223833ebb6b8.jpg?token=exp=1741367223~hmac=0cd0fb6d0658e17698acf465dfe9035b6f992d3cddab05d9c101c8181de97c8a"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
            <div>
              <img
                src="https://pikaso.cdnpk.net/public/media/tti-examples/29.jpg"
                className="w-full h-[50vh]  object-cover"
              />
            </div>
            <div>
              <div className="p-2">
                <img
                  src="https://pikaso.cdnpk.net/public/media/tti-examples/04.jpg"
                  className="w-full h-[50vh]  object-cover"
                />
              </div>
            </div>
          </Slider>
        </div>
        {/* SwipeToSlide */}

        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px]">SwipeToSlide</h2>
          <Slider {...settingsSwipeToSlide}>
            {[
              "https://pikaso.cdnpk.net/public/media/tti-examples/13.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/33.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/37.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/07.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/02.jpg",
              "https://pikaso.cdnpk.net/public/media/tti-examples/45.jpg",
            ].map((src, index) => (
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg object-cover transform scale-105 transition-all duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CustomPaging */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px] happy">
            CustomPaging
          </h2>
          <Slider {...settingsCustomPaging}>
            {imagesCustomPaging.map((src, index) => (
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[80vh] w-full rounded-lg shadow-lg object-cover transform scale-105 transition-all duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* FocusOnSelect */}

        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-[35px] font-medium text-[red]">
            FocusOnSelect
          </h2>
          <div>Click on any slide to select and make it current slide</div>
          <Slider {...settingsFocusOnSelect}>
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
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* RightoLeft */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-[35px] font-medium text-[red]">
            Right to Left
          </h2>
          <Slider {...settingsRightoLeft}>
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
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slick Go To
         */}
        <div className="w-[95%] mx-auto">
          <div className="text-center font-medium text-[red] text-[35px] ">
            Slick Go To
          </div>
          <p>Total updates: {updateCount} </p>
          <input
            onChange={(e) => sliderRefSlickGoTo.slickGoTo(e.target.value)}
            value={slideIndex}
            type="range"
            min={0}
            max={3}
          />
          <Slider
            ref={(slider) => {
              sliderRefSlickGoTo = slider
            }}
            {...settingsSlickGoTo}
          >
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
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DynamicSlides */}
        <div className="w-[95%] mx-auto">
          <h2 className="text-center font-medium text-[35px] text-[red]">
            Dynamic Slides
          </h2>
          <div className="">
            <button
              className="button table bg-[green] text-white p-2 rounded-lg"
              onClick={handleClick}
            >
              Click to change slide count
            </button>
            <Slider {...settingsDynamicSlides}>
              {slides.map((slide, index) => {
                return (
                  <div key={index}>
                    <div className="m-3">
                      <img
                        src={slide}
                        className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                      />
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>

        {/*   // VerticalSwipeToSlide
         */}

        <div className="w-[95%] mx-auto">
          <h2 className="text-center text-[35px] font-medium text-[red]">
            VerticalSwipeToSlide{" "}
          </h2>
          <Slider {...settingsVerticalSwipeToSlide}>
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
              <div key={index}>
                <div className="p-3 overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Previous Next Methods
         */}
        <div className="w-[95%] mx-auto" id="prenext">
          <h2 className="text-[35px] text-center text-[red]">
            Previous Next Methods
          </h2>
          <Slider ref={sliderRefnextprev} {...settingsnextprev}>
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
            ].map((num, index) => (
              <div key={index}>
                <div className="m-3">
                  <img
                    src={num}
                    alt={index + 1}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 "
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-[25px] gap-5">
            <button
              className="button rounded-xl p-[6px] bg-[green] text-white"
              onClick={previous}
            >
              Previous
            </button>
            <button
              className="button rounded-xl p-[6px] bg-[green] text-white ml-2"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>

        {/* settingsAppendDots */}
        <div className="w-[90%] mx-auto">
          <h2 className="text-center text-[35px] font-medium text-[red]">
            Append Dots
          </h2>
          <Slider {...settingsAppendDots}>
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
            ].map((num, index) => (
              <div key={index}>
                <div className="m-3">
                  <img
                    src={num}
                    alt={index + 1}
                    className="h-[50vh] w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 "
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
