import React, { useState } from "react";
import "./details.css";
import dp from "../../images/dp.jpg";

const Details = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    pic: "",
    name: "Sandeep Singhal",
    degree: "B.Tech, IIT Roorkee",
    subject: "Physics",
    message:
      "Teachers don’t discriminate among their students. For a teacher, every student is full of potential to succeed. It is not important what the teacher teaches – it is important how the teacher teaches.",
    ranks: "5th, 6th",
    years: "8",
    count: "1000",
    cost: "2000",
  });
  return (
    <div className="dflexxcol">
      <img
        className="dpic"
        src={facultyDetails?.pic ? facultyDetails?.pic : dp}
        alt=""
      />
      <h2 className="darkshade name"> {facultyDetails?.name} </h2>
      <p className="lightshade degree">{facultyDetails?.degree} </p>
      <h5 className="lightshade sub">{facultyDetails?.subject} Faculty </h5>
      <p className="fmessage lightshade">{facultyDetails?.message} </p>
      <div className="dflexxrow">
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.ranks} </h3>
          <span className="lightshade">Top </span>
          <span className="lightshade">Ranks </span>
        </div>
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.years} + yrs</h3>
          <span className="lightshade">Total </span>
          <span className="lightshade">Experience </span>
        </div>
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.count} + </h3>
          <span className="lightshade">Students </span>
          <span className="lightshade">Guided</span>
        </div>
      </div>
      <div className="cost">
        <h1 className="costm darkshade">{facultyDetails?.cost} /- </h1>
        <div className="costflex">
          <p className="lightshade">Charges</p>
          <p className="lightshade">per hour</p>
        </div>
      </div>
      <button className="btn1">Scholarship</button>
      <button className="btn2">Demo Lecture</button>
    </div>
  );
};

export default Details;
