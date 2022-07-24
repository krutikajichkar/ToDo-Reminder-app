import React from "react";
import "./Reminder.css";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import DeleteIcon from "@mui/icons-material/Delete"; 

function Reminder() {
  const defaultValue = {
    day: 24,
    month: 6,
    year: 2022,
  };

  

  const [reminder, setreminder] = useState("");
  const [inputTime, setinputTime] = useState();
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [timer, setTimer] = useState(0);
  const [data, setdata] = useState([]);

  const getDate = new Date().toString().split(" ");
  const userdate = selectedDay.day + ":" + selectedDay.month + ":" + selectedDay.year;
  const currentTime = getDate[4].slice(0, 5);
  const month = new Date().getMonth();
  const currentDate = getDate[2] + ":" + month + ":" + getDate[3];

  const notify = () => toast(reminder);

  

  const addData = () => {
    
      if(reminder && inputTime && selectedDay){
        data.push({
          reminder: reminder,
          date: selectedDay,
          time: inputTime,
        })
      }

      setSelectedDay('');
      setinputTime('');
      setreminder(' ');
  
    console.log(data);
    console.log(userdate)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 50000);

    const getNotify = () => {
      if (currentDate === userdate) {
        if (inputTime === currentTime) {
          console.log("working");

          return notify();
        }
      }
    };
    getNotify();
  }, [timer]);

  const deleteItem = (id) =>{
    const updateItems = 
    data.filter((item,index) => {
      return index!==id;
    })
  
  setdata(updateItems)
  } 

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Set Reminder Here...</h1>
      <div id="reminder-div">
        <div id="input-div">
          <input
            placeholder="Whats on your mind?"
            type="text"
            value={reminder}
            onChange={(e) => setreminder(e.target.value)}
          ></input>

          <input
            type="time"
            value={inputTime}
            onChange={(e) => setinputTime(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "purple",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "12px",
              cursor: "pointer",
            }}
            onClick={addData}
          >
            Set Reminder
          </button>
          <ToastContainer />
        </div>
        <div>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
          />
        </div>
      </div>
     
    </>
  );
}

export default Reminder;
