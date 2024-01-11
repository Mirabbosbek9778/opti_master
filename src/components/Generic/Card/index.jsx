import React from "react";
import { Wrap } from "./style";
import { NavLink } from "react-router-dom";
// import numeral from 'numeral';
// {numeral(view).format('0.0a')}
const GenericCard = ({ image, status, title, lang, view, like, courses }) => {
  return (
    <Wrap>
      <NavLink to={status}>
        <Wrap.Header bg={image} status={status}>
          {status && <span className="status">{status}</span>}
        </Wrap.Header>
      </NavLink>
      <Wrap.Title>{title}</Wrap.Title>
      <Wrap.Footer>
        <div className="course_details">
          <span>{lang && lang.toUpperCase()}</span>
          <span className="courses">{courses && `${courses} courses`}</span>
        </div>
        <div className="reactions"></div>
      </Wrap.Footer>
    </Wrap>
  );
};

export default GenericCard;
