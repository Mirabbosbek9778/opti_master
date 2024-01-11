import React, { useState } from "react";
import { Wrap } from "../Overview/style";
import GenericCard from "../../Generic/Card";

const Courses = () => {
  const [courses] = useState([1, 2, 3, 4, 5]);
  // useEffect(() => {
  //   request({
  //     url: 'courses',
  //   }).then((res) => {
  //     setCourses(res);
  //   });
  // }, []);
  return (
    <Wrap>
      <Wrap.Title>Subscriptions & Courses:</Wrap.Title>
      <Wrap.Cards>
        {courses?.map(() => (
          <GenericCard
            title={"ACCA Mock & Talk Webinars"}
            image={
              "https://cdn5.dcbstatic.com/files/s/i/signallearn_docebosaas_com/assets/courselogo/original/Docebo+Image+Templates+-+2022-08-23T131245-2022-08-23-07-43-13.jpeg"
            }
            status="In Progress"
            lang={"en"}
            view={120021}
            like={30}
            courses={4}
          />
        ))}
      </Wrap.Cards>
    </Wrap>
  );
};

export default Courses;
