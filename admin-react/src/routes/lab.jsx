import LabCreate from "../page/lab/LabCreate";
import LabDetail from "../page/lab/LabDetail";
import LabList from "../page/lab/LabList";
import LabUpdate from "../page/lab/LabUpdate";

export default {
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
};
