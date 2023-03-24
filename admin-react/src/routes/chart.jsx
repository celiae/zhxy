import ChartList from "../page/chart/ChartList";

export default {
  path: "chart",
  children: [
    {
      index: true,
      element: <ChartList />,
    },
  ],
};
