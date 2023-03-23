import StudentCreate from "../page/student/StudentCreate";
import StudentDetail from "../page/student/StudentDetail";
import StudentList from "../page/student/StudentList";
import StudentUpdate from "../page/student/StudentUpdate";

export default {
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
  ],
};
