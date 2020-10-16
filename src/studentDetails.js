import React from "react";
import "./style.css";
import studentDetailsValues from "./StudentValues";

const StudentDetails = ({ match }) => {
  const name = match.params.id;
  const details = studentDetailsValues.find(
    (student) => student.firstName === name
  );
  return (
    <div>
      <h1>Student Details:</h1>
      <h3>
        Name: {details.firstName} {details.lastName}
      </h3>
      <h3>Email: {details.email}</h3>
      <h3>Phone: {details.phone}</h3>
      <h3>Address: {details.address}</h3>
      <h3>Location: {details.location}</h3>
      <h3>Marks:</h3>
      <ul>
        <li>English: {details.marks.eng}</li>
        <li>Math: {details.marks.math}</li>
        <li>Science: {details.marks.science}</li>
        <li>Computers: {details.marks.computers}</li>
      </ul>
    </div>
  );
};

export default StudentDetails;
