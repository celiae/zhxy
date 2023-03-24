import React from "react";
import TabHeaderNav from "../../components/tabs/TabHeaderNav";
import ChartDepartment from "./ChartDepartment";
import ChartLab from "./ChartLab";
import ChartTeacher from "./ChartTeacher";
const tabItem = [
  {
    index: 0,
    label: "实验室",
    component: <ChartLab />,
  },
  {
    index: 1,
    label: "教师",
    component: <ChartTeacher />,
  },
  {
    index: 2,
    label: "部门",
    component: <ChartDepartment />,
  },
];
export default function ChartList() {
  return <TabHeaderNav tabItem={tabItem} />;
}
