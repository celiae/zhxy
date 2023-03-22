import ClassesCreate from "../page/classes/ClassesCreate";
import ClassesDetail from "../page/classes/ClassesDetail";
import ClassesList from "../page/classes/ClassesList";
import ClassesUpdate from "../page/classes/ClassesUpdate";

export default {
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
};
