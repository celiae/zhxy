import ExamCreate from "../page/exam/ExamCreate";
import ExamDetail from "../page/exam/ExamDetail";
import ExamList from "../page/exam/ExamList";
import ExamUpdate from "../page/exam/ExamUpdate";

export default {
  path: "exam",
  children: [
    {
      index: true,
      element: <ExamList />,
    },
    {
      path: "create",
      element: <ExamCreate />,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <ExamDetail />,
        },
        {
          path: "update",
          element: <ExamUpdate />,
        },
      ],
    },
  ],
};
