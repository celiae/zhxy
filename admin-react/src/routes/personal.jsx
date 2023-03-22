import PersonalDetail from "../page/personal/PersonalDetail";

export default {
  path: "personal",
  children: [
    {
      index: true,
      element: <PersonalDetail />,
    },
  ],
};
