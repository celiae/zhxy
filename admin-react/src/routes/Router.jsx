import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";
import Layout from "../layout/Layout";
import Home from "../page/home/Home";
import Signin from "../login/Signin";
import Signup from "../login/Signup";
import chart from "./chart";
import classes from "./classes";
import department from "./department";
import lab from "./lab";
import lesson from "./lesson";
import personal from "./personal";
import setting from "./setting";
import student from "./student";
import teacher from "./teacher";
import exam from "./exam";
import score from "./score";
import classroom from "./classroom";

const initailRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: ":username",
        children: [
          {
            index: true,
            element: <Home />,
          },
          teacher,
          student,
          classroom,
          score,
          classes,
          lesson,
          lab,
          department,
          chart,
          exam,
          personal,
          setting,
        ],
      },
    ],
  },
]);

export default initailRouter;
