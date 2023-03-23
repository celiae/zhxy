import DepartmentCreate from "../page/department/DepartmentCreate";
import DepartmentDetail from "../page/department/DepartmentDetail";
import DepartmentFinanceCreate from "../page/department/departmentfinance/DepartmentFinanceCreate";
import DepartmentFinanceUpdate from "../page/department/departmentfinance/DepartmentFinanceUpdate";
import DepartmentList from "../page/department/DepartmentList";
import DepartmentUpdate from "../page/department/DepartmentUpdate";

export default {
  path: "department",
  children: [
    {
      index: true,
      element: <DepartmentList />,
    },
    {
      path: "create",
      element: <DepartmentCreate />,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <DepartmentDetail />,
        },
        {
          path: "update",
          element: <DepartmentUpdate />,
        },
        {
          path: "finance",
          element: <DepartmentFinanceCreate />,
        },
        {
          path: "finance/:id",
          element: <DepartmentFinanceUpdate />,
        },
      ],
    },
  ],
};
