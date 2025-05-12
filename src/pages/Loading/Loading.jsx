import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Common page/Header";

export default function Loading() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/Loading" ? <Header /> : null}
      <div className="max-h-screen overflow-auto p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-8">
          Loading <span className="text-blue-600">Animations</span>
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
          {[
            { title: "Defaultspinner", component: <Defaultspinner /> },
            { title: "Colors", component: <Colors /> },
            { title: "Ovel shaped loading spinner", component: <Ovelshapedloadingspinner /> },
            { title: "Animated loading dots", component: <Animatedloadingdots /> },
            { title: "Throbbing loading animation", component: <Throbbingloadinganimation /> },
            { title: "Loading spinner with image inside", component: <Lodingspinnerwithimageinside /> },
            { title: "Loading animation using animate-ping", component: <Loadinganimationusinganimateping /> },
            { title: "Dashedspinners", component: <Dashedspinners /> },
            { title: "Spinner in Tailwind", component: <Spinnerintailwind /> },
            { title: "Loader Design spinning", component: <LoaderDesignspinning /> },
            { title: "Animate-spin spinner", component: <Animatespinspinner /> },
          ].map((item, index) => (
            <div 
              key={index}
              className="w-full border border-blue-500 h-[180px] sm:h-[200px] flex flex-col justify-center items-center text-center p-2"
            >
              <h2 className="text-sm sm:text-base mb-2">{item.title}</h2>
              <div className="scale-75 sm:scale-100">
                {item.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Defaultspinner() {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function Colors() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {['blue-600', 'gray-600', 'green-500', 'red-600', 'yellow-400', 'pink-600'].map((color) => (
        <div key={color} role="status">
          <svg
            aria-hidden="true"
            className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-200 animate-spin dark:text-gray-600 fill-${color}`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}

function Ovelshapedloadingspinner() {
  return (
    <div className="relative">
      <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full border-t-4 sm:border-t-8 border-b-4 sm:border-b-8 border-gray-200"></div>
      <div className="absolute top-0 left-0 h-16 w-16 sm:h-24 sm:w-24 rounded-full border-t-4 sm:border-t-8 border-b-4 sm:border-b-8 border-blue-500 animate-spin"></div>
    </div>
  );
}

function Animatedloadingdots() {
  return (
    <div className="flex gap-2">
      {[1, 2, 3].map((dot) => (
        <div key={dot} className="w-3 h-3 sm:w-5 sm:h-5 rounded-full animate-pulse bg-blue-600"></div>
      ))}
    </div>
  );
}

function Throbbingloadinganimation() {
  return (
    <div className="relative inline-flex">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full"></div>
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
  );
}

export function Lodingspinnerwithimageinside() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-20 w-20 sm:h-32 sm:w-32 border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-purple-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-16 w-16 sm:h-28 sm:w-28"
        alt="Loading avatar"
      />
    </div>
  );
}

function Loadinganimationusinganimateping() {
  return (
    <div className="rounded-full h-12 w-12 sm:h-20 sm:w-20 bg-violet-800 animate-ping"></div>
  );
}

function Dashedspinners() {
  return (
    <div className="flex flex-row gap-2 sm:gap-4">
      {['cyan-500', 'indigo-500', 'pink-500', 'green-500'].map((color, i) => (
        <div 
          key={color}
          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full animate-spin border border-dashed border-${color} border-t-transparent`}
          style={{ borderWidth: `${i + 1}px` }}
        ></div>
      ))}
    </div>
  );
}

function Spinnerintailwind() {
  return (
    <svg
      className="animate-spin h-12 w-12 sm:h-16 sm:w-16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

function LoaderDesignspinning() {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-7xl font-bold flex items-center">
        L
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="animate-spin h-6 w-6 sm:h-8 sm:w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
        </svg>{" "}
        ading . . .
      </h1>
    </div>
  );
}

function Animatespinspinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8 sm:w-12 sm:h-12 animate-spin"
      viewBox="0 0 16 16"
    >
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
      <path
        fillRule="evenodd"
        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
      />
    </svg>
  );
}