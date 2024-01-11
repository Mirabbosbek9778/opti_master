import { useReducer, createContext, useContext } from "react";
import { reducer, initialState } from "./reducer";

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);
const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CourseContext.Provider value={[state, dispatch]}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
