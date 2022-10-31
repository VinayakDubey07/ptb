import React, { useState } from "react";
import "./booking.css";
import pic1 from "../../images/teacher.png";
import pic2 from "../../images/doubt.png";
import AddTopic from "../AddTopic/AddTopic";

const Booking = () => {
  const [topics, setTopics] = useState([
    "Laws of Motion",
    "Fluid Dynamics",
    "Rotational Mechanics",
  ]);
  const addNew = (topic) => {
    setTopics([...topics, topic]);
  };
  const [classDetails, setClassDetails] = useState({
    class: "11",
    subject: "Physics",
    lang: ["English", "Hindi", "Hinglish"],
  });
  const [showTopics, setShowTopics] = useState(false);
  const sharpen = () => {
    setShowTopics(!showTopics);
  };
  return (
    <div className="bookflexxcol">
      <div className="bookflexxrow">
        <div className="bookdetails">
          <i className="fa-solid fa-lock lockicon"></i>
          {classDetails?.class} Class{" "}
        </div>
        <div className="bookdetails">
          <i className="fa-solid fa-lock lockicon"></i>
          {classDetails?.subject}{" "}
        </div>
        <select className="bookselect">
          <option value="#">Select Language</option>

          {classDetails?.lang.map((item, ind) => {
            return (
              <option key={ind} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bookopflexxrow">
        <div className="bookflexx2">
          <img className="bookpics" src={pic1} alt="" />
          <div className="bookflexxcol2">
            <p className="fields">Doubt</p>
            <p className="fields">Solving</p>
          </div>
        </div>
        <div
          onClick={sharpen}
          className={showTopics ? "bookflexx2true" : "bookflexx2"}
        >
          <img className="bookpics" src={pic2} alt="" />
          <div className="bookflexxcol2">
            <p className="fields">Sharp Your</p>
            <p className="fields">Concepts</p>
          </div>
        </div>
      </div>
      {showTopics ? (
        <AddTopic addnew={addNew} topics={topics} />
      ) : (
        <>
          <div className="know lightshade">
            What your teacher should know before class?
          </div>
          <textarea name="" id="" cols="30" rows="6"></textarea>
          <div className="bookbtns">
            <button className="b1">
              {" "}
              <i className="fa-solid fa-calendar-week"></i> &nbsp;Check
              Availability
            </button>
            <button className="b2">Make Payment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
