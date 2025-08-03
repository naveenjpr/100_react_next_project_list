import React from 'react'
import { decrement, increment, reset } from '../slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterSlice() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="flex border-2 border-red-500  flex-col items-center gap-4 p-6 bg-white shadow rounded-xl w-full mx-auto">
      <h1 className="text-xl font-bold text-gray-800">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(reset())}
        className="text-sm text-gray-600 underline hover:text-black"
      >
        Reset
      </button>
    </div>
  );
}
