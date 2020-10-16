import React from "react";
import StudentValues from "./StudentValues";
import { Link } from "react-router-dom";
import "./style.css";

const StudentList = ({ list }) => {
  return (
    <>
      <div className="studentList_div">
        <Link to={`/addStudent`}>
          <button>Add Student</button>
        </Link>
        <h2>Student List</h2>

        {StudentValues.map((values, key) => (
          <ul>
            <li>
              {values.firstName}
              <ul>
                <li>Last Name: {values.lastName}</li>
                <li>Email: {values.email}</li>
                <li>Phone: {values.phone}</li>
                <Link key={key} to={`/details/${values.firstName}`}>
                  <p>Click to see details</p>
                </Link>
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default StudentList;
