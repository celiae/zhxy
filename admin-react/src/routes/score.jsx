import ScoreCreate from "../page/score/ScoreCreate";
import ScoreDetail from "../page/score/ScoreDetail";
import ScoreList from "../page/score/ScoreList";
import ScoreUpdate from "../page/score/ScoreUpdate";

export default {
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
};
