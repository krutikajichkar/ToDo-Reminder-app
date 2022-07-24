import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1
        style={{ textAlign: "center", wordSpacing: "4px", marginTop: "50px" }}
      >
        Select App of your choice...
      </h1>
      <div id="main-div">
        <Link to="todo">
          <div className="child-div">
            <h2 style={{textDecoration:'none'}}>ToDo App</h2>
            <p>
              Enter your daily tasks to be done here. You can save them , delete
              them accordingly.
            </p>
          </div>
        </Link>
        <Link to="reminder">
          <div className="child-div">
            <h2>Reminder App</h2>
            <p>Set your daily remainder here and get notified on time.</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
