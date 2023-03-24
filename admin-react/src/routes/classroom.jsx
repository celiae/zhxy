import ClassroomCreate from "../page/classroom/ClassroomCreate";
import ClassroomDetail from "../page/classroom/ClassroomDetail";
import ClassroomList from "../page/classroom/ClassroomList";
import ClassroomUpdate from "../page/classroom/ClassroomUpdate";

export default {
  path: "classroom",
  children: [
    {
      index: true,
      element: <ClassroomList />,
    },
    {
      path: "create",
      element: <ClassroomCreate />,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <ClassroomDetail />,
        },
        {
          path: "update",
          element: <ClassroomUpdate />,
        },
      ],
    },
  ],
};
