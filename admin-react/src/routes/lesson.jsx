import LessonCreate from "../page/lesson/LessonCreate";
import LessonDetail from "../page/lesson/LessonDetail";
import LessonList from "../page/lesson/LessonList";
import LessonUpdate from "../page/lesson/LessonUpdate";

export default {
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
};
