import RepairCreate from "../page/repair/RepairCreate";
import RepairDetail from "../page/repair/RepairDetail";
import RepairList from "../page/repair/RepairList";
import RepairUpdate from "../page/repair/RepairUpdate";

export default {
  path: "repair",
  children: [
    {
      index: true,
      element: <RepairList />,
    },
    {
      path: "create",
      element: <RepairCreate />,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <RepairDetail />,
        },
        {
          path: "update",
          element: <RepairUpdate />,
        },
      ],
    },
  ],
};
