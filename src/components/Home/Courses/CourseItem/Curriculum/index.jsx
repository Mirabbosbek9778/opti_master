import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Card, Courses, Level, LevelBox, Wrap } from "./style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { accountancy } from "../../data";

const Curriculum = () => {
  // The initial value of the Data changes when the backend is connected. For this test
  const [data] = useState(accountancy[0]?.curriculum);
  // default level and section
  const [check, setCheck] = useState("level1");
  const [course, setCourse] = useState(data[0]?.courses);

  // Find the Course Department
  const select = (e, id) => {
    setCheck(e.target.id);
    let selectCourse = data.filter((item) => item.id == id);
    setCourse(selectCourse[0].courses);
  };

  return (
    <Wrap id='curriculum'>
      <div className="container p2">
        <p className="top">CURRICULUM</p>
        <h1 className="title">AAT Courses 📒</h1>
        <p className="text">
          Boost your skills and career with an in-demand professional
          qualification. Choose the right course for you to kickstart a path to
          learning and career success!
        </p>
        <p className="top">Levels:</p>
        <Level>
          {data?.map((item) => {
            return (
              <LevelBox
                key={item?.id}
                checked={check == `level${item.id}` ? 1 : 0}
              >
                <div className="check">
                  <input
                    type="radio"
                    name="level"
                    id={`level${item.id}`}
                    onChange={(e) => select(e, item?.id)}
                  />
                  <label htmlFor={`level${item.id}`} className="desc">
                    {item?.name}
                    <br />
                    <span>{item?.coursesCount} COURSES</span>
                  </label>
                </div>
                <NavLink to={"/"} className="h6">
                  Learn More <ArrowForwardIcon />
                </NavLink>
              </LevelBox>
            );
          })}
        </Level>
        <p className="top">Courses:</p>
        <Courses>
          {course?.map((item) => {
            return (
              <Card key={item.id}>
                <span className="status">{item?.status}</span>
                <h4>{item?.title}</h4>
                <NavLink to={'/'}>See Details {">"} </NavLink>
              </Card>
            );
          })}
        </Courses>
      </div>
    </Wrap>
  );
};

export default Curriculum;
