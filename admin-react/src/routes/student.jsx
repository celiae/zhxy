import ScoreCreate from "../page/score/ScoreCreate";
import ScoreDetail from "../page/score/ScoreDetail";
import ScoreList from "../page/score/ScoreList";
import ScoreUpdate from "../page/score/ScoreUpdate";
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
};
