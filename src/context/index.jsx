import React from "react";
import { AuthProvider } from "./Auth";
import CourseProvider from "./Courses";

export default function MainContextProvider({ children }) {
  return (
    <AuthProvider>
      <CourseProvider>{children}</CourseProvider>
    </AuthProvider>
  );
}
