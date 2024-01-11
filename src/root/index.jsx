import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import { data } from "../utilits/navbar";
import { sidebar } from "../utilits/sidebar";
import PrivateRoute from "./PrivateRoutes";
import Course from "../components/Dashboard/Courses/Course";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path={"*"} element={<div>you are lost</div>} />

      <Route path="user" element={<Dashboard />}>
        {sidebar?.map(({ id, path, Component }) => (
          <Route
            key={id}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}
        <Route path="courses/:courseId" element={<Course />} />
      </Route>
    </Routes>
  );
};

export default Root;
