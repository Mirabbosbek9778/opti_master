export const initialState = {
  allCourses: [],
  enrolledCourses: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setAllCourses":
      return {
        ...state,
        allCourses: action.payload,
      };
    case "setEnrolledCourse":
      return {
        ...state,
        enrolledCourses: action.payload,
      };
    default:
      return state;
  }
};
