import Generic from "../components/Generic";
import Home from "../components/Home";
import CourseItem from "../components/Home/Courses/CourseItem";

export const data = [
  {
    id: 1,
    title: "Home",
    path: "/",
    Component: Home,
    private: true,
  },
  {
    id: 2,
    title: "Courses",
    path: "courses",
    Component: Generic,
  },
  {
    id: 3,
    title: "Why Us",
    path: "why-us",
    Component: Generic,
  },
  {
    id: 4,
    title: "Experts",
    path: "experts",
    Component: Generic,
  },
  {
    id: "1-1",
    title: "Home",
    path: "/:id",
    Component: CourseItem,
    private: true,
  },
];
