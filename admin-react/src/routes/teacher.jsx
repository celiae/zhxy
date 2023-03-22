import TeacherCreate from "../page/teacher/TeacherCreate";
import TeacherDetail from "../page/teacher/TeacherDetail";
import TeacherList from "../page/teacher/TeacherList";
import TeacherUpdate from "../page/teacher/TeacherUpdate";

export default {
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
};
