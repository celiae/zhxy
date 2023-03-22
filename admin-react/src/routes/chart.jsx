import ChartClasses from "../page/chart/ChartClasses";
import ChartDepartment from "../page/chart/ChartDepartment";
import ChartLab from "../page/chart/ChartLab";
import ChartLesson from "../page/chart/ChartLesson";
import ChartList from "../page/chart/ChartList";
import ChartStudent from "../page/chart/ChartStudent";
import ChartTeacher from "../page/chart/ChartTeacher";

export default {
  path: "chart",
  children: [
    {
      index: true,
      element: <ChartList />,
    },
    {
      path: "student",
      element: <ChartStudent />,
    },
    {
      path: "teacher",
      element: <ChartTeacher />,
    },
    {
      path: "classes",
      element: <ChartClasses />,
    },
    {
      path: "lesson",
      element: <ChartLesson />,
    },
    {
      path: "lab",
      element: <ChartLab />,
    },
    {
      path: "department",
      element: <ChartDepartment />,
    },
  ],
};
