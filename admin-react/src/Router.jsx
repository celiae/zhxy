import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";
import Layout from "./layout/Layout";
import ChartList from "./page/chart/ChartList";
import ClassesCreate from "./page/classes/ClassesCreate";
import ClassesDetail from "./page/classes/ClassesDetail";
import ClassesList from "./page/classes/ClassesList";
import ClassesUpdate from "./page/classes/ClassesUpdate";
import DepartmentCreate from "./page/department/DepartmentCreate";
import DepartmentDetail from "./page/department/DepartmentDetail";
import DepartmentList from "./page/department/DepartmentList";
import DepartmentUpdate from "./page/department/DepartmentUpdate";
import Home from "./page/home/Home";
import LabCreate from "./page/lab/LabCreate";
import LabDetail from "./page/lab/LabDetail";
import LabList from "./page/lab/LabList";
import LabUpdate from "./page/lab/LabUpdate";
import LessonCreate from "./page/lesson/LessonCreate";
import LessonDetail from "./page/lesson/LessonDetail";
import LessonList from "./page/lesson/LessonList";
import LessonUpdate from "./page/lesson/LessonUpdate";
import Signin from "./page/login/Signin";
import Signup from "./page/login/Signup";
import PersonalDetail from "./page/personal/PersonalDetail";
import ScoreCreate from "./page/score/ScoreCreate";
import ScoreDetail from "./page/score/ScoreDetail";
import ScoreList from "./page/score/ScoreList";
import ScoreUpdate from "./page/score/ScoreUpdate";
import Settings from "./page/setting/Settings";
import StudentCreate from "./page/student/StudentCreate";
import StudentDetail from "./page/student/StudentDetail";
import StudentList from "./page/student/StudentList";
import StudentUpdate from "./page/student/StudentUpdate";
import TeacherCreate from "./page/teacher/TeacherCreate";
import TeacherDetail from "./page/teacher/TeacherDetail";
import TeacherList from "./page/teacher/TeacherList";
import TeacherUpdate from "./page/teacher/TeacherUpdate";

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
          {
            path: "teacher",
            children: [
              {
                index: true,
                element: <TeacherList />,
              },
              {
                path: "create",
                element: <TeacherCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <TeacherDetail />,
                  },
                  {
                    path: "update",
                    element: <TeacherUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "student",
            children: [
              {
                index: true,
                element: <StudentList />,
              },
              {
                path: "create",
                element: <StudentCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <StudentDetail />,
                  },
                  {
                    path: "update",
                    element: <StudentUpdate />,
                  },
                ],
              },
              {
                path: "score",
                children: [
                  {
                    index: true,
                    element: <ScoreList />,
                  },
                  {
                    path: "create",
                    element: <ScoreCreate />,
                  },
                  {
                    path: "detail",
                    element: <ScoreDetail />,
                  },
                  {
                    path: "update",
                    element: <ScoreUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "classes",
            children: [
              {
                index: true,
                element: <ClassesList />,
              },
              {
                path: "create",
                element: <ClassesCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <ClassesDetail />,
                  },
                  {
                    path: "update",
                    element: <ClassesUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "lesson",
            children: [
              {
                index: true,
                element: <LessonList />,
              },
              {
                path: "create",
                element: <LessonCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <LessonDetail />,
                  },
                  {
                    path: "update",
                    element: <LessonUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "lab",
            children: [
              {
                index: true,
                element: <LabList />,
              },
              {
                path: "create",
                element: <LabCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <LabDetail />,
                  },
                  {
                    path: "update",
                    element: <LabUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "department",
            children: [
              {
                index: true,
                element: <DepartmentList />,
              },
              {
                path: "create",
                element: <DepartmentCreate />,
              },
              {
                path: ":id",
                children: [
                  {
                    index: true,
                    element: <DepartmentDetail />,
                  },
                  {
                    path: "update",
                    element: <DepartmentUpdate />,
                  },
                ],
              },
            ],
          },
          {
            path: "chart",
            children: [
              {
                index: true,
                element: <ChartList />,
              },
            ],
          },
          {
            path: "personal",
            children: [
              {
                index: true,
                element: <PersonalDetail />,
              },
            ],
          },
          {
            path: "setting",
            children: [
              {
                index: true,
                element: <Settings />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default initailRouter;
