import React from "react";

function TimeInputField({ value, onChange, label, id }) {
    const handleTimeChange = (event) => {
      const newTime = event.target.value;
      onChange(newTime);
    };
  
    return (
        <div className="text-center w-11/12 flex justify-start items-center mt-3">
            <label for={id} className="text-gray-300 text-xl w-1/2">{label}</label>
            <input
            id={id}
            type="time"
            value={value}
            onChange={handleTimeChange}
            className="bg-gray-300 px-5 py-3 w-1/2 rounded-md font-semibold"
            />
        </div>
    );
}
  
export default TimeInputField;