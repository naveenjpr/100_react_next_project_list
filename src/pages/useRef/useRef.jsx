import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Common page/Header";

export default function UseRef() {
  const location = useLocation();

  return (
    <>
      <div>{location.pathname === "/UseRef" ? <Header/> : null}</div>

      <NumberAdd />
      <FocusInput />
      <PreviousValue />
    </>
  );
}

function NumberAdd() {
  let num1 = useRef();
  let num2 = useRef();
  let outputdat = useRef();

  let sumdata = () => {
    let first = num1.current.value;
    let second = num2.current.value;
    let finaloutput = Number(first) + Number(second);
    outputdat.current.value = finaloutput;
    console.log(first, second);
  };

  return (
    <>
      <div className="bg-[green] flex flex-col justify-center items-center  max-h-[450px] py-[50px] ">
        <h2 className="text-2xl font-bold text-white mb-4">useRef method</h2>
        <div className="my-[2px]">
          <label for="num1">Num1</label>
          <input
            type="text"
            className="border-[2px] border-[red] my-[2px]"
            ref={num1}
          />
        </div>
        <div className="my-[2px]">
          <label for="num1">Num2</label>
          <input
            type="text"
            className="border-[2px] border-[red] my-[2px]"
            ref={num2}
          />
        </div>
        <div className="my-[2px]">
          <button
            onClick={sumdata}
            className=" bg-[blue] text-white px-[10px] py-[4px]"
          >
            output
          </button>
          <input
            type="text"
            readOnly
            ref={outputdat}
            className="border-[2px] border-[red] my-[2px]"
          />
        </div>
      </div>
    </>
  );
}

function FocusInput() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <div className="max-h-[450px] py-[50px] flex flex-col items-center justify-center bg-[orange]">
      <h2 className="text-2xl font-bold text-white mb-4">useRef method</h2>

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Focus Input Example
        </h2>

        <input
          type="text"
          ref={inputElement}
          placeholder="Click the button to focus"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={focusInput}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
}

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <div className="max-h-[350px] py-[20px] flex items-center justify-center bg-slate-700">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            useRef Counter
          </h2>

          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Current count:</span> {count}
          </p>

          <p className="text-lg text-gray-500 mb-4">
            <span className="font-semibold">Previous count:</span>{" "}
            {prevCountRef.current}
          </p>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}
