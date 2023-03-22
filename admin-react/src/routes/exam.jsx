import ExamList from "../page/exam/ExamList";

export default {
  path: "exam",
  children: [
    {
      index: true,
      element: <ExamList />,
    },
  ],
};
