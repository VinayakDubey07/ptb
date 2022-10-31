import React from "react";
import Booking from "../../Booking/Booking";
import Details from "../../facultydetails/Details";
import "./faculty.css";

const Faculty = () => {
  return (
    <div className="flexxrow">
      <Details />
      <Booking />
    </div>
  );
};

export default Faculty;
