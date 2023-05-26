import React, { useState } from 'react';
import TimeInputField from "./components/TimeInputField";

function App() {
  const [times, setTimes] = useState({
    "workBegin": '07:30',
    "lunchBegin": '11:30',
    "lunchEnd": '12:30',
    "workEnd": '16:30'
  });
  let resultTimes = calcTime(times);

  const handleTimeChange = (name, time) => {
    setTimes((prevValues) => ({
      ...prevValues,
      [name]: time,
    }));
    resultTimes = calcTime(times);
  };

  return (
    <div className="bg-slate-800 min-w-screen h-1 min-h-screen flex flex-col items-center md:justify-items-center md:grid md:grid-cols-3">
      <img src="logo512.png" alt="JAZinator Logo" className="w-2/5 md:w-1/2"></img>
      <div className="bg-gray-600 md:w-fit w-5/6 h-fit rounded-xl flex flex-col items-center justify-center">

        <TimeInputField id="work-begin" label="😴 Work start" value={times["workBegin"]} onChange={(newTime) => handleTimeChange("workBegin", newTime)}/>
        <TimeInputField id="lunch-begin" label="😋 Lunch start" value={times["lunchBegin"]} onChange={(newTime) => handleTimeChange("lunchBegin", newTime)} />
        <TimeInputField id="lunch-end" label="😞 Lunch end" value={times["lunchEnd"]} onChange={(newTime) => handleTimeChange("lunchEnd", newTime)} />
        <TimeInputField id="work-end" label="🥳 Work end" value={times["workEnd"]} onChange={(newTime) => handleTimeChange("workEnd", newTime)} />
      
        <div className="bg-slate-800 w-3/4 text-3xl p-10 rounded-xl text-gray-50 mb-5 md:m-10">
          <div className='flex flex-row font-semibold text-center text-gray-300'>
            <div className='m-2'>Lunch {resultTimes.lunch}</div>
            <div className='m-2'>Work {resultTimes.work}</div>
          </div>
          <div className='font-bold text-center py-3'>
            {resultTimes.jazType === "+" ? (
              <div className='bg-green-600 rounded-md py-3'>+{resultTimes.jazTime}</div>
            ) : (
              <div className='bg-red-600 rounded-md py-3'>-{resultTimes.jazTime}</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

function calcTime(times) {
  const workBegin = times["workBegin"].split(":")
  const lunchBegin = times["lunchBegin"].split(":")
  const lunchEnd = times["lunchEnd"].split(":")
  const workEnd = times["workEnd"].split(":")

  let lunchH = parseInt(lunchEnd[0]) - parseInt(lunchBegin[0])
  let lunchM = parseInt(lunchEnd[1]) - parseInt(lunchBegin[1])
  let lunchDuration = lunchH * 60 + lunchM
  let lunchDurationStr = ""
  if(lunchDuration < 0) {
    lunchDurationStr = lunchDurationStr + "-"
  }
  lunchDurationStr = lunchDurationStr + String(parseInt(lunchDuration / 60)).replace("-", "").padStart(2, "0") + ":" + String(parseInt(lunchDuration % 60)).replace("-", "").padStart(2, "0")

  let workH = parseInt(workEnd[0]) - parseInt(workBegin[0])
  let workM = parseInt(workEnd[1]) - parseInt(workBegin[1])
  let workDuration = workH * 60 + workM - lunchDuration
  let workDurationStr = ""
  if(workDuration < 0) {
    workDurationStr = workDurationStr + "-"
  }
  workDurationStr = String(parseInt(workDuration / 60)).replace("-", "").padStart(2, "0") + ":" + String(parseInt(workDuration % 60)).replace("-", "").padStart(2, "0")

  let jazType = "+"
  let jazTime = workDuration - (480)
  if(jazTime < 0) {
    jazType = "-"
  }
  let jazTimeStr = String(parseInt(jazTime / 60)).replace("-", "").padStart(2, "0") + ":" + String(parseInt(jazTime % 60)).replace("-", "").padStart(2, "0")

  let result = {
    "lunch": lunchDurationStr,
    "work": workDurationStr,
    "jazTime": jazTimeStr,
    "jazType": jazType
  }
  return result
}