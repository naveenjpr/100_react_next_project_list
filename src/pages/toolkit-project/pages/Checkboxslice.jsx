import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../slice/checkboxSlice';

export default function Checkboxslice() {

    const dispatch = useDispatch();
    const isChecked = useSelector((state) => state.checkbox.isChecked);


  return (
<div className="flex w-full  items-center gap-3 p-4 bg-white rounded-lg shadow-md justify-center">
  <input
    type="checkbox"
    checked={isChecked}
    onChange={() => dispatch(toggleCheckbox())}
    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
  />
  <label htmlFor="notification" className="text-gray-800 font-medium select-none">
    Enable Notifications
  </label>
</div>

  )
}
